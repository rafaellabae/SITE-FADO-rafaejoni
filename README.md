# Grupo de Fados do IPCA - Site Oficial

TUDO TEMPORÁRIO

Site estático moderno e elegante para o Grupo de Fados do IPCA, criado para centralizar partituras, letras, vídeos de ensaio e informações do grupo.

## 📋 Características

- **Design Elegante**: Estética portuguesa tradicional com toque moderno
- **Totalmente Responsivo**: Otimizado para mobile, tablet e desktop
- **Fácil Manutenção**: Estrutura simples em HTML, CSS e JavaScript puro
- **Biblioteca Musical**: Sistema organizado de partituras, letras, áudios e vídeos
- **Repertório Interativo**: Filtros por categoria e modais informativos
- **SEO Otimizado**: Meta tags e estrutura semântica

## 🚀 Como Usar

### Instalação Local

1. Descarregue todos os ficheiros para uma pasta
2. Abra o ficheiro `index.html` num navegador moderno
3. O site funciona completamente offline (exceto vídeos do YouTube)

### Estrutura de Ficheiros

```
fados-ipca/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interativo
├── data.js             # Dados do repertório e biblioteca
├── README.md           # Este ficheiro
├── GUIA_ATUALIZACAO.md # Instruções detalhadas
└── biblioteca/         # Recursos do grupo
    ├── partituras/
    ├── letras/
    ├── audios/
    └── videos/
```

## 📝 Como Adicionar Conteúdo

### Adicionar Nova Música ao Repertório

Edite o ficheiro `data.js` e adicione um novo objeto ao array `repertoireData`:

```javascript
{
    id: 7,  // Próximo ID sequencial
    title: "Nome da Música",
    category: "tradicional",  // tradicional, coimbra, lisboa, outros
    tom: "Ré maior",
    composer: "Nome do Compositor",
    lyrics: `Letra da música
    linha por linha
    estrofe por estrofe`,
    partitura: "partituras/nome-ficheiro.pdf",
    video: "https://www.youtube.com/embed/VIDEO_ID",  // Opcional
    notes: "Notas adicionais sobre a música"
}
```

### Adicionar Recursos à Biblioteca

No mesmo ficheiro `data.js`, adicione recursos aos objetos apropriados em `libraryResources`:

**Exemplo - Adicionar Partitura:**
```javascript
libraryResources.partituras.push({
    id: 6,
    title: "Nome da Partitura",
    filename: "nome-ficheiro.pdf",
    category: "tradicional",
    file: "biblioteca/partituras/nome-ficheiro.pdf",
    size: "200 KB",
    addedDate: "2024-02-15"
});
```

### Personalizar Informações do Grupo

Edite diretamente o ficheiro `index.html`:

1. **Seção "Sobre"**: Modifique o texto em `<section class="section-about">`
2. **Estatísticas**: Atualize os números em `.stat-card`
3. **Contactos**: Edite os emails e links em `<section class="section-contact">`

## 🌐 Hospedagem Grátis

### Opção 1: GitHub Pages (Recomendado)

1. Crie uma conta no [GitHub](https://github.com)
2. Crie um novo repositório (ex: `fados-ipca`)
3. Faça upload de todos os ficheiros
4. Vá em Settings → Pages
5. Selecione a branch `main` e pasta `/ (root)`
6. O site estará disponível em `https://seu-usuario.github.io/fados-ipca`

**Tutorial detalhado**: https://pages.github.com/

### Opção 2: Netlify

1. Crie conta em [Netlify](https://www.netlify.com)
2. Arraste a pasta do projeto para o painel
3. Site publicado automaticamente!
4. URL personalizado disponível

### Opção 3: Vercel

1. Crie conta em [Vercel](https://vercel.com)
2. Importe o projeto do GitHub ou faça upload
3. Deploy automático
4. Domínio grátis incluído

## 🎨 Personalização de Cores

Para alterar o esquema de cores, edite as variáveis CSS no início do ficheiro `styles.css`:

```css
:root {
    --color-primary: #8B2635;        /* Cor principal (vinho)*/
    --color-accent: #D4AF37;         /* Cor de destaque (dourado) */
    --color-background: #FEFDFB;     /* Cor de fundo */
    /* ... outras cores ... */
}
```

## 📱 Funcionalidades

### Navegação
- Menu responsivo com hamburger menu no mobile
- Smooth scroll entre seções
- Indicador de seção ativa

### Repertório
- Filtros por categoria (Todos, Tradicionais, Coimbra, Lisboa, Outros)
- Cards clicáveis com informações da música
- Modal com letra completa, vídeo e links

### Biblioteca
- 4 categorias: Partituras, Letras, Áudios, Vídeos
- Pesquisa em tempo real
- Links diretos para download

### Design
- Animações suaves de entrada
- Efeitos hover elegantes
- Tipografia refinada (Playfair Display + Lora)
- Paleta de cores tradicional portuguesa

## 🔧 Requisitos Técnicos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- JavaScript ativado
- Sem necessidade de servidor (site estático)
- Ficheiros de recursos devem estar na estrutura correta

## 📊 SEO e Performance

- Semântica HTML5
- Meta tags otimizadas
- Imagens otimizadas (quando adicionadas)
- Carregamento rápido
- Mobile-first design

## 🆘 Resolução de Problemas

**Músicas não aparecem:**
- Verifique se o ficheiro `data.js` está carregado
- Confirme a sintaxe JavaScript (vírgulas, aspas)

**Recursos não descarregam:**
- Confirme se os caminhos dos ficheiros estão corretos
- Verifique se os ficheiros existem na pasta `biblioteca/`

**Layout quebrado no mobile:**
- Limpe o cache do navegador
- Verifique se o ficheiro `styles.css` está carregado

## 📞 Suporte

Para questões técnicas ou sugestões:
- Email: fados@ipca.pt
- Issues no GitHub (se aplicável)

## 📄 Licença

© 2025 Grupo de Fados do IPCA. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para preservar a tradição do fado académico**
