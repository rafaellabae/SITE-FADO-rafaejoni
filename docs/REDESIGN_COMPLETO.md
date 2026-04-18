# 🎨 Redesign Completo - Site Fados IPCA

## ✅ Mudanças Implementadas

### 1. **Repertório + Biblioteca = UMA SÓ SEÇÃO** 🎵

Antes tinha:
- **Repertório**: Lista de músicas
- **Biblioteca**: Recursos separados (letras, acordes, GP, áudios, vídeos)

Agora:
- **Repertório Completo**: Cada música mostra TODOS os recursos numa única janela com tabs:
  - 📝 **Letra**
  - 🎸 **Acordes** (Guitarra Clássica)
  - 🪕 **Guitarra Portuguesa**
  - 🎵 **Áudios** (com player integrado)
  - 🎬 **Vídeos** (YouTube + arquivos locais)

### 2. **Esquema de Cores: Branco, Preto & Dourado** 🖤⚪🏅

Todas as cores foram atualizadas para usar apenas:
- **Branco** (#FFFFFF) - Fundo principal
- **Preto** (#000000) - Texto e elementos escuros
- **Dourado** (#D4AF37) - Destaques e acentos

Elementos atualizados:
- ✅ Navbar: Preto com detalhes dourados
- ✅ Hero: Texto branco com título em dourado
- ✅ Botões: Dourado com hover preto
- ✅ Cards: Bordas douradas, badges dourados
- ✅ Modal: Tabs douradas, fundo branco

### 3. **Funcionalidades Novas** 🚀

#### Pesquisa no Repertório
- Campo de pesquisa que filtra por:
  - Nome da música
  - Compositor
  - Conteúdo da letra

#### Badges de Recursos nos Cards
Cada card de música mostra quais recursos estão disponíveis:
- 📝 Letra
- 🎸 Acordes
- 🪕 GP (Guitarra Portuguesa)
- 🎵 Áudio
- 🎬 Vídeo

#### Modal Completo com Tabs
Ao clicar numa música, abre modal com 5 tabs:
1. **Letra**: Texto completo formatado
2. **Acordes**: Download de partituras/acordes
3. **GP**: Tablaturas de guitarra portuguesa
4. **Áudios**: Player integrado + download
5. **Vídeos**: YouTube embeds + player de vídeos locais

### 4. **Navegação Simplificada** 🧭

Menu atualizado:
- Início
- Sobre
- **Repertório** (antes era Repertório + Biblioteca)
- Instrumentais
- Contactos
- Admin

## 📂 Arquivos Modificados

1. **index.html**
   - Removida seção "Biblioteca Musical"
   - Adicionada pesquisa no Repertório
   - Novo modal de música com tabs
   - Menu simplificado

2. **styles.css**
   - Cores atualizadas para branco/preto/dourado
   - Estilos para badges de recursos
   - Estilos para modal com tabs
   - Estilos para players de áudio/vídeo

3. **script.js**
   - Nova função `loadSongResources()` - carrega TODOS os recursos
   - Nova função `initializeSongTabs()` - gerencia tabs no modal
   - Pesquisa integrada no repertório
   - Contagem de recursos disponíveis por música

## 🎯 Como Usar

### Para Utilizadores
1. Vá para **Repertório**
2. Use a barra de pesquisa ou filtros (Todas / Fado de Coimbra / Outros)
3. Clique numa música
4. Navegue pelas tabs para ver letra, acordes, GP, áudios e vídeos
5. Faça download ou ouça/veja diretamente no browser

### Para Administradores
O painel admin continua funcional:
- Adicionar nova música
- Adicionar recursos
- Exportar dados

## 📊 Estatísticas do Projeto

- **35 músicas** no repertório
- **103 recursos** catalogados
  - 7 letras
  - 20 acordes de guitarra clássica
  - 5 tablaturas de guitarra portuguesa
  - 37 áudios
  - 11 vídeos
- **23 peças instrumentais**

## 🚨 Nota Importante sobre Arquivos de Média

Os arquivos de **áudio (.mp3, .wav) e vídeo (.mp4)** não são enviados para o GitHub devido ao tamanho (limite de 100MB por arquivo).

Eles permanecem:
- ✅ No seu computador local
- ❌ Não no repositório GitHub

Se quiser hospedar o site com áudios/vídeos funcionais, terá que:
1. Fazer upload dos arquivos para serviço de hosting (ex: Google Drive, AWS S3)
2. Atualizar os caminhos em `data.js`

## 🎨 Próximos Passos (Opcionais)

- [ ] Adicionar letras às 13 músicas que estão vazias
- [ ] Adicionar informação de tom às músicas
- [ ] Otimizar imagens (comprimir JPGs)
- [ ] Adicionar loading spinners nos players
- [ ] Criar playlist de áudios
- [ ] Adicionar partilha social

---

**Data da Atualização**: 11 de Fevereiro de 2026  
**Versão**: 2.0 - Redesign Completo
