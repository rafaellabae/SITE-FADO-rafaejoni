# Guia Completo de Atualização - Fados IPCA

Este guia detalha passo-a-passo como atualizar o conteúdo do site sem conhecimentos técnicos avançados.

## 📋 Índice

1. [Adicionar Músicas ao Repertório](#adicionar-músicas-ao-repertório)
2. [Adicionar Partituras](#adicionar-partituras)
3. [Adicionar Letras](#adicionar-letras)
4. [Adicionar Áudios](#adicionar-áudios)
5. [Adicionar Vídeos](#adicionar-vídeos)
6. [Atualizar Informações do Grupo](#atualizar-informações-do-grupo)
7. [Alterar Cores e Estilo](#alterar-cores-e-estilo)
8. [Publicar Alterações](#publicar-alterações)

---

## 🎵 Adicionar Músicas ao Repertório

### Passo 1: Preparar os Ficheiros

1. **Partitura (PDF)**: Coloque na pasta `biblioteca/partituras/`
2. **Vídeo**: Carregue no YouTube e copie o ID do vídeo

### Passo 2: Abrir o Ficheiro de Dados

1. Abra o ficheiro `data.js` com um editor de texto (Notepad++, VS Code, ou mesmo Bloco de Notas)
2. Procure pela linha que contém `const repertoireData = [`

### Passo 3: Adicionar a Nova Música

Adicione um novo objeto **antes** do `];` final:

```javascript
const repertoireData = [
    // ... músicas existentes ...
    
    {
        id: 7,  // ⚠️ Use o próximo número disponível
        title: "Fado Português",
        category: "tradicional",  // Opções: tradicional, coimbra, lisboa, outros
        tom: "Lá menor",
        composer: "Amália Rodrigues",
        lyrics: `Ó gente da minha terra
Agora é que eu percebi
Esta tristeza que trago
Foi de vós que a recebi

E pareceria ternura
Se eu me deixasse embalar
Era maior a amargura
Menos triste o meu cantar`,
        partitura: "partituras/fado-portugues.pdf",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        notes: "Interpretação original de Amália Rodrigues"
    }
    // ⚠️ ATENÇÃO: Se não for a última música, adicione uma vírgula aqui
];
```

### Passo 4: Salvar e Testar

1. Salve o ficheiro `data.js`
2. Abra `index.html` no navegador
3. Navegue até "Repertório"
4. Verifique se a nova música aparece

### ⚠️ Pontos de Atenção

- **Vírgulas**: Cada música precisa de vírgula depois do `}`, exceto a última
- **Aspas**: Use `"` para texto normal e `` ` `` (acento grave) para letras com várias linhas
- **ID**: Sempre use o próximo número sequencial
- **Categoria**: Apenas use: `tradicional`, `coimbra`, `lisboa`, ou `outros`

---

## 📄 Adicionar Partituras

### Passo 1: Preparar o Ficheiro PDF

1. Certifique-se que o PDF está otimizado (não muito grande)
2. Nomeie o ficheiro de forma clara (ex: `fado-coimbra.pdf`)
3. Coloque na pasta `biblioteca/partituras/`

### Passo 2: Adicionar à Biblioteca

Abra `data.js` e procure por `libraryResources = {` e depois `partituras: [`

Adicione:

```javascript
partituras: [
    // ... partituras existentes ...
    
    {
        id: 6,  // Próximo número
        title: "Fado de Coimbra - Partitura Completa",
        filename: "fado-coimbra.pdf",
        category: "coimbra",
        file: "biblioteca/partituras/fado-coimbra.pdf",
        size: "250 KB",  // Tamanho aproximado
        addedDate: "2024-02-15"  // Data de hoje
    }
]
```

---

## 📝 Adicionar Letras

Similar às partituras, mas na seção `letras:`:

```javascript
letras: [
    {
        id: 4,
        title: "Coletânea - Fados Modernos",
        filename: "letras-modernos.pdf",
        category: "outros",
        file: "biblioteca/letras/letras-modernos.pdf",
        size: "180 KB",
        addedDate: "2024-02-15"
    }
]
```

---

## 🎵 Adicionar Áudios

### Formato Recomendado: MP3

```javascript
audios: [
    {
        id: 4,
        title: "Ensaio - Fado Alexandrino",
        filename: "ensaio-alexandrino.mp3",
        category: "tradicional",
        file: "biblioteca/audios/ensaio-alexandrino.mp3",
        size: "3.5 MB",
        duration: "3:42",  // Duração do áudio
        addedDate: "2024-02-15"
    }
]
```

### Como Descobrir a Duração:

1. Windows: Clique direito → Propriedades → Detalhes
2. Mac: Clique direito → Obter Informações

---

## 🎬 Adicionar Vídeos

### Opção 1: YouTube (Recomendado)

```javascript
videos: [
    {
        id: 4,
        title: "Atuação - Noite de Fados Fevereiro",
        filename: "atuacao-fev-2024.mp4",
        category: "atuacoes",
        file: "biblioteca/videos/atuacao-fev-2024.mp4",
        url: "https://www.youtube.com/watch?v=VIDEO_ID_AQUI",
        size: "250 MB",
        duration: "28:15",
        addedDate: "2024-02-15"
    }
]
```

### Como Obter o ID do YouTube:

Na URL `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
O ID é: `dQw4w9WgXcQ` (depois do `v=`)

### Opção 2: Vídeo Local

1. Coloque o ficheiro MP4 em `biblioteca/videos/`
2. Não preencha o campo `url`

---

## 📢 Atualizar Informações do Grupo

### Alterar Texto "Sobre o Grupo"

Abra `index.html` e procure por `<section class="section-about"`:

```html
<div class="about-text">
    <p class="lead">
        Aqui você pode escrever a nova descrição principal do grupo
    </p>
    <p>
        Parágrafo adicional com mais informações sobre o grupo,
        história, objetivos, etc.
    </p>
</div>
```

### Atualizar Estatísticas

Procure por `<div class="about-stats">`:

```html
<div class="stat-card">
    <div class="stat-number">15+</div>  <!-- Altere o número -->
    <div class="stat-label">Membros Ativos</div>
</div>
```

### Alterar Contactos

Procure por `<section class="section-contact"`:

```html
<p><a href="mailto:novo-email@ipca.pt">novo-email@ipca.pt</a></p>
```

### Adicionar Redes Sociais

```html
<div class="social-links">
    <a href="https://instagram.com/fadosipca" class="social-link">Instagram</a>
    <a href="https://facebook.com/fadosipca" class="social-link">Facebook</a>
    <a href="https://youtube.com/@fadosipca" class="social-link">YouTube</a>
</div>
```

---

## 🎨 Alterar Cores e Estilo

### Mudar Esquema de Cores

Abra `styles.css` e procure por `:root {`:

```css
:root {
    /* Cores Principais */
    --color-primary: #8B2635;        /* Vinho - Cor principal */
    --color-accent: #D4AF37;         /* Dourado - Destaques */
    --color-background: #FEFDFB;     /* Fundo claro */
    
    /* Modifique estes valores com códigos hexadecimais */
}
```

### Paletas Sugeridas

**Opção Azul Tradicional:**
```css
--color-primary: #1E3A5F;
--color-accent: #C5A572;
```

**Opção Verde Escuro:**
```css
--color-primary: #2C5F2D;
--color-accent: #DAA520;
```

**Opção Preto e Dourado:**
```css
--color-primary: #1A1A1A;
--color-accent: #FFD700;
```

### Ferramenta para Escolher Cores

Use https://coolors.co/ para gerar paletas harmoniosas

---

## 🚀 Publicar Alterações

### Se estiver usando GitHub Pages:

1. Abra o GitHub Desktop (ou use o terminal)
2. Escreva uma descrição do que alterou (ex: "Adicionadas 3 novas músicas")
3. Clique em "Commit to main"
4. Clique em "Push origin"
5. Aguarde 1-2 minutos e o site será atualizado automaticamente

### Se estiver usando Netlify:

1. Acesse https://app.netlify.com
2. Arraste a pasta atualizada para o painel
3. Aguarde o deploy (30-60 segundos)

### Se estiver usando Vercel:

1. As alterações sincronizam automaticamente do GitHub
2. Ou faça upload manual em https://vercel.com

---

## ✅ Checklist de Verificação

Antes de publicar, confirme:

- [ ] Todas as músicas têm ID único
- [ ] Ficheiros PDF/MP3/MP4 estão nas pastas corretas
- [ ] Não há erros de sintaxe (vírgulas, aspas)
- [ ] Links do YouTube funcionam
- [ ] Testou localmente no navegador
- [ ] Todas as imagens carregam corretamente

---

## 🆘 Resolução de Erros Comuns

### Erro: "Música não aparece"

**Causa**: Erro de sintaxe no `data.js`

**Solução**:
1. Verifique vírgulas: cada objeto precisa de `,` exceto o último
2. Verifique aspas: use `"` ou `'` consistentemente
3. Use validador JSON: https://jsonlint.com/

### Erro: "Partitura não descarrega"

**Causa**: Caminho do ficheiro incorreto

**Solução**:
1. Confirme que o ficheiro está em `biblioteca/partituras/`
2. Verifique o nome do ficheiro (maiúsculas/minúsculas importam)
3. Confirme que o campo `file:` tem o caminho completo

### Erro: "Vídeo não carrega"

**Causa**: URL do YouTube incorreto

**Solução**:
1. Use formato: `https://www.youtube.com/embed/VIDEO_ID`
2. Não use o formato `watch?v=`
3. Certifique-se que o vídeo é público

### Erro: "Página em branco"

**Causa**: Erro grave de JavaScript

**Solução**:
1. Abra as Ferramentas de Desenvolvedor (F12)
2. Vá na aba "Console"
3. Veja o erro e procure a linha mencionada
4. Restaure a última versão funcional

---

## 💡 Dicas Profissionais

1. **Faça Backups**: Antes de grandes alterações, copie todos os ficheiros
2. **Teste Localmente**: Sempre teste no navegador antes de publicar
3. **Use Editores Adequados**: VS Code, Sublime Text, ou Notepad++
4. **Validação**: Use https://validator.w3.org/ para verificar HTML
5. **Otimize PDFs**: Use https://smallpdf.com/pt/comprimir-pdf
6. **Organize Ficheiros**: Use nomes claros e consistentes

---

## 📞 Precisa de Ajuda?

- **Email**: fados@ipca.pt
- **Documentação Online**: Consulte o README.md
- **Tutoriais**: YouTube tem vários tutoriais sobre HTML/CSS básico

---

**Última atualização**: Fevereiro 2025
**Versão do Guia**: 1.0
