# 📁 Estrutura do Projeto - Site Fados IPCA

## 🎯 Organização Profissional

```
SITE-FADO-rafaejoni/
│
├── 📄 index.html                 # Página principal (ponto de entrada)
├── 📄 README.md                  # Documentação do projeto
├── 📄 SECURITY.md                # Políticas de segurança
├── 📄 manifest.json              # Configuração PWA
├── 📄 .gitignore                 # Ficheiros a ignorar no Git
│
├── 📁 src/                       # Código-fonte (atualizado em produção)
│   ├── script.js                 # Lógica principal do site
│   ├── styles.css                # Estilos CSS
│   ├── ferramentas.js            # Ferramentas interativas (afinador, metrónomo, etc)
│   ├── data.js                   # Dados do repertório e recursos
│   ├── firebase-config.js        # Configuração do Firebase
│   └── service-worker.js         # Service Worker para PWA
│
├── 📁 docs/                      # Documentação interna (não usada no site)
│   ├── GUIA_ADMIN.md
│   ├── GUIA_ATUALIZACAO.md
│   ├── GUIA_AUTENTICACAO.md
│   ├── GUIA_GOOGLE_DRIVE.md
│   ├── GUIA_HOSPEDAGEM.md
│   ├── GUIA_INSTRUMENTAIS.md
│   ├── GUIA_VIDEOS_PRIVADOS_SIMPLES.md
│   ├── ATUALIZACAO_PDFS.md
│   ├── CAMINHOS_ACORDES_CORRIGIDOS.md
│   ├── CORRECOES_INSTRUMENTAIS.md
│   ├── EXEMPLO_VIDEOS_DRIVE.md
│   ├── GITHUB_DEPLOY.md
│   ├── INICIO_RAPIDO.md
│   ├── REDESIGN_COMPLETO.md
│   ├── RESUMO_PROJETO.md
│   ├── SOLUCAO_VIDEOS_PRIVADOS.md
│   ├── VERIFICACAO_FINAL.md
│   └── conversor_links_drive.html
│
├── 📁 biblioteca/                # Conteúdo musical (letras, acordes, etc)
│   ├── acarta/
│   ├── ameianoiteaoluar/
│   ├── amordeestudante/
│   ├── ... (35+ subpastas)
│   └── Instrumentais/
│
├── 📁 img/                       # Imagens e assets
│   ├── logo1.png
│   ├── logo2.png
│   ├── ... (5+ logos)
│   └── fundo.jpg
│
├── 📁 scripts/                   # Scripts de administração
│   └── scan_for_secrets.ps1
│
└── 📁 .git/                      # Controlo de versão Git
```

---

## 🔑 Ficheiros Principais

| Ficheiro | Descrição |
|----------|-----------|
| `index.html` | Página principal - Estrutura HTML do site |
| `src/script.js` | Lógica principal: autenticação, ferramentas admin, modais |
| `src/styles.css` | Estilos CSS completos (1352 linhas) |
| `src/ferramentas.js` | Afinador, metrónomo, setlists, galeria |
| `src/data.js` | Dados do repertório e recursos (letras, acordes, vídeos) |
| `src/firebase-config.js` | Credenciais e configuração do Firebase |
| `src/service-worker.js` | Service Worker para funcionalidade offline |

---

## 📊 Estatísticas

- **Total de Recursos**: 103+ (letras, acordes, áudios, vídeos)
- **Categorias de Música**: 35+ subpastas
- **Linhas de Código**: ~3000+ linhas (HTML + CSS + JS)
- **Documentação**: 17 ficheiros de guia

---

## 🚀 Como Usar

### Desenvolvimento Local
```bash
# Iniciar servidor local na porta 8000
python -m http.server 8000

# Abrir no navegador
# http://localhost:8000
```

### Deploy
- Hospedado em GitHub Pages
- Integração com Firebase (Autenticação, Storage, Firestore)
- PWA com Service Worker para funcionamento offline

---

## 🔐 Segurança

- Firestore Security Rules: Apenas utilizadores autenticados
- Coleção `admins` no Firestore para controlo de permissões
- Custom Claims em Firebase Auth para verificação de permissões
- Ver `SECURITY.md` para mais detalhes

---

## 📝 Notas

- **Documentação interna** em `docs/` - não afeta o funcionamento do site
- **Código em produção** em `src/` - carregado pelo index.html
- **Biblioteca** em `biblioteca/` - conteúdo musical centralizado
- Atualizado em: 18 de Abril de 2026

---

**Estrutura organizada para facilitar manutenção e escalabilidade! ✨**
