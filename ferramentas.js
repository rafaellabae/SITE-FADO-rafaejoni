// ========== FERRAMENTAS - Fados IPCA ==========

// ========== DADOS ESTÁTICOS ==========

// Galeria de fotos (apenas para membros)
const galeriaData = [
    { id: 1, src: 'img/galeria/atuacao1.jpg', caption: 'Serenata na Sé de Braga', category: 'atuacoes', date: '2024-05-15' },
    { id: 2, src: 'img/galeria/ensaio1.jpg', caption: 'Ensaio semanal', category: 'ensaios', date: '2024-03-10' },
    { id: 3, src: 'img/galeria/convivio1.jpg', caption: 'Jantar de Natal', category: 'convivios', date: '2024-12-20' },
    // Adicionar mais fotos aqui
];

// ========== AFINADOR ==========
let audioContext;
let analyser;
let microphone;
let isAfinadorRunning = false;

const NOTAS = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const NOTAS_PT = ['Dó', 'Dó#', 'Ré', 'Ré#', 'Mi', 'Fá', 'Fá#', 'Sol', 'Sol#', 'Lá', 'Lá#', 'Si'];

function initAfinador() {
    const btnAfinador = document.getElementById('btnAfinador');
    if (!btnAfinador) return;

    btnAfinador.addEventListener('click', toggleAfinador);
}

async function toggleAfinador() {
    const btnAfinador = document.getElementById('btnAfinador');
    const status = document.getElementById('afinadorStatus');

    if (isAfinadorRunning) {
        stopAfinador();
        btnAfinador.textContent = '🎤 Iniciar';
        status.textContent = 'Clica para iniciar';
        return;
    }

    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 2048;

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyser);

        isAfinadorRunning = true;
        btnAfinador.textContent = '⏹️ Parar';
        status.textContent = 'A ouvir...';

        detectPitch();
    } catch (err) {
        console.error('Erro ao aceder ao microfone:', err);
        status.textContent = 'Erro: permite o microfone';
    }
}

function stopAfinador() {
    isAfinadorRunning = false;
    if (microphone) {
        microphone.disconnect();
    }
    if (audioContext) {
        audioContext.close();
    }
}

function detectPitch() {
    if (!isAfinadorRunning) return;

    const bufferLength = analyser.fftSize;
    const buffer = new Float32Array(bufferLength);
    analyser.getFloatTimeDomainData(buffer);

    const frequency = autoCorrelate(buffer, audioContext.sampleRate);

    if (frequency > 0) {
        const noteData = frequencyToNote(frequency);
        updateAfinadorDisplay(noteData, frequency);
    }

    requestAnimationFrame(detectPitch);
}

function autoCorrelate(buffer, sampleRate) {
    const SIZE = buffer.length;
    let rms = 0;

    for (let i = 0; i < SIZE; i++) {
        rms += buffer[i] * buffer[i];
    }
    rms = Math.sqrt(rms / SIZE);

    if (rms < 0.01) return -1;

    let r1 = 0, r2 = SIZE - 1;
    const threshold = 0.2;
    for (let i = 0; i < SIZE / 2; i++) {
        if (Math.abs(buffer[i]) < threshold) { r1 = i; break; }
    }
    for (let i = 1; i < SIZE / 2; i++) {
        if (Math.abs(buffer[SIZE - i]) < threshold) { r2 = SIZE - i; break; }
    }

    const buf = buffer.slice(r1, r2);
    const c = new Array(buf.length).fill(0);

    for (let i = 0; i < buf.length; i++) {
        for (let j = 0; j < buf.length - i; j++) {
            c[i] += buf[j] * buf[j + i];
        }
    }

    let d = 0;
    while (c[d] > c[d + 1]) d++;
    let maxval = -1, maxpos = -1;
    for (let i = d; i < buf.length; i++) {
        if (c[i] > maxval) {
            maxval = c[i];
            maxpos = i;
        }
    }

    let T0 = maxpos;
    return sampleRate / T0;
}

function frequencyToNote(frequency) {
    const noteNum = 12 * (Math.log(frequency / 440) / Math.log(2));
    const noteIndex = Math.round(noteNum) + 69;
    const cents = Math.round((noteNum - Math.round(noteNum)) * 100);

    return {
        note: NOTAS[noteIndex % 12],
        notePt: NOTAS_PT[noteIndex % 12],
        octave: Math.floor(noteIndex / 12) - 1,
        cents: cents
    };
}

function updateAfinadorDisplay(noteData, frequency) {
    const notaEl = document.getElementById('notaAtual');
    const freqEl = document.getElementById('frequencia');
    const meterBar = document.getElementById('meterBar');
    const status = document.getElementById('afinadorStatus');

    if (notaEl) notaEl.textContent = `${noteData.notePt}${noteData.octave}`;
    if (freqEl) freqEl.textContent = `${frequency.toFixed(1)} Hz`;

    // Meter bar: -50 to +50 cents
    const offset = Math.max(-50, Math.min(50, noteData.cents));
    const percentage = 50 + offset;
    if (meterBar) meterBar.style.width = `${percentage}%`;

    // Status
    if (status) {
        if (Math.abs(noteData.cents) < 5) {
            status.textContent = '✅ Afinado!';
            status.style.color = '#4CAF50';
        } else if (noteData.cents > 0) {
            status.textContent = '↓ Muito alto';
            status.style.color = '#ff9800';
        } else {
            status.textContent = '↑ Muito baixo';
            status.style.color = '#ff9800';
        }
    }
}

// ========== METRÓNOMO ==========
let bpm = 120;
let isMetronomoRunning = false;
let metronomoInterval;
let currentBeat = 0;

function initMetronomo() {
    const btnMetronomo = document.getElementById('btnMetronomo');
    if (!btnMetronomo) return;

    btnMetronomo.addEventListener('click', toggleMetronomo);
    updateBpmDisplay();
}

function toggleMetronomo() {
    const btnMetronomo = document.getElementById('btnMetronomo');

    if (isMetronomoRunning) {
        stopMetronomo();
        btnMetronomo.textContent = '▶️ Iniciar';
    } else {
        startMetronomo();
        btnMetronomo.textContent = '⏹️ Parar';
    }
}

function startMetronomo() {
    isMetronomoRunning = true;
    currentBeat = 0;
    const interval = 60000 / bpm;
    
    // Create audio context for click sound
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    metronomoInterval = setInterval(() => {
        playClick(audioCtx, currentBeat === 0);
        updateBeatIndicator();
        currentBeat = (currentBeat + 1) % 4;
    }, interval);
}

function stopMetronomo() {
    isMetronomoRunning = false;
    if (metronomoInterval) {
        clearInterval(metronomoInterval);
    }
    resetBeatIndicator();
}

function playClick(audioCtx, isAccent) {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.frequency.value = isAccent ? 1000 : 800;
    gainNode.gain.value = isAccent ? 0.3 : 0.2;
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
    
    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + 0.1);
}

function updateBeatIndicator() {
    const beats = document.querySelectorAll('.beat-indicator .beat');
    beats.forEach((beat, i) => {
        beat.classList.toggle('active', i === currentBeat);
    });
}

function resetBeatIndicator() {
    const beats = document.querySelectorAll('.beat-indicator .beat');
    beats.forEach(beat => beat.classList.remove('active'));
}

function changeBpm(delta) {
    bpm = Math.max(20, Math.min(300, bpm + delta));
    updateBpmDisplay();
    
    if (isMetronomoRunning) {
        stopMetronomo();
        startMetronomo();
        document.getElementById('btnMetronomo').textContent = '⏹️ Parar';
    }
}

function updateBpmDisplay() {
    const display = document.getElementById('bpmDisplay');
    if (display) display.textContent = bpm;
}

// ========== MINHAS MÚSICAS ==========
function initMinhasMusicas() {
    updateMinhasMusicas();
}

function updateMinhasMusicas() {
    const container = document.getElementById('minhasMusasContent');
    if (!container) return;

    if (typeof isAuthenticated === 'undefined' || !isAuthenticated || 
        typeof firebaseAuth === 'undefined' || !firebaseAuth?.currentUser) {
        container.innerHTML = '<p class="login-hint">🔒 Entra na tua conta para ver as tuas músicas</p>';
        return;
    }

    // Get from cache
    const favorites = [];
    const studying = [];

    if (typeof userProgressCache !== 'undefined' && typeof repertoireData !== 'undefined' && typeof getSongProgressId !== 'undefined') {
        userProgressCache.forEach((progress, songId) => {
            const song = repertoireData.find(s => getSongProgressId(s) === songId);
            if (song) {
                if (progress.favorite) favorites.push({ ...song, progress });
                if (progress.studying) studying.push({ ...song, progress });
            }
        });
    }

    let html = '<div class="minhas-musicas-lists">';

    if (favorites.length > 0) {
        html += '<div class="mm-section"><h4>⭐ Favoritas</h4><ul>';
        favorites.forEach(song => {
            html += `<li onclick="openSongModal(repertoireData.find(s => s.id === ${song.id}))">${song.title}</li>`;
        });
        html += '</ul></div>';
    }

    if (studying.length > 0) {
        html += '<div class="mm-section"><h4>📖 Estudando</h4><ul>';
        studying.forEach(song => {
            const stars = '★'.repeat(song.progress.rating || 0) + '☆'.repeat(5 - (song.progress.rating || 0));
            html += `<li onclick="openSongModal(repertoireData.find(s => s.id === ${song.id}))">${song.title} <span class="mm-stars">${stars}</span></li>`;
        });
        html += '</ul></div>';
    }

    if (favorites.length === 0 && studying.length === 0) {
        html += '<p class="empty-hint">Ainda não marcaste nenhuma música.<br>Abre uma música e marca como favorita ou em estudo!</p>';
    }

    html += '</div>';
    container.innerHTML = html;
}

// ========== SETLIST BUILDER ==========
let currentSetlist = [];

function openSetlistModal() {
    const modal = document.getElementById('setlistModal');
    if (!modal) return;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Populate available songs
    const availableContainer = document.getElementById('availableSongs');
    if (typeof repertoireData !== 'undefined') {
        availableContainer.innerHTML = repertoireData.map(song => `
            <div class="setlist-song" draggable="true" data-id="${song.id}">
                <span class="song-name">${song.title}</span>
                <button class="btn-add" onclick="addToSetlist(${song.id})">+</button>
            </div>
        `).join('');
    } else {
        availableContainer.innerHTML = '<p class="empty-hint">Carregando músicas...</p>';
    }

    currentSetlist = [];
    updateSelectedSongs();

    // Search filter
    const searchInput = document.getElementById('setlistSearch');
    if (searchInput) {
        searchInput.value = '';
        searchInput.oninput = (e) => {
            const term = e.target.value.toLowerCase();
            document.querySelectorAll('#availableSongs .setlist-song').forEach(el => {
                const name = el.querySelector('.song-name')?.textContent.toLowerCase() || '';
                el.style.display = name.includes(term) ? '' : 'none';
            });
        };
    }

    // Close handlers
    const closeBtn = document.getElementById('setlistModalClose');
    const overlay = document.getElementById('setlistModalOverlay');
    const saveBtn = document.getElementById('btnSaveSetlist');
    const exportBtn = document.getElementById('btnExportSetlist');
    
    if (closeBtn) closeBtn.onclick = closeSetlistModal;
    if (overlay) overlay.onclick = closeSetlistModal;
    if (saveBtn) saveBtn.onclick = saveSetlist;
    if (exportBtn) exportBtn.onclick = exportSetlist;
    
    // ESC key to close
    document.addEventListener('keydown', handleSetlistKeyClose);
}

function handleSetlistKeyClose(e) {
    if (e.key === 'Escape') closeSetlistModal();
}

function closeSetlistModal() {
    const modal = document.getElementById('setlistModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', handleSetlistKeyClose);
    }
}

function addToSetlist(songId) {
    if (currentSetlist.includes(songId)) return;
    currentSetlist.push(songId);
    updateSelectedSongs();
}

function removeFromSetlist(songId) {
    currentSetlist = currentSetlist.filter(id => id !== songId);
    updateSelectedSongs();
}

function updateSelectedSongs() {
    const container = document.getElementById('selectedSongs');
    const countEl = document.getElementById('setlistCount');
    
    if (countEl) countEl.textContent = `(${currentSetlist.length})`;

    container.innerHTML = currentSetlist.map((songId, index) => {
        const song = repertoireData.find(s => s.id === songId);
        return `
            <div class="setlist-song selected" draggable="true" data-id="${songId}">
                <span class="song-order">${index + 1}.</span>
                <span class="song-name">${song.title}</span>
                <button class="btn-remove" onclick="removeFromSetlist(${songId})">×</button>
            </div>
        `;
    }).join('');

    // Enable drag and drop reordering
    enableSetlistDragDrop();
}

function enableSetlistDragDrop() {
    const container = document.getElementById('selectedSongs');
    const items = container.querySelectorAll('.setlist-song');

    items.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', item.dataset.id);
            item.classList.add('dragging');
        });

        item.addEventListener('dragend', () => {
            item.classList.remove('dragging');
        });

        item.addEventListener('dragover', (e) => {
            e.preventDefault();
            const dragging = container.querySelector('.dragging');
            const siblings = [...container.querySelectorAll('.setlist-song:not(.dragging)')];
            const nextSibling = siblings.find(sibling => {
                const rect = sibling.getBoundingClientRect();
                return e.clientY < rect.top + rect.height / 2;
            });
            container.insertBefore(dragging, nextSibling);
        });
    });

    container.addEventListener('drop', () => {
        const newOrder = [...container.querySelectorAll('.setlist-song')].map(el => parseInt(el.dataset.id));
        currentSetlist = newOrder;
        updateSelectedSongs();
    });
}

async function saveSetlist() {
    if (typeof firebaseAuth === 'undefined' || !firebaseAuth?.currentUser) {
        alert('Entra na tua conta para guardar setlists');
        return;
    }

    const name = document.getElementById('setlistName').value.trim();
    const date = document.getElementById('setlistDate').value;

    if (!name) {
        alert('Dá um nome à setlist');
        return;
    }

    if (currentSetlist.length === 0) {
        alert('Adiciona músicas à setlist');
        return;
    }

    const setlist = {
        name,
        date,
        songs: currentSetlist,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        userId: firebaseAuth.currentUser.uid
    };

    try {
        await firebaseDb.collection('setlists').add(setlist);
        alert('✅ Setlist guardada!');
        closeSetlistModal();
        loadSetlists();
    } catch (err) {
        console.error('Erro ao guardar:', err);
        alert('❌ Erro ao guardar setlist');
    }
}

function exportSetlist() {
    const name = document.getElementById('setlistName').value.trim() || 'Setlist';
    const date = document.getElementById('setlistDate').value || new Date().toLocaleDateString('pt-PT');

    let text = `SETLIST: ${name}\n`;
    text += `Data: ${date}\n`;
    text += `${'='.repeat(40)}\n\n`;

    currentSetlist.forEach((songId, i) => {
        const song = repertoireData.find(s => s.id === songId);
        text += `${i + 1}. ${song.title}\n`;
        if (song.tom) text += `   Tom: ${song.tom}\n`;
        text += '\n';
    });

    text += `\nTotal: ${currentSetlist.length} músicas`;

    // Download as text file
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name.replace(/\s+/g, '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

async function loadSetlists() {
    const container = document.getElementById('setlistsList');
    if (!container) return;
    
    if (typeof firebaseAuth === 'undefined' || !firebaseAuth?.currentUser || typeof firebaseDb === 'undefined') {
        return;
    }

    try {
        const snapshot = await firebaseDb.collection('setlists')
            .where('userId', '==', firebaseAuth.currentUser.uid)
            .orderBy('createdAt', 'desc')
            .limit(5)
            .get();

        if (snapshot.empty) {
            container.innerHTML = '<p class="empty-hint">Nenhuma setlist</p>';
            return;
        }

        container.innerHTML = snapshot.docs.map(doc => {
            const data = doc.data();
            return `<div class="setlist-item" onclick="viewSetlist('${doc.id}')">${data.name} (${data.songs.length})</div>`;
        }).join('');
    } catch (err) {
        console.warn('Erro ao carregar setlists:', err);
    }
}

// ========== GALERIA ==========
let currentPhotoIndex = 0;
let filteredPhotos = [];

function initGaleria() {
    const grid = document.getElementById('galeriaGrid');
    const filters = document.querySelectorAll('.galeria-filters .filter-btn');
    if (!grid) return;

    filteredPhotos = [...galeriaData];
    renderGaleria();

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            filteredPhotos = filter === 'todos' 
                ? [...galeriaData] 
                : galeriaData.filter(p => p.category === filter);
            renderGaleria();
        });
    });
}

function renderGaleria() {
    const grid = document.getElementById('galeriaGrid');
    if (!grid) return;

    if (filteredPhotos.length === 0) {
        grid.innerHTML = '<p class="empty-message">Nenhuma foto disponível</p>';
        return;
    }

    grid.innerHTML = filteredPhotos.map((photo, index) => `
        <div class="galeria-item" onclick="openPhotoModal(${index})">
            <img src="${photo.src}" alt="${photo.caption}" loading="lazy" onerror="this.style.display='none'">
            <div class="galeria-caption">${photo.caption}</div>
        </div>
    `).join('');
}

function openPhotoModal(index) {
    const modal = document.getElementById('photoModal');
    if (!modal) return;

    currentPhotoIndex = index;
    updatePhotoModal();

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    document.getElementById('photoModalClose').onclick = closePhotoModal;
    document.getElementById('photoModalOverlay').onclick = closePhotoModal;
    document.getElementById('btnPrevPhoto').onclick = () => navigatePhoto(-1);
    document.getElementById('btnNextPhoto').onclick = () => navigatePhoto(1);
    
    // Keyboard navigation
    document.addEventListener('keydown', handlePhotoKeyNav);
}

function handlePhotoKeyNav(e) {
    if (e.key === 'ArrowLeft') navigatePhoto(-1);
    else if (e.key === 'ArrowRight') navigatePhoto(1);
    else if (e.key === 'Escape') closePhotoModal();
}

function closePhotoModal() {
    const modal = document.getElementById('photoModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', handlePhotoKeyNav);
    }
}

function navigatePhoto(direction) {
    currentPhotoIndex = (currentPhotoIndex + direction + filteredPhotos.length) % filteredPhotos.length;
    updatePhotoModal();
}

function updatePhotoModal() {
    const photo = filteredPhotos[currentPhotoIndex];
    document.getElementById('photoModalImage').src = photo.src;
    document.getElementById('photoModalCaption').textContent = photo.caption;
}

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', () => {
    initAfinador();
    initMetronomo();
    initMinhasMusicas();
    initGaleria();
    
    // Registar listener de autenticação
    const checkAuth = () => {
        if (typeof firebaseAuth !== 'undefined' && firebaseAuth) {
            // Listener para mudanças de auth
            firebaseAuth.onAuthStateChanged((user) => {
                console.log('Auth state changed in ferramentas:', !!user);
                updateMinhasMusicas();
                updateMemberOnlySections(!!user);
                if (user) loadSetlists();
            });
            
            // Verificar estado atual imediatamente
            const currentUser = firebaseAuth.currentUser;
            console.log('Current user on init:', !!currentUser);
            updateMemberOnlySections(!!currentUser);
        } else {
            // Firebase ainda não carregou, tentar novamente
            setTimeout(checkAuth, 100);
        }
    };
    
    // Iniciar verificação
    setTimeout(checkAuth, 50);
});

// Atualiza visibilidade das secções apenas para membros
function updateMemberOnlySections(isLoggedIn) {
    console.log('Updating member sections, logged in:', isLoggedIn);
    const memberOnlySections = document.querySelectorAll('.member-only-section');
    const memberOnlyNavs = document.querySelectorAll('.member-only-nav');
    
    memberOnlySections.forEach(section => {
        if (isLoggedIn) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
    
    memberOnlyNavs.forEach(nav => {
        if (isLoggedIn) {
            nav.classList.add('visible');
        } else {
            nav.classList.remove('visible');
        }
    });
}

// Exportar para acesso global
window.updateMemberOnlySections = updateMemberOnlySections;
window.updateMinhasMusicas = updateMinhasMusicas;

// Ensure functions are globally accessible for onclick handlers
window.changeBpm = changeBpm;
window.openSetlistModal = openSetlistModal;
window.closeSetlistModal = closeSetlistModal;
window.addToSetlist = addToSetlist;
window.removeFromSetlist = removeFromSetlist;
window.openPhotoModal = openPhotoModal;
window.closePhotoModal = closePhotoModal;
window.navigatePhoto = navigatePhoto;
