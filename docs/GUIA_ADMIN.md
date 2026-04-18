# 🎵 Guia do Painel Administrativo - Fados IPCA

## 📋 Visão Geral

O painel administrativo permite que membros autorizados do grupo adicionem novas músicas e recursos à biblioteca musical sem precisar editar código diretamente.

---

## 🔐 Sistema de Autenticação

### 👥 Tipos de Acesso

O site possui **dois níveis de acesso**:

#### 1. **Membro** (acesso a vídeos)
- **Senha**: `Gallus@Coimbra2025!`
- **Permissões**:
  - ✅ Ver vídeos do grupo
  - ❌ NÃO pode adicionar/editar conteúdo

#### 2. **Administrador** (gestão completa)
- **Senha**: `FadoIPCA!2025#Admin$`
- **Permissões**:
  - ✅ Ver vídeos do grupo
  - ✅ Adicionar músicas e recursos
  - ✅ Exportar dados
  - ✅ Acesso total ao painel administrativo

### 🔒 Acesso ao Painel Administrativo

#### 1. Abrir o Painel
- Clique no botão **⚙️ Admin** no menu de navegação (canto superior direito)
- Uma janela modal será aberta

#### 2. Login como Admin
- **Senha de administrador**: `FadoIPCA!2025#Admin$`
- Insira a senha e clique em **Entrar**
- ✅ O botão mudará para **✅ Admin** confirmando o acesso

#### 3. Alterar Senhas (Recomendado)
⚠️ **IMPORTANTE**: Altere as senhas no ficheiro `script.js` (linha ~587-589) para maior segurança

```javascript
const ADMIN_PASSWORD = 'suanovaSenhaAdmin123';  // Senha de administrador
const MEMBER_PASSWORD = 'suanovaSenhaMembro123'; // Senha de membro
```

> 📖 **Mais informações**: Consulte o [GUIA_AUTENTICACAO.md](GUIA_AUTENTICACAO.md) para detalhes completos sobre o sistema de autenticação

---

## ➕ Adicionar Nova Música

### Campos Obrigatórios (*)
- **Título**: Nome da música (ex: "Balada de Coimbra")
- **Categoria**: Escolha entre:
  - Tradicional
  - Fado de Coimbra
  - Fado de Lisboa
  - Outros
- **Tom**: Tom da música (ex: "Lá menor", "Dó maior")
- **Compositor**: Nome do compositor ou "Tradicional"

### Campos Opcionais
- **Letra**: Cole a letra completa da música
- **Link Partitura**: Caminho do ficheiro PDF (ex: `biblioteca/nomedamusica/partitura.pdf`)
- **Link Vídeo**: URL do vídeo de referência (YouTube embed)
- **Notas**: Informações adicionais sobre a música

### Exemplo de Preenchimento
```
Título: Fado das Horas
Categoria: Fado de Coimbra
Tom: Ré menor
Compositor: José Afonso
Letra: [cole a letra aqui]
Link Partitura: biblioteca/fadodashoras/partitura.pdf
Link Vídeo: https://www.youtube.com/embed/XYZ123
Notas: Versão tradicional, cantada em tom mais grave
```

---

## 📁 Adicionar Novo Recurso

### Tipos de Recursos
- 📝 **Letra**: Ficheiros PDF/DOCX com letras
- 🎸 **Guitarra Clássica**: Partituras de guitarra clássica, acordes
- 🪕 **Guitarra Portuguesa**: Partituras de guitarra portuguesa
- 🎵 **Áudio**: Gravações MP3, WAV, M4A
- 🎬 **Vídeo**: Vídeos MP4

### Campos Obrigatórios (*)
- **Tipo de Recurso**: Selecione o tipo correto
- **Título**: Nome descritivo (ex: "Amor de Estudante - Letra")
- **Ficheiro (caminho)**: Caminho completo do ficheiro

### Campos Opcionais
- **Tamanho**: Tamanho do ficheiro (ex: "2.5 MB")
- **Duração**: Apenas para áudio/vídeo (ex: "3:45")

### Exemplo de Preenchimento
```
Tipo: 🎵 Áudio
Título: Balada de Coimbra - IPVC 2024
Ficheiro: biblioteca/baladadecoimbra/Gravações/IPVC_2024.mp3
Tamanho: 4.2 MB
Duração: 4:30
```

---

## 💾 Exportar e Atualizar Dados

### Processo de Exportação

1. **Adicione todas as músicas/recursos** que desejar
2. Vá ao separador **💾 Exportar Dados**
3. Escolha uma opção:
   - **📋 Copiar Músicas**: Apenas novas músicas
   - **📋 Copiar Recursos**: Apenas novos recursos
   - **📋 Copiar Tudo**: Músicas + Recursos

### Atualizar o Ficheiro data.js

#### Método 1: Substituição Completa (Recomendado)
1. Clique em **📋 Copiar Tudo**
2. Abra o ficheiro `data.js` no editor de texto
3. **Selecione todo o conteúdo** (Ctrl+A)
4. **Cole** o código copiado (Ctrl+V)
5. **Guarde** o ficheiro (Ctrl+S)

#### Método 2: Substituição Parcial
1. Clique em **📋 Copiar Músicas** ou **📋 Copiar Recursos**
2. Abra o ficheiro `data.js`
3. Encontre a secção correspondente:
   - Para músicas: `const repertoireData = [...]`
   - Para recursos: `const libraryResources = {...}`
4. Substitua apenas essa secção
5. Guarde o ficheiro

### ⚠️ Importante
- Faça **backup** do ficheiro `data.js` antes de fazer alterações
- Verifique se não há erros de sintaxe após colar o código
- Recarregue a página (F5) para ver as alterações

---

## 📂 Organização de Ficheiros

### Estrutura de Pastas
```
biblioteca/
├── nomedamusica/
│   ├── partitura.pdf
│   ├── letra.pdf
│   ├── acordes.pdf
│   ├── GP-nomedamusica.pdf
│   └── Gravações/
│       ├── audio1.mp3
│       ├── audio2.wav
│       └── video1.mp4
```

### Convenções de Nomenclatura
- **Pastas**: Nome da música em minúsculas, sem espaços (ex: `amordeestudante`)
- **Partituras**: `partitura.pdf` ou `nomedamusica.pdf`
- **Letras**: `letra.pdf` ou `Letra - Nome.pdf`
- **Guitarras**: `Acordes-Nome.pdf`, `GP-Nome.pdf`
- **Gravações**: Dentro da pasta `Gravações/`

### Exemplos de Caminhos
```
biblioteca/baladadecoimbra/partitura.pdf
biblioteca/amordeestudante/letra.pdf
biblioteca/fadohilario/GP-Fado Hilário.pdf
biblioteca/teunome/Gravações/IPVC_2024.mp3
```

---

## 🎯 Boas Práticas

### ✅ Fazer
- ✅ Preencher todos os campos obrigatórios
- ✅ Usar nomes descritivos para títulos
- ✅ Verificar caminhos de ficheiros antes de submeter
- ✅ Fazer backup do `data.js` antes de atualizar
- ✅ Testar as alterações após exportar

### ❌ Evitar
- ❌ Deixar campos obrigatórios vazios
- ❌ Usar caracteres especiais nos caminhos (use apenas letras, números, `-`, `_`)
- ❌ Esquecer de exportar após adicionar conteúdo
- ❌ Substituir o `data.js` sem fazer backup

---

## 🔧 Resolução de Problemas

### Problema: "Senha incorreta"
**Solução**: Verifique a senha em `script.js` (linha ~422)

### Problema: "Música não aparece após exportar"
**Solução**: 
1. Verifique se guardou o ficheiro `data.js`
2. Recarregue a página (F5 ou Ctrl+R)
3. Limpe a cache do navegador (Ctrl+Shift+Delete)

### Problema: "Erro de sintaxe no data.js"
**Solução**:
1. Restaure o backup do `data.js`
2. Verifique se copiou o código completo
3. Certifique-se de que não há vírgulas ou aspas a faltar

### Problema: "Ficheiro não encontrado (404)"
**Solução**:
- Verifique se o caminho do ficheiro está correto
- Certifique-se de que o ficheiro existe na pasta `biblioteca/`
- Use caminhos relativos começando com `biblioteca/`

---

## 📞 Contactos

Se tiver problemas ou dúvidas:
- **Coordenador**: Contacte o coordenador do grupo
- **Suporte Técnico**: Rafaella Oliveira

---

## 🔐 Segurança

### Alterar a Senha
1. Abra `script.js` num editor de texto
2. Encontre a linha (aproximadamente linha 422):
   ```javascript
   const ADMIN_PASSWORD = 'fadosipca2025';
   ```
3. Altere para a sua nova senha:
   ```javascript
   const ADMIN_PASSWORD = 'minhasenhaSEGURA123';
   ```
4. Guarde o ficheiro
5. **Partilhe a nova senha apenas com membros autorizados**

### Recomendações
- Use senhas fortes (letras, números, símbolos)
- Não partilhe a senha publicamente
- Altere a senha periodicamente
- Mantenha backup dos ficheiros importantes

---

## 📊 Fluxo de Trabalho Recomendado

```mermaid
1. Abrir Painel Admin (botão ⚙️)
   ↓
2. Fazer Login (senha)
   ↓
3. Adicionar Músicas/Recursos
   ↓
4. Exportar Dados (copiar código)
   ↓
5. Atualizar data.js (colar código)
   ↓
6. Guardar ficheiro
   ↓
7. Recarregar página (F5)
   ↓
8. Verificar alterações ✅
```

---

**Versão**: 1.0  
**Última atualização**: Fevereiro 2025  
**Desenvolvido por**: Rafaella Oliveira para Grupo de Fados IPCA
