// Main JavaScript file for Fados IPCA website

// ========== AUTENTICAÇÃO (Global) ==========
const ADMIN_EMAILS = ['admin@exemplo.com'];
let isAuthenticated = false; // Controla se o utilizador está autenticado
let userRole = 'visitor'; // 'visitor', 'member', ou 'admin'
let currentSong = null; // Armazena a música atual do modal
let firebaseAuth = null;
let firebaseStorage = null;
let firebaseDb = null;
const storageUrlCache = new Map();
const userProgressCache = new Map();

function initializeFirebase() {
    if (!window.firebase || !firebase.apps || !firebase.apps.length) {
        console.warn('Firebase nao inicializado. Verifique firebase-config.js');
        return;
    }

    firebaseAuth = firebase.auth();
    firebaseStorage = firebase.storage();
    firebaseDb = firebase.firestore();

    firebaseAuth.onAuthStateChanged(handleAuthStateChange);
}

function handleAuthStateChange(user) {
    isAuthenticated = Boolean(user);
    if (user && user.email && ADMIN_EMAILS.includes(user.email)) {
        userRole = 'admin';
    } else if (user) {
        userRole = 'member';
    } else {
        userRole = 'visitor';
    }

    updateAuthUI(user);
    updateMediaTabsVisibility();
    loadAllUserProgress();
    
    // Atualizar secções apenas para membros
    const tryUpdateMemberSections = () => {
        if (typeof window.updateMemberOnlySections === 'function') {
            window.updateMemberOnlySections(isAuthenticated);
        } else {
            // ferramentas.js ainda não carregou, tentar novamente
            setTimeout(tryUpdateMemberSections, 100);
        }
    };
    tryUpdateMemberSections();

    if (currentSong) {
        loadSongResources(currentSong);
        loadUserProgress(currentSong);
    }
}

function updateMediaTabsVisibility() {
    const audioTab = document.querySelector('.song-tab-btn[data-tab="audio"]');
    const videoTab = document.querySelector('.song-tab-btn[data-tab="video"]');
    
    if (audioTab) audioTab.style.display = isAuthenticated ? '' : 'none';
    if (videoTab) videoTab.style.display = isAuthenticated ? '' : 'none';
}

async function loadAllUserProgress() {
    userProgressCache.clear();
    
    if (!firebaseDb || !firebaseAuth || !firebaseAuth.currentUser) {
        refreshSongCards();
        return;
    }
    
    try {
        const snapshot = await firebaseDb
            .collection('users')
            .doc(firebaseAuth.currentUser.uid)
            .collection('progress')
            .get();
        
        snapshot.forEach(doc => {
            userProgressCache.set(doc.id, doc.data());
        });
    } catch (error) {
        console.warn('Erro ao carregar progresso:', error);
    }
    
    refreshSongCards();
    
    // Atualizar Minhas Músicas
    if (typeof window.updateMinhasMusicas === 'function') {
        window.updateMinhasMusicas();
    }
}

function refreshSongCards() {
    const repertoireGrid = document.getElementById('repertoireGrid');
    if (!repertoireGrid) return;
    
    const cards = repertoireGrid.querySelectorAll('.song-card');
    cards.forEach(card => {
        const progressId = card.dataset.songId;
        if (!progressId) return;
        
        const progress = userProgressCache.get(progressId);
        
        let existingBadges = card.querySelector('.user-status-badges');
        if (existingBadges) existingBadges.remove();
        
        if (progress && (progress.favorite || progress.studying)) {
            const badgesHtml = `
                <div class="user-status-badges">
                    ${progress.favorite ? '<span class="user-badge favorite">⭐ Favorita</span>' : ''}
                    ${progress.studying ? '<span class="user-badge studying">📖 Estudando</span>' : ''}
                </div>
            `;
            card.insertAdjacentHTML('afterbegin', badgesHtml);
        }
    });
}

function updateAuthUI(user) {
    const btnAdmin = document.getElementById('btnAdmin');
    const btnLogout = document.getElementById('btnLogout');
    const btnLogin = document.getElementById('btnLogin');
    const memberInfo = document.getElementById('memberInfo');

    if (btnAdmin) {
        if (userRole === 'admin') {
            btnAdmin.innerHTML = '✅ Admin';
            btnAdmin.style.background = 'var(--color-accent)';
        } else if (userRole === 'member') {
            btnAdmin.innerHTML = '👤 Membro';
            btnAdmin.style.background = 'var(--color-accent)';
        } else {
            btnAdmin.innerHTML = 'Admin';
            btnAdmin.style.background = '';
        }
    }

    if (btnLogin) {
        btnLogin.style.display = user ? 'none' : 'inline-flex';
    }
    
    if (btnLogout) {
        btnLogout.style.display = user ? 'inline-flex' : 'none';
    }
    
    if (memberInfo) {
        if (user) {
            memberInfo.innerHTML = `
                <div class="member-welcome">
                    <img src="${user.photoURL || ''}" alt="" class="member-avatar">
                    <div class="member-details">
                        <p class="member-name">${user.displayName || 'Membro'}</p>
                        <p class="member-email">${user.email || ''}</p>
                    </div>
                </div>
            `;
            memberInfo.style.display = 'block';
        } else {
            memberInfo.innerHTML = '';
            memberInfo.style.display = 'none';
        }
    }
}

function isStoragePath(value) {
    if (!value) return false;
    return value.startsWith('storage:') || value.startsWith('gs://');
}

function normalizeStoragePath(value) {
    if (!value) return null;
    if (value.startsWith('storage:')) {
        return value.replace('storage:', '');
    }
    if (value.startsWith('gs://')) {
        return value;
    }
    return null;
}

async function getStorageDownloadUrl(storagePath) {
    if (!storagePath || !firebaseStorage) return storagePath;

    if (storageUrlCache.has(storagePath)) {
        return storageUrlCache.get(storagePath);
    }

    try {
        const ref = storagePath.startsWith('gs://')
            ? firebaseStorage.refFromURL(storagePath)
            : firebaseStorage.ref(storagePath);
        const url = await ref.getDownloadURL();
        storageUrlCache.set(storagePath, url);
        return url;
    } catch (error) {
        console.warn('Falha ao obter URL do Storage:', storagePath, error);
        return storagePath;
    }
}

async function resolveResourceUrl(resource) {
    if (!resource) return '';

    const fileValue = typeof resource === 'string' ? resource : resource.file;
    const storagePath = typeof resource === 'string'
        ? normalizeStoragePath(resource)
        : resource.storagePath || normalizeStoragePath(resource.file);

    if (storagePath) {
        return getStorageDownloadUrl(storagePath);
    }

    return fileValue || '';
}

function getDisplayNameFromPath(pathValue) {
    if (!pathValue) return '';
    const raw = pathValue.replace('storage:', '');
    const parts = raw.split('/');
    return parts[parts.length - 1];
}

function getAuthRequiredMessage() {
    return `
        <div class="auth-required-message">
            <div class="lock-icon">🔒</div>
            <h3>Conteudo Restrito</h3>
            <p>Audios e videos sao exclusivos para membros do Grupo de Fados IPCA.</p>
            <p>Para proteger a privacidade dos nossos membros, este conteudo requer autenticacao.</p>
            <button class="btn btn-primary" onclick="openLoginModal()">
                🔑 Fazer Login
            </button>
        </div>
    `;
}

function getLoginToSaveMessage() {
    return `
        <div class="auth-required-message">
            <div class="lock-icon">🔒</div>
            <h3>Login necessario</h3>
            <p>Entre com a sua conta para guardar progresso e notas pessoais.</p>
            <button class="btn btn-primary" onclick="openLoginModal()">
                🔑 Entrar
            </button>
        </div>
    `;
}

// Função global para abrir modal de login
function openLoginModal() {
    const adminModal = document.getElementById('adminModal');
    if (adminModal) {
        adminModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focar no campo de senha
        setTimeout(() => {
            const emailInput = document.getElementById('memberEmail');
            if (emailInput) emailInput.focus();
        }, 100);
    }
}

// Função para recarregar vídeos após login
function reloadVideosAfterLogin() {
    if (currentSong && isAuthenticated) {
        loadSongResources(currentSong);
        
        // Mudar para a tab de vídeos
        const videoBtn = document.querySelector('.song-tab-btn[data-tab="video"]');
        if (videoBtn) {
            setTimeout(() => {
                videoBtn.click();
            }, 200);
        }
    }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeFirebase();
    initializeNavigation();
    initializeHero();
    initializeRepertoire();
    // initializeLibrary(); // Removed - now integrated into song modals
    initializeInstrumentais();
    initializeTablaturaViewer();
    initializeModal();
    initializeScrollEffects();
    initializeAdmin();
});

// ========== Navigation ==========
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Animate hamburger
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (navToggle) {
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // Handle scroll effects
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// ========== Hero Section ==========
function initializeHero() {
    // Smooth scroll for hero buttons
    const heroButtons = document.querySelectorAll('.hero-actions a');
    heroButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ========== Repertoire Section ==========
function initializeRepertoire() {
    const repertoireGrid = document.getElementById('repertoireGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('repertoireSearch');
    
    let currentCategory = 'todos';
    let searchTerm = '';

    // Render all songs initially
    renderSongs('todos', '');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter songs
            currentCategory = button.getAttribute('data-category');
            renderSongs(currentCategory, searchTerm);
        });
    });
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value.toLowerCase();
            renderSongs(currentCategory, searchTerm);
        });
    }

    function renderSongs(category, search) {
        let filteredSongs = repertoireData;

        // Filter by category
        if (category !== 'todos') {
            filteredSongs = filteredSongs.filter(song => song.category === category);
        }
        
        // Filter by search term
        if (search) {
            filteredSongs = filteredSongs.filter(song => 
                song.title.toLowerCase().includes(search) ||
                song.composer.toLowerCase().includes(search) ||
                (song.lyrics && song.lyrics.toLowerCase().includes(search))
            );
        }

        // Clear grid
        repertoireGrid.innerHTML = '';

        // Add songs with animation
        filteredSongs.forEach((song, index) => {
            const songCard = createSongCard(song);
            songCard.style.animationDelay = `${index * 0.1}s`;
            repertoireGrid.appendChild(songCard);
        });

        // Show message if no songs
        if (filteredSongs.length === 0) {
            repertoireGrid.innerHTML = '<p class="text-center" style="grid-column: 1/-1; padding: 2rem; color: var(--color-text-light);">Nenhuma música encontrada.</p>';
        }
    }

    function createSongCard(song) {
        const card = document.createElement('div');
        card.className = 'song-card';
        card.dataset.songId = getSongProgressId(song); // Adicionar ID para progresso
        card.style.animation = 'fadeInUp 0.5s ease forwards';
        card.style.opacity = '0';

        const categoryLabels = {
            'tradicional': 'Tradicional',
            'coimbra': 'Fado de Coimbra',
            'lisboa': 'Fado de Lisboa',
            'outros': 'Outros'
        };
        
        // Count available resources
        const hasGP = libraryResources.guitarraPortuguesa.some(r => 
            r.title.toLowerCase().includes(song.title.toLowerCase())
        );
        const hasAudio = libraryResources.audios.some(r => {
            const songTitleLower = song.title.toLowerCase();
            const resourceTitleLower = r.title.toLowerCase();
            return resourceTitleLower.includes(songTitleLower) || 
                   r.filename.toLowerCase().includes(songTitleLower);
        });
        const hasVideo = libraryResources.videos.some(r => 
            r.title.toLowerCase().includes(song.title.toLowerCase())
        ) || song.video;
        
        let resourceBadges = '';
        if (song.lyrics) resourceBadges += '<span class="resource-badge">📝 Letra</span>';
        if (song.partitura) resourceBadges += '<span class="resource-badge">🎸 Acordes</span>';
        if (hasGP) resourceBadges += '<span class="resource-badge">🪕 GP</span>';
        if (hasAudio) resourceBadges += '<span class="resource-badge">🎵 Áudio</span>';
        if (hasVideo) resourceBadges += '<span class="resource-badge">🎬 Vídeo</span>';

        card.innerHTML = `
            <h3 class="song-title">${song.title}</h3>
            <span class="song-category">${categoryLabels[song.category]}</span>
            <div class="song-info">
                <span>${song.composer}</span>
                ${song.tom ? `<span>Tom: ${song.tom}</span>` : ''}
            </div>
            <div class="song-resources">
                ${resourceBadges}
            </div>
        `;

        // Open modal on click
        card.addEventListener('click', () => {
            openSongModal(song);
        });

        return card;
    }
}

// ========== Library Section ==========
function initializeLibrary() {
    const searchInput = document.getElementById('librarySearch');
    const tabButtons = document.querySelectorAll('.tab-btn');

    // Initialize all tabs
    renderLibraryResources('letras');
    renderLibraryResources('guitarraClassica');
    renderLibraryResources('guitarraPortuguesa');
    renderLibraryResources('audios');
    renderLibraryResources('videos');

    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');

            // Update active button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show corresponding content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tab).classList.add('active');
        });
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterLibraryResources(searchTerm);
    });

    function renderLibraryResources(type) {
        const grid = document.getElementById(`${type}Grid`);
        const resources = libraryResources[type];

        grid.innerHTML = '';

        resources.forEach((resource, index) => {
            const card = createResourceCard(resource, type);
            card.style.animationDelay = `${index * 0.1}s`;
            grid.appendChild(card);
        });
    }

    function createResourceCard(resource, type) {
        const card = document.createElement('div');
        card.className = 'resource-card';
        card.setAttribute('data-title', resource.title.toLowerCase());
        card.style.animation = 'fadeIn 0.5s ease forwards';

        const icons = {
            letras: '📝',
            guitarraClassica: '🎸',
            guitarraPortuguesa: '🪕',
            audios: '🎵',
            videos: '🎬'
        };

        let metaInfo = `${resource.size}`;
        if (resource.duration) {
            metaInfo += ` • ${resource.duration}`;
        }

        card.innerHTML = `
            <div class="resource-icon">${icons[type]}</div>
            <div>
                <h3 class="resource-title">${resource.title}</h3>
                <p class="resource-meta">${metaInfo}</p>
                <p class="resource-meta">Adicionado: ${formatDate(resource.addedDate)}</p>
            </div>
            <a href="${resource.file}" class="resource-link" download>
                Download →
            </a>
        `;

        return card;
    }

    function filterLibraryResources(searchTerm) {
        document.querySelectorAll('.resource-card').forEach(card => {
            const title = card.getAttribute('data-title');
            if (title.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-PT', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
}

// ========== Modal ==========
function initializeModal() {
    const modal = document.getElementById('songModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');

    // Close modal handlers
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

async function openSongModal(song) {
    const modal = document.getElementById('songModal');
    
    // Salvar música atual globalmente
    currentSong = song;
    
    // Set title and composer
    document.getElementById('songModalTitle').textContent = song.title;
    document.getElementById('songModalComposer').textContent = `${song.composer} ${song.tom ? '• ' + song.tom : ''}`;
    
    // Load all resources for this song
    await loadSongResources(song);
    await loadUserProgress(song);
    
    // Initialize tab switching
    initializeSongTabs();
    
    // Hide audio/video tabs if not authenticated
    updateMediaTabsVisibility();
    
    // Open modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

async function loadSongResources(song) {
    // 1. LETRA
    const lyricsEl = document.getElementById('songLyrics');
    if (song.lyrics && song.lyrics.trim()) {
        lyricsEl.textContent = song.lyrics;
    } else {
        lyricsEl.innerHTML = '<p class="empty-message">Letra não disponível</p>';
    }
    
    // 2. ACORDES (Guitarra Clássica)
    const acordesEl = document.getElementById('songAcordes');
    const acordesResources = libraryResources.guitarraClassica.filter(r => 
        r.title.toLowerCase().includes(song.title.toLowerCase())
    );
    
    if (song.partitura || song.partituraStoragePath) {
        const partituraUrl = await resolveResourceUrl({
            file: song.partitura,
            storagePath: song.partituraStoragePath
        });
        const partituraLabel = getDisplayNameFromPath(song.partitura || song.partituraStoragePath);
        acordesEl.innerHTML = `
            <div class="resource-item">
                <div class="resource-info">
                    <h4>Partitura / Acordes</h4>
                    <p>${partituraLabel}</p>
                </div>
                <div class="resource-actions">
                    <a href="${partituraUrl}" class="btn-resource" download>⬇️ Download</a>
                    ${partituraUrl.endsWith('.pdf') ? `<a href="${partituraUrl}" class="btn-resource" target="_blank">👁️ Ver</a>` : ''}
                </div>
            </div>
        `;
    } else if (acordesResources.length > 0) {
        const acordesHtml = await Promise.all(acordesResources.map(async (r) => {
            const fileUrl = await resolveResourceUrl(r);
            return `
                <div class="resource-item">
                    <div class="resource-info">
                        <h4>${r.title}</h4>
                        <p>${r.filename}</p>
                    </div>
                    <div class="resource-actions">
                        <a href="${fileUrl}" class="btn-resource" download>⬇️ Download</a>
                    </div>
                </div>
            `;
        }));
        acordesEl.innerHTML = acordesHtml.join('');
    } else {
        acordesEl.innerHTML = '<p class="empty-message">Acordes não disponíveis</p>';
    }
    
    // 3. GUITARRA PORTUGUESA
    const gpEl = document.getElementById('songGP');
    const gpResources = libraryResources.guitarraPortuguesa.filter(r => 
        r.title.toLowerCase().includes(song.title.toLowerCase())
    );
    
    if (gpResources.length > 0) {
        const gpHtml = await Promise.all(gpResources.map(async (r) => {
            const fileUrl = await resolveResourceUrl(r);
            return `
                <div class="resource-item">
                    <div class="resource-info">
                        <h4>${r.title}</h4>
                        <p>${r.filename}</p>
                    </div>
                    <div class="resource-actions">
                        <a href="${fileUrl}" class="btn-resource" download>⬇️ Download</a>
                        <a href="${fileUrl}" class="btn-resource" target="_blank">👁️ Ver</a>
                    </div>
                </div>
            `;
        }));
        gpEl.innerHTML = gpHtml.join('');
    } else {
        gpEl.innerHTML = '<p class="empty-message">Tablatura de Guitarra Portuguesa não disponível</p>';
    }
    
    // 4. ÁUDIOS
    const audiosEl = document.getElementById('songAudios');
    const audioResources = libraryResources.audios.filter(r => {
        const songTitleLower = song.title.toLowerCase();
        const resourceTitleLower = r.title.toLowerCase();
        
        // Verificar se o título do áudio contém o título da música
        // Ou se o filename contém o título da música
        return resourceTitleLower.includes(songTitleLower) || 
               r.filename.toLowerCase().includes(songTitleLower);
    });
    
    if (!isAuthenticated) {
        audiosEl.innerHTML = '<p class="empty-message">Inicie sessão para aceder aos áudios</p>';
    } else if (audioResources.length > 0) {
        const audiosHtml = await Promise.all(audioResources.map(async (r) => {
            const fileUrl = await resolveResourceUrl(r);
            return `
                <div class="resource-item">
                    <div class="resource-info">
                        <h4>${r.title}</h4>
                        <p>${r.filename} ${r.duration ? '• ' + r.duration : ''}</p>
                    </div>
                    <div class="resource-actions">
                        <a href="${fileUrl}" class="btn-resource" download>⬇️ Download</a>
                    </div>
                </div>
                <audio class="audio-player" controls>
                    <source src="${fileUrl}" type="audio/mpeg">
                    Seu navegador não suporta áudio.
                </audio>
            `;
        }));
        audiosEl.innerHTML = audiosHtml.join('');
    } else {
        audiosEl.innerHTML = '<p class="empty-message">Gravações de áudio não disponíveis</p>';
    }
    
    // 5. VÍDEOS (APENAS PARA MEMBROS AUTENTICADOS)
    const videosEl = document.getElementById('songVideos');
    
    // Verificar se o utilizador está autenticado
    if (!isAuthenticated) {
        videosEl.innerHTML = '<p class="empty-message">Inicie sessão para aceder aos vídeos</p>';
        return; // Sai da função aqui
    }
    
    // Se autenticado, mostra os vídeos normalmente
    const videoResources = libraryResources.videos.filter(r => 
        r.title.toLowerCase().includes(song.title.toLowerCase())
    );
    
    let videosHTML = '';
    
    // Video from song data (YouTube embed)
    if (song.video) {
        videosHTML += `
            <div class="resource-item">
                <div class="resource-info">
                    <h4>Vídeo de Referência - YouTube</h4>
                </div>
            </div>
            <iframe 
                class="video-player" 
                width="100%" 
                height="400" 
                src="${song.video}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
    }
    
    // Video files from library
    if (videoResources.length > 0) {
        const videosHtml = await Promise.all(videoResources.map(async (r) => {
            const fileUrl = await resolveResourceUrl(r);
            return `
                <div class="resource-item">
                    <div class="resource-info">
                        <h4>${r.title}</h4>
                        <p>${r.filename}</p>
                    </div>
                    <div class="resource-actions">
                        <a href="${fileUrl}" class="btn-resource" download>⬇️ Download</a>
                    </div>
                </div>
                <video class="video-player" controls>
                    <source src="${fileUrl}" type="video/mp4">
                    Seu navegador não suporta vídeo.
                </video>
            `;
        }));
        videosHTML += videosHtml.join('');
    }
    
    if (videosHTML) {
        videosEl.innerHTML = videosHTML;
    } else {
        videosEl.innerHTML = '<p class="empty-message">Vídeos não disponíveis</p>';
    }
}

function getSongProgressId(song) {
    if (song.id !== undefined && song.id !== null) {
        return String(song.id);
    }
    // Sanitizar o título para usar como ID do Firestore
    // Remove caracteres especiais que o Firestore não aceita (/, ., ~, *, [], etc)
    return song.title
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
        .replace(/\s+/g, '-') // Substitui espaços por hífens
        .replace(/-+/g, '-') // Remove hífens duplicados
        .substring(0, 100); // Limita tamanho
}

function setProgressStatus(message, isError = false) {
    const statusEl = document.getElementById('progressStatus');
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.classList.toggle('is-error', isError);
    if (message) {
        setTimeout(() => {
            if (statusEl.textContent === message) {
                statusEl.textContent = '';
                statusEl.classList.remove('is-error');
            }
        }, 3000);
    }
}

async function saveUserProgress(song, updates) {
    console.log('saveUserProgress called with:', { song: song?.title, updates });
    
    if (!firebaseDb) {
        console.warn('saveUserProgress: firebaseDb não está disponível');
        setProgressStatus('Firebase não inicializado', true);
        return;
    }
    
    if (!firebaseAuth) {
        console.warn('saveUserProgress: firebaseAuth não está disponível');
        setProgressStatus('Autenticação não disponível', true);
        return;
    }
    
    if (!firebaseAuth.currentUser) {
        console.warn('saveUserProgress: utilizador não está autenticado');
        setProgressStatus('Faça login para guardar', true);
        return;
    }
    
    if (!song) {
        console.warn('saveUserProgress: song é null/undefined');
        setProgressStatus('Erro: música não definida', true);
        return;
    }

    const progressId = getSongProgressId(song);
    console.log('Progress ID:', progressId);
    
    const ref = firebaseDb
        .collection('users')
        .doc(firebaseAuth.currentUser.uid)
        .collection('progress')
        .doc(progressId);

    const payload = {
        songId: progressId,
        songTitle: song.title,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        ...updates
    };

    try {
        setProgressStatus('A guardar...');
        console.log('Saving to Firestore:', payload);
        await ref.set(payload, { merge: true });
        console.log('Saved successfully!');
        setProgressStatus('Progresso guardado!');
        
        // Atualizar cache e badges nos cards
        userProgressCache.set(progressId, { ...userProgressCache.get(progressId), ...updates });
        refreshSongCards();
        
        // Atualizar Minhas Músicas
        if (typeof window.updateMinhasMusicas === 'function') {
            window.updateMinhasMusicas();
        }
    } catch (error) {
        console.error('Erro ao guardar progresso:', error);
        setProgressStatus('Falha ao guardar: ' + error.message, true);
    }
}

function updateStarUI(container, rating) {
    const stars = container.querySelectorAll('.progress-star');
    stars.forEach((star) => {
        const value = Number(star.dataset.value);
        star.classList.toggle('active', value <= rating);
    });
}

async function loadUserProgress(song) {
    const progressEl = document.getElementById('songProgress');
    if (!progressEl) return;

    if (!firebaseDb || !firebaseAuth || !firebaseAuth.currentUser) {
        progressEl.innerHTML = '';
        progressEl.style.display = 'none';
        return;
    }
    
    progressEl.style.display = 'block';

    const progressId = getSongProgressId(song);
    const ref = firebaseDb
        .collection('users')
        .doc(firebaseAuth.currentUser.uid)
        .collection('progress')
        .doc(progressId);

    let progressData = {
        rating: 0,
        favorite: false,
        studying: false,
        notes: '',
        lastPracticed: ''
    };

    try {
        const snapshot = await ref.get();
        if (snapshot.exists) {
            progressData = { ...progressData, ...snapshot.data() };
        }
    } catch (error) {
        console.warn('Erro ao carregar progresso:', error);
    }

    progressEl.innerHTML = `
        <div class="progress-card">
            <div class="progress-row">
                <span class="progress-label">Conforto</span>
                <div class="progress-stars" id="progressStars">
                    <button class="progress-star" data-value="1" aria-label="1">★</button>
                    <button class="progress-star" data-value="2" aria-label="2">★</button>
                    <button class="progress-star" data-value="3" aria-label="3">★</button>
                    <button class="progress-star" data-value="4" aria-label="4">★</button>
                    <button class="progress-star" data-value="5" aria-label="5">★</button>
                </div>
            </div>
            <div class="progress-row progress-toggles">
                <label class="progress-toggle">
                    <input type="checkbox" id="progressFavorite"> Favorita
                </label>
                <label class="progress-toggle">
                    <input type="checkbox" id="progressStudying"> Estudando
                </label>
            </div>
            <div class="progress-row">
                <label class="progress-label" for="progressLastPracticed">Ultima pratica</label>
                <input type="date" id="progressLastPracticed" class="progress-input">
            </div>
            <div class="progress-row">
                <label class="progress-label" for="progressNotes">Notas pessoais</label>
                <textarea id="progressNotes" class="progress-textarea" rows="3"></textarea>
            </div>
            <div class="progress-row progress-status" id="progressStatus"></div>
        </div>
    `;

    const starsContainer = document.getElementById('progressStars');
    const favoriteInput = document.getElementById('progressFavorite');
    const studyingInput = document.getElementById('progressStudying');
    const lastPracticedInput = document.getElementById('progressLastPracticed');
    const notesInput = document.getElementById('progressNotes');

    updateStarUI(starsContainer, progressData.rating || 0);
    if (favoriteInput) favoriteInput.checked = Boolean(progressData.favorite);
    if (studyingInput) studyingInput.checked = Boolean(progressData.studying);
    if (lastPracticedInput) lastPracticedInput.value = progressData.lastPracticed || '';
    if (notesInput) notesInput.value = progressData.notes || '';

    starsContainer.querySelectorAll('.progress-star').forEach((star) => {
        star.addEventListener('click', () => {
            const rating = Number(star.dataset.value) || 0;
            updateStarUI(starsContainer, rating);
            saveUserProgress(song, { rating });
        });
    });

    if (favoriteInput) {
        favoriteInput.addEventListener('change', () => {
            saveUserProgress(song, { favorite: favoriteInput.checked });
        });
    }

    if (studyingInput) {
        studyingInput.addEventListener('change', () => {
            saveUserProgress(song, { studying: studyingInput.checked });
        });
    }

    if (lastPracticedInput) {
        lastPracticedInput.addEventListener('change', () => {
            saveUserProgress(song, { lastPracticed: lastPracticedInput.value });
        });
    }

    if (notesInput) {
        notesInput.addEventListener('blur', () => {
            saveUserProgress(song, { notes: notesInput.value.trim() });
        });
    }
}

function initializeSongTabs() {
    const tabBtns = document.querySelectorAll('.song-tab-btn');
    const tabContents = document.querySelectorAll('.song-tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Remove active from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active to clicked
            btn.classList.add('active');
            const targetContent = document.getElementById('tab' + targetTab.charAt(0).toUpperCase() + targetTab.slice(1));
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// ========== Scroll Effects ==========
function initializeScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// ========== Admin Panel ==========
function initializeAdmin() {
    const btnAdmin = document.getElementById('btnAdmin');
    const adminModal = document.getElementById('adminModal');
    const adminModalOverlay = document.getElementById('adminModalOverlay');
    const adminModalClose = document.getElementById('adminModalClose');
    const btnLogin = document.getElementById('btnLogin');
    const btnLogout = document.getElementById('btnLogout');
    const adminLogin = document.getElementById('adminLogin');
    const adminPanel = document.getElementById('adminPanel');

    // Temporary data storage (in-memory)
    let tempRepertoireData = [...repertoireData];
    let tempLibraryResources = JSON.parse(JSON.stringify(libraryResources));

    // Open admin modal
    btnAdmin.addEventListener('click', () => {
        adminModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        if (userRole === 'admin') {
            adminLogin.style.display = 'none';
            adminPanel.style.display = 'block';
        } else {
            adminLogin.style.display = 'block';
            adminPanel.style.display = 'none';
        }
    });

    // Close admin modal
    adminModalClose.addEventListener('click', closeAdminModal);
    adminModalOverlay.addEventListener('click', closeAdminModal);

    function closeAdminModal() {
        adminModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        // Reset to login screen
        adminLogin.style.display = 'block';
        adminPanel.style.display = 'none';
    }

    // Login
    btnLogin.addEventListener('click', async () => {
        if (!firebaseAuth) {
            alert('⚠️ Firebase nao configurado. Preencha o firebase-config.js');
            return;
        }

        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const result = await firebaseAuth.signInWithPopup(provider);
            const isAdmin = result.user && ADMIN_EMAILS.includes(result.user.email);

            if (isAdmin) {
                adminLogin.style.display = 'none';
                adminPanel.style.display = 'block';
            } else {
                closeAdminModal();
                reloadVideosAfterLogin();
                alert('✅ Login efetuado com sucesso!\n\nAudios e videos estao agora disponiveis.');
            }
        } catch (error) {
            console.error('Erro no login:', error);
            alert('❌ Falha no login com Google.\n\nErro: ' + error.message + '\n\nCodigo: ' + error.code);
        }
    });

    // Password enter key
    if (btnLogout) {
        btnLogout.addEventListener('click', async () => {
            if (!firebaseAuth) return;
            try {
                await firebaseAuth.signOut();
                closeAdminModal();
            } catch (error) {
                console.warn('Erro ao sair:', error);
                alert('❌ Nao foi possivel terminar a sessao.');
            }
        });
    }

    // Admin tabs
    const adminTabButtons = document.querySelectorAll('.admin-tab-btn');
    adminTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');

            adminTabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            document.querySelectorAll('.admin-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tab).classList.add('active');
        });
    });

    // Add song form
    const formAddSong = document.getElementById('formAddSong');
    formAddSong.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(formAddSong);
        const newSong = {
            id: tempRepertoireData.length + 1,
            title: formData.get('title'),
            category: formData.get('category'),
            tom: formData.get('tom'),
            composer: formData.get('composer'),
            lyrics: formData.get('lyrics') ? `\`${formData.get('lyrics')}\`` : '',
            partitura: formData.get('partitura') || '',
            video: formData.get('video') || '',
            notes: formData.get('notes') || ''
        };

        tempRepertoireData.push(newSong);
        
        alert('✅ Música adicionada com sucesso! Não esqueça de exportar os dados.');
        formAddSong.reset();
        
        // Switch to export tab
        document.querySelector('.admin-tab-btn[data-tab="export"]').click();
    });

    // Add resource form
    const formAddResource = document.getElementById('formAddResource');
    formAddResource.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(formAddResource);
        const type = formData.get('type');
        const newResource = {
            id: tempLibraryResources[type].length + 1,
            title: formData.get('title'),
            file: formData.get('file'),
            size: formData.get('size') || 'N/A',
            addedDate: new Date().toISOString().split('T')[0]
        };

        if (formData.get('duration')) {
            newResource.duration = formData.get('duration');
        }

        tempLibraryResources[type].push(newResource);
        
        alert('✅ Recurso adicionado com sucesso! Não esqueça de exportar os dados.');
        formAddResource.reset();
        
        // Switch to export tab
        document.querySelector('.admin-tab-btn[data-tab="export"]').click();
    });

    // Export buttons
    document.getElementById('btnExportSongs').addEventListener('click', () => {
        const output = `const repertoireData = ${JSON.stringify(tempRepertoireData, null, 2)};`;
        document.getElementById('exportOutput').value = output;
        document.getElementById('exportOutput').select();
        
        // Try to copy to clipboard
        try {
            navigator.clipboard.writeText(output);
            alert('✅ Código copiado para a área de transferência!');
        } catch (err) {
            alert('📋 Selecione o texto e copie manualmente (Ctrl+C)');
        }
    });

    document.getElementById('btnExportResources').addEventListener('click', () => {
        const output = `const libraryResources = ${JSON.stringify(tempLibraryResources, null, 2)};`;
        document.getElementById('exportOutput').value = output;
        document.getElementById('exportOutput').select();
        
        try {
            navigator.clipboard.writeText(output);
            alert('✅ Código copiado para a área de transferência!');
        } catch (err) {
            alert('📋 Selecione o texto e copie manualmente (Ctrl+C)');
        }
    });

    document.getElementById('btnExportAll').addEventListener('click', () => {
        const output = `// ========== REPERTÓRIO ==========
const repertoireData = ${JSON.stringify(tempRepertoireData, null, 2)};

// ========== BIBLIOTECA MUSICAL ==========
const libraryResources = ${JSON.stringify(tempLibraryResources, null, 2)};`;
        
        document.getElementById('exportOutput').value = output;
        document.getElementById('exportOutput').select();
        
        try {
            navigator.clipboard.writeText(output);
            alert('✅ Código completo copiado para a área de transferência!');
        } catch (err) {
            alert('📋 Selecione o texto e copie manualmente (Ctrl+C)');
        }
    });
}

// ========== Instrumentais Section ==========
function initializeInstrumentais() {
    const instrumentaisGrid = document.getElementById('instrumentaisGrid');
    
    // Render all instrumentais
    instrumentaisData.forEach((instrumental, index) => {
        const card = createInstrumentalCard(instrumental);
        card.style.animationDelay = `${index * 0.1}s`;
        instrumentaisGrid.appendChild(card);
    });
    
    function createInstrumentalCard(instrumental) {
        const card = document.createElement('div');
        card.className = 'instrumental-card';
        card.style.animation = 'fadeInUp 0.5s ease forwards';
        card.style.opacity = '0';
        
        const imageCount = instrumental.images.length;
        const hasPdf = instrumental.pdf ? true : false;
        const firstImage = imageCount > 0 ? `${instrumental.folder}/${instrumental.images[0]}` : null;
        
        const totalResources = imageCount + (hasPdf ? 1 : 0);
        const resourceLabel = totalResources === 1 ? 'recurso' : 'recursos';
        
        card.innerHTML = `
            <div class="instrumental-card-image ${!firstImage ? 'no-image' : ''}">
                ${firstImage ? `<img src="${firstImage}" alt="${instrumental.title}">` : '🎼'}
                ${hasPdf ? '<div class="pdf-badge">📄 PDF</div>' : ''}
            </div>
            <div class="instrumental-card-content">
                <h3 class="instrumental-card-title">${instrumental.title}</h3>
                <div class="instrumental-card-meta">
                    <span class="instrumental-card-composer">${instrumental.composer}</span>
                    <span class="instrumental-card-count">${totalResources} ${resourceLabel}</span>
                </div>
                ${hasPdf && imageCount === 0 ? `
                    <a href="${instrumental.folder}/${instrumental.pdf}" class="btn-pdf-download" download onclick="event.stopPropagation()">
                        📥 Download PDF
                    </a>
                ` : ''}
            </div>
        `;
        
        // Open viewer on click (if has images) or open PDF (if only PDF)
        if (imageCount > 0) {
            card.addEventListener('click', () => {
                openTablaturaViewer(instrumental);
            });
        } else if (hasPdf) {
            // Card is clickable to download PDF
            card.style.cursor = 'pointer';
        } else {
            card.style.opacity = '0.6';
            card.style.cursor = 'not-allowed';
            card.title = 'Sem recursos disponíveis';
        }
        
        return card;
    }
}

// ========== Tablatura Viewer ==========
function initializeTablaturaViewer() {
    const modal = document.getElementById('tablaturaModal');
    const modalOverlay = document.getElementById('tablaturaModalOverlay');
    const modalClose = document.getElementById('tablaturaModalClose');
    const btnPrev = document.getElementById('btnPrevTablatura');
    const btnNext = document.getElementById('btnNextTablatura');
    const btnZoomIn = document.getElementById('btnZoomIn');
    const btnZoomOut = document.getElementById('btnZoomOut');
    const btnResetZoom = document.getElementById('btnResetZoom');
    
    let currentInstrumental = null;
    let currentIndex = 0;
    let currentZoom = 1;
    
    // Close modal handlers
    modalClose.addEventListener('click', closeViewer);
    modalOverlay.addEventListener('click', closeViewer);
    
    // Navigation
    btnPrev.addEventListener('click', () => navigateImage(-1));
    btnNext.addEventListener('click', () => navigateImage(1));
    
    // Zoom controls
    btnZoomIn.addEventListener('click', () => {
        currentZoom = Math.min(currentZoom + 0.25, 3);
        updateZoom();
    });
    
    btnZoomOut.addEventListener('click', () => {
        currentZoom = Math.max(currentZoom - 0.25, 0.5);
        updateZoom();
    });
    
    btnResetZoom.addEventListener('click', () => {
        currentZoom = 1;
        updateZoom();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeViewer();
        if (e.key === 'ArrowLeft') navigateImage(-1);
        if (e.key === 'ArrowRight') navigateImage(1);
        if (e.key === '+' || e.key === '=') btnZoomIn.click();
        if (e.key === '-') btnZoomOut.click();
        if (e.key === '0') btnResetZoom.click();
    });
    
    function closeViewer() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        currentInstrumental = null;
        currentIndex = 0;
        currentZoom = 1;
    }
    
    function navigateImage(direction) {
        if (!currentInstrumental) return;
        
        currentIndex += direction;
        const maxIndex = currentInstrumental.images.length - 1;
        
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        
        updateViewer();
    }
    
    function updateViewer() {
        if (!currentInstrumental) return;
        
        const title = document.getElementById('tablaturaTitle');
        const image = document.getElementById('tablaturaImage');
        const counter = document.getElementById('tablaturaCounter');
        const downloadBtn = document.getElementById('btnDownloadTablatura');
        const downloadPdfBtn = document.getElementById('btnDownloadPdf');
        
        const imagePath = `${currentInstrumental.folder}/${currentInstrumental.images[currentIndex]}`;
        
        title.textContent = currentInstrumental.title;
        image.src = imagePath;
        image.alt = `${currentInstrumental.title} - Página ${currentIndex + 1}`;
        counter.textContent = `${currentIndex + 1} / ${currentInstrumental.images.length}`;
        
        downloadBtn.href = imagePath;
        downloadBtn.download = currentInstrumental.images[currentIndex];
        
        // Show/hide PDF button
        if (currentInstrumental.pdf) {
            downloadPdfBtn.style.display = 'inline-block';
            downloadPdfBtn.href = `${currentInstrumental.folder}/${currentInstrumental.pdf}`;
            downloadPdfBtn.download = currentInstrumental.pdf;
        } else {
            downloadPdfBtn.style.display = 'none';
        }
        
        // Update navigation buttons
        btnPrev.disabled = currentIndex === 0;
        btnNext.disabled = currentIndex === currentInstrumental.images.length - 1;
        
        updateZoom();
    }
    
    function updateZoom() {
        const image = document.getElementById('tablaturaImage');
        image.style.transform = `scale(${currentZoom})`;
    }
    
    // Make openTablaturaViewer globally accessible
    window.openTablaturaViewer = function(instrumental) {
        currentInstrumental = instrumental;
        currentIndex = 0;
        currentZoom = 1;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        updateViewer();
    };
}

