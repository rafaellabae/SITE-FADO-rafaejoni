# 🚀 Início Rápido - Fados IPCA

Guia express para começar a usar o site em **5 minutos**.

---

## 📦 O Que Você Recebeu

```
fados-ipca/
├── index.html              ← Página principal
├── styles.css              ← Estilos visuais
├── script.js               ← Funcionalidade interativa
├── data.js                 ← 📝 EDITE AQUI para adicionar músicas
├── README.md               ← Documentação completa
├── GUIA_ATUALIZACAO.md     ← Como atualizar conteúdo
├── GUIA_HOSPEDAGEM.md      ← Como publicar online
├── INICIO_RAPIDO.md        ← Este ficheiro
├── .gitignore              ← Configuração Git
└── biblioteca/             ← Coloque PDFs, MP3s aqui
    ├── partituras/
    ├── letras/
    ├── audios/
    └── videos/
```

---

## ✅ Passo 1: Testar Localmente (1 min)

1. Abra a pasta `fados-ipca`
2. **Duplo clique** em `index.html`
3. O site abre no navegador!

✨ **Pronto!** O site já funciona localmente.

---

## 📝 Passo 2: Adicionar Primeira Música (2 min)

### Abra `data.js` em qualquer editor de texto

Adicione no final do array `repertoireData`:

```javascript
{
    id: 7,
    title: "Fado Português",
    category: "tradicional",
    tom: "Lá menor",
    composer: "Amália Rodrigues",
    lyrics: `Ó gente da minha terra
Agora é que eu percebi`,
    partitura: "partituras/fado-portugues.pdf",
    video: "",
    notes: "Linda interpretação de Amália"
}
```

**Salve** o ficheiro e **atualize** o navegador (F5).

---

## 📄 Passo 3: Adicionar Partitura (1 min)

1. Coloque o PDF em `biblioteca/partituras/`
2. No `data.js`, na seção `partituras`, adicione:

```javascript
{
    id: 6,
    title: "Fado Português - Partitura",
    filename: "fado-portugues.pdf",
    category: "tradicional",
    file: "biblioteca/partituras/fado-portugues.pdf",
    size: "200 KB",
    addedDate: "2024-02-15"
}
```

**Salve** e teste!

---

## 🌐 Passo 4: Publicar Online (10 min)

### Opção Mais Fácil: Netlify

1. Vá em https://www.netlify.com
2. Faça "Sign up" (com email ou GitHub)
3. **Arraste** a pasta inteira para o site
4. Aguarde 30 segundos
5. **Pronto!** URL do tipo: `nome.netlify.app`

### Opção Mais Usada: GitHub Pages

1. Crie conta em https://github.com
2. Crie repositório "fados-ipca"
3. Faça upload dos ficheiros
4. Settings → Pages → Ative
5. URL: `usuario.github.io/fados-ipca`

**Detalhes completos**: Veja `GUIA_HOSPEDAGEM.md`

---

## 🎨 Personalizar (Opcional)

### Mudar Cores

Abra `styles.css`, procure `:root {` e altere:

```css
--color-primary: #8B2635;  /* Sua cor principal */
--color-accent: #D4AF37;   /* Cor de destaque */
```

Use https://coolors.co/ para escolher cores.

### Alterar Texto "Sobre"

Abra `index.html`, procure `<section class="section-about"` e edite o texto.

---

## 📚 Próximos Passos

- 📖 Leia `README.md` para visão completa
- 📝 Consulte `GUIA_ATUALIZACAO.md` para tutoriais detalhados
- 🌐 Veja `GUIA_HOSPEDAGEM.md` para opções de publicação
- 💡 Experimente adicionar mais músicas e recursos!

---

## 🆘 Problemas?

### Música não aparece
- ✅ Salvou o `data.js`?
- ✅ Tem vírgulas entre objetos?
- ✅ Atualizou o navegador (F5)?

### Partitura não descarrega
- ✅ PDF está em `biblioteca/partituras/`?
- ✅ Nome do ficheiro está correto?
- ✅ Caminho em `data.js` está certo?

### Página em branco
- ✅ Abra F12 → Console e veja erros
- ✅ Verifique sintaxe do JavaScript
- ✅ Restaure backup se necessário

---

## 💡 Dicas Finais

1. **Sempre teste localmente** antes de publicar
2. **Faça backup** antes de grandes mudanças
3. **Use nomes simples** sem espaços ou acentos
4. **Organize ficheiros** desde o início
5. **Documente mudanças** para o futuro

---

## 📞 Contactos

**Email**: fados@ipca.pt

---

🎵 **Bom trabalho e ótimos fados!** 🎵

---

**Criado**: Fevereiro 2025
**Versão**: 1.0
