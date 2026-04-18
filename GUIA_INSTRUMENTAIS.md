# 🎼 Guia da Seção Instrumentais - Fados IPCA

## 📋 Visão Geral

A seção **Instrumentais** é um visualizador de tablaturas de guitarra portuguesa que permite navegar entre múltiplas páginas de partituras como se estivesse a ver ficheiros no Google Drive.

---

## 🎯 Funcionalidades

### 1. **Galeria de Instrumentais**
- Grid com cards de todas as peças instrumentais disponíveis
- Cada card mostra:
  - 🖼️ Preview da primeira página da tablatura
  - 📝 Título da peça
  - 👤 Compositor
  - 📄 Número de páginas disponíveis

### 2. **Visualizador de Tablaturas**
Ao clicar num instrumental, abre-se um modal com:

#### Navegação
- ⬅️ **Botão Anterior**: Volta para a página anterior
- ➡️ **Botão Próxima**: Avança para a próxima página
- 📊 **Contador**: Mostra "Página X / Total"
- ⌨️ **Setas do teclado**: Use ← e → para navegar

#### Zoom
- 🔍 **Ampliar**: Aumenta o tamanho da imagem (+25%)
- 🔍 **Reduzir**: Diminui o tamanho da imagem (-25%)
- ↻ **Reset**: Volta ao tamanho original
- ⌨️ **Atalhos de teclado**: 
  - `+` ou `=` para ampliar
  - `-` para reduzir
  - `0` para reset

#### Download
- ⬇️ **Download**: Baixa a página atual da tablatura

#### Atalhos de Teclado
- `ESC`: Fechar o visualizador
- `←` / `→`: Navegar entre páginas
- `+` / `-`: Zoom in/out
- `0`: Reset zoom

---

## 📂 Estrutura de Dados

### Ficheiro: `data.js`

```javascript
const instrumentaisData = [
    {
        id: 1,
        title: "Balada de Coimbra",
        composer: "Tradicional",
        folder: "biblioteca/Instrumentais/Balada de Coimbra",
        images: [
            "DSCF1633.JPG",
            "DSCF1634.JPG",
            "DSCF1635.JPG",
            // ... mais imagens
        ]
    },
    // ... mais instrumentais
];
```

### Campos
- **id**: Identificador único
- **title**: Nome da peça instrumental
- **composer**: Nome do compositor
- **folder**: Caminho da pasta com as imagens
- **images**: Array com nomes dos ficheiros de imagem (na ordem correta)

---

## ➕ Adicionar Novos Instrumentais

### Método 1: Manual (Editar data.js)

1. Abra o ficheiro `data.js`
2. Localize o array `instrumentaisData`
3. Adicione um novo objeto no final:

```javascript
{
    id: 23, // próximo ID disponível
    title: "Nome da Peça",
    composer: "Nome do Compositor",
    folder: "biblioteca/Instrumentais/nomedapasta",
    images: [
        "pagina1.jpg",
        "pagina2.jpg",
        "pagina3.jpg"
    ]
}
```

4. Guarde o ficheiro

### Método 2: Via Painel Admin (Futuro)

*Funcionalidade a ser implementada*

---

## 📁 Organização de Ficheiros

### Estrutura de Pastas
```
biblioteca/
└── Instrumentais/
    ├── Balada de Coimbra/
    │   ├── DSCF1633.JPG
    │   ├── DSCF1634.JPG
    │   └── DSCF1635.JPG
    ├── Variações em Lá menor AP/
    │   ├── Variações em Lá menor AP 1(5).jpg
    │   ├── Variações em Lá menor AP 2(5).jpg
    │   └── ...
    └── Canto de Amor/
        ├── Canto de Amor 1(2).jpg
        └── Canto de Amor 2(2).jpg
```

### Convenções de Nomenclatura

#### Pastas
- Nome da peça instrumental
- Pode conter espaços e caracteres especiais
- Exemplo: `Variações em Lá menor AP`

#### Ficheiros de Imagem
- Formatos aceites: **JPG**, **JPEG**, **PNG**
- Numere as páginas sequencialmente
- Exemplos:
  - `pagina1.jpg`, `pagina2.jpg`, `pagina3.jpg`
  - `NomePeca 1(5).jpg`, `NomePeca 2(5).jpg`
  - `DSCF1633.JPG`, `DSCF1634.JPG`

---

## 🎯 Boas Práticas

### ✅ Fazer
- ✅ Organizar imagens por ordem sequencial
- ✅ Usar nomes descritivos para as pastas
- ✅ Manter qualidade boa nas imagens (legíveis)
- ✅ Usar formato JPG ou PNG
- ✅ Numerar páginas claramente
- ✅ Incluir todas as páginas da tablatura

### ❌ Evitar
- ❌ Misturar ordem das páginas no array
- ❌ Usar imagens de baixa qualidade
- ❌ Esquecer de adicionar todas as páginas
- ❌ Usar caracteres especiais nos nomes de ficheiros
- ❌ Deixar o array `images` vazio (o card fica desabilitado)

---

## 🎨 Detalhes Técnicos

### CSS Classes
- `.instrumentais-grid`: Grid de cards
- `.instrumental-card`: Card individual
- `.tablatura-modal-content`: Modal do visualizador
- `.tablatura-viewer`: Container do viewer
- `.tablatura-image-container`: Container da imagem

### JavaScript Functions
- `initializeInstrumentais()`: Inicializa a grid
- `createInstrumentalCard()`: Cria um card
- `initializeTablaturaViewer()`: Inicializa o viewer
- `openTablaturaViewer()`: Abre o modal com uma tablatura

---

## 🔧 Resolução de Problemas

### Problema: "Card aparece sem imagem (ícone 🎼)"
**Solução**: 
- Verifique se o array `images` está vazio
- Adicione pelo menos uma imagem à pasta

### Problema: "Imagem não carrega (erro 404)"
**Solução**:
- Verifique o caminho da pasta (`folder`)
- Verifique se o nome do ficheiro está correto (case-sensitive)
- Certifique-se de que a imagem existe na pasta

### Problema: "Páginas fora de ordem"
**Solução**:
- Reorganize o array `images` na ordem correta
- A primeira imagem do array será a primeira página

### Problema: "Zoom não funciona"
**Solução**:
- Use os botões de zoom ou atalhos de teclado
- Verifique se o JavaScript está carregado sem erros

### Problema: "Navegação com setas não funciona"
**Solução**:
- Certifique-se de que o modal está aberto
- Use as setas do teclado (← →)
- Ou clique nos botões de navegação

---

## 📊 Estatísticas Atuais

### Instrumentais Catalogados: **22**

| Compositor | Quantidade |
|------------|-----------|
| Tradicional | 13 |
| Artur Paredes | 2 |
| Carlos Paredes | 2 |
| João Bagão | 1 |
| Flávio Rodrigues | 1 |
| Armando Goes | 1 |
| Paulo Soares | 1 |

### Total de Páginas: **~70 páginas**

---

## 🚀 Melhorias Futuras

### Funcionalidades Planeadas
- [ ] Pesquisa de instrumentais por nome ou compositor
- [ ] Filtro por compositor
- [ ] Modo de apresentação (fullscreen)
- [ ] Impressão direta das tablaturas
- [ ] Marcação de favoritos
- [ ] Anotações nas tablaturas
- [ ] Partilha de link para página específica
- [ ] Modo escuro para leitura noturna
- [ ] Rotação de imagem (90°, 180°, 270°)

---

## 💡 Dicas de Uso

### Para Estudantes
- Use as setas do teclado para navegar rapidamente
- Amplie (zoom) as partes mais difíceis
- Faça download para estudar offline
- Pratique com as gravações disponíveis na Biblioteca

### Para Administradores
- Mantenha as imagens em alta qualidade
- Organize ficheiros com nomes claros
- Verifique a ordem correta das páginas
- Adicione informação do compositor sempre que possível

---

## 📞 Suporte

Para problemas técnicos ou sugestões:
- **Desenvolvedor**: Rafaella Oliveira
- **Grupo**: Fados IPCA - Gallus Gallus

---

**Versão**: 1.0  
**Última atualização**: Fevereiro 2025  
**Desenvolvido por**: Rafaella Oliveira para Grupo de Fados IPCA
