# Guia de Hospedagem - Fados IPCA

Este guia explica as melhores opções gratuitas para hospedar o site do Grupo de Fados.

---

## 🌟 Opção 1: GitHub Pages (RECOMENDADO)

### ✅ Vantagens
- **Totalmente grátis**
- **Ilimitado**: Sem limites de largura de banda
- **Rápido**: CDN global
- **Fácil**: Integração direta com repositório
- **Domínio grátis**: `usuario.github.io/fados-ipca`
- **HTTPS**: Certificado SSL automático

### 📋 Passo a Passo

#### 1. Criar Conta no GitHub
1. Acesse https://github.com
2. Clique em "Sign up"
3. Escolha username (ex: `fadosipca`)
4. Confirme email

#### 2. Criar Repositório
1. Clique no botão "+" → "New repository"
2. Nome: `fados-ipca` (ou qualquer nome)
3. Marque "Public"
4. Clique em "Create repository"

#### 3. Upload dos Ficheiros

**Opção A - Usar Interface Web:**
1. Clique em "uploading an existing file"
2. Arraste todos os ficheiros do site
3. Escreva mensagem: "Initial commit"
4. Clique em "Commit changes"

**Opção B - Usar GitHub Desktop (Mais Fácil):**
1. Descarregue https://desktop.github.com/
2. Clone o repositório
3. Copie os ficheiros para a pasta
4. Commit e Push

#### 4. Ativar GitHub Pages
1. Vá em "Settings" no repositório
2. Menu lateral: "Pages"
3. Source: selecione "main" branch
4. Folder: `/ (root)`
5. Clique em "Save"

#### 5. Aceder ao Site
- URL: `https://fadosipca.github.io/fados-ipca`
- Aguarde 1-5 minutos para primeira publicação

### 🔄 Atualizar Conteúdo
1. Edite ficheiros localmente
2. Use GitHub Desktop para "Commit" e "Push"
3. Site atualiza automaticamente em 1-2 minutos

### 🌐 Domínio Personalizado (Opcional)
1. Compre domínio (ex: `fadosipca.pt`)
2. Em Settings → Pages → Custom domain
3. Configure DNS do domínio
4. Guia completo: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

## 🚀 Opção 2: Netlify

### ✅ Vantagens
- **Super fácil**: Drag & drop
- **Rápido**: Deploy em 30 segundos
- **Formulários grátis**: Se quiser adicionar no futuro
- **Pré-visualizações**: Ver mudanças antes de publicar
- **Domínio grátis**: `nome-escolhido.netlify.app`

### 📋 Passo a Passo

#### 1. Criar Conta
1. Acesse https://www.netlify.com
2. "Sign up" com GitHub, GitLab, ou email
3. Confirme email

#### 2. Deploy Manual

**Método Drag & Drop:**
1. Na dashboard, encontre área "Want to deploy a new site without connecting to Git?"
2. Arraste a pasta inteira do site
3. Aguarde 30-60 segundos
4. Site publicado!

**Método GitHub (Melhor para atualizações):**
1. Clique "Add new site" → "Import an existing project"
2. Escolha GitHub
3. Selecione o repositório
4. Deploy settings:
   - Build command: (deixe vazio)
   - Publish directory: `./`
5. Clique "Deploy"

#### 3. Configurar Domínio
1. Domain settings → "Add custom domain"
2. Escolha subdomínio grátis: `fadosipca.netlify.app`

### 🔄 Atualizar Conteúdo

**Se usou Drag & Drop:**
1. Vá em "Deploys"
2. Arraste nova versão da pasta

**Se usou GitHub:**
- Atualizações automáticas quando fizer push no GitHub

---

## ⚡ Opção 3: Vercel

### ✅ Vantagens
- **Performance excepcional**
- **Deploy instantâneo**
- **Analytics incluído**
- **Domínio grátis**: `nome.vercel.app`

### 📋 Passo a Passo

#### 1. Criar Conta
1. Acesse https://vercel.com
2. "Sign Up" com GitHub
3. Autorize o acesso

#### 2. Importar Projeto
1. Dashboard → "Add New..." → "Project"
2. "Import Git Repository"
3. Selecione o repositório do GitHub
4. Configure:
   - Framework Preset: "Other"
   - Build & Output: (deixe padrão)
5. Clique "Deploy"

#### 3. Domínio
- Automático: `projeto.vercel.app`
- Personalize em Project Settings → Domains

### 🔄 Atualizar
- Automático: Cada push no GitHub = novo deploy

---

## 🆚 Comparação Rápida

| Característica | GitHub Pages | Netlify | Vercel |
|---------------|--------------|---------|--------|
| **Facilidade** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Velocidade** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Deploy** | Manual/Auto | Ambos | Auto |
| **Domínio Grátis** | ✅ | ✅ | ✅ |
| **HTTPS** | ✅ | ✅ | ✅ |
| **Atualização** | 1-2 min | 30 seg | 10 seg |
| **Limite Banda** | Ilimitado | 100GB/mês | 100GB/mês |

---

## 🎯 Qual Escolher?

### Use GitHub Pages se:
- ✅ Quer simplicidade e estabilidade
- ✅ Já usa Git/GitHub
- ✅ Não precisa atualizar muito frequentemente
- ✅ Quer solução mais conhecida/documentada

### Use Netlify se:
- ✅ Quer a solução mais fácil
- ✅ Prefere drag & drop
- ✅ Pode adicionar formulários no futuro
- ✅ Gosta de preview antes de publicar

### Use Vercel se:
- ✅ Prioriza velocidade máxima
- ✅ Quer analytics integrado
- ✅ Planeia expandir o site no futuro
- ✅ Já usa GitHub

---

## 📁 Preparar Ficheiros para Upload

### Estrutura Necessária

```
fados-ipca/
├── index.html
├── styles.css
├── script.js
├── data.js
├── README.md
├── GUIA_ATUALIZACAO.md
└── biblioteca/
    ├── partituras/
    │   ├── fado-menor-porto.pdf
    │   └── (outros PDFs)
    ├── letras/
    │   └── (PDFs de letras)
    ├── audios/
    │   └── (ficheiros MP3)
    └── videos/
        └── (ficheiros MP4 - opcional)
```

### ⚠️ Importante:
1. **Não altere nomes de pastas** (biblioteca, partituras, etc.)
2. **Mantenha estrutura**: Ficheiros no lugar certo
3. **PDFs otimizados**: Use https://smallpdf.com/pt/comprimir-pdf
4. **Vídeos**: Prefira YouTube (economiza espaço)

---

## 🔒 Domínio Personalizado

### Opções de Domínio `.pt`

1. **Registo.pt** (oficial): https://www.dns.pt
   - Preço: ~€5-10/ano
   - Processo: Requerer através de agente registador

2. **Agentes Registradores**:
   - OVH: https://www.ovhcloud.com/pt/
   - PTISP: https://www.ptisp.pt/
   - Claranet: https://www.claranet.pt/

### Configuração DNS

Após comprar domínio, adicione estes registos DNS:

**Para GitHub Pages:**
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

Type: CNAME
Name: www
Value: fadosipca.github.io
```

**Para Netlify/Vercel:**
- Siga instruções na plataforma (geralmente um CNAME)

---

## 📊 Monitorizar Tráfego

### Google Analytics (Grátis)

1. Crie conta: https://analytics.google.com
2. Adicione propriedade para o site
3. Copie o código de tracking
4. Cole no `index.html` antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🆘 Resolução de Problemas

### Site não aparece após deploy

**GitHub Pages:**
- Aguarde 5 minutos
- Verifique Settings → Pages (status)
- Confirme branch correta

**Netlify:**
- Vá em Deploys → Ver log
- Procure erros

**Vercel:**
- Dashboard → Projeto → Deployments
- Clique no deploy → View build logs

### Erro 404 nas páginas

**Causa**: Estrutura de ficheiros incorreta

**Solução**:
1. Certifique-se `index.html` está na raiz
2. Verifique maiúsculas/minúsculas nos caminhos
3. Confirme que ficheiros existem

### Recursos não carregam

**Causa**: Caminhos relativos incorretos

**Solução**:
- Use caminhos relativos: `biblioteca/partituras/ficheiro.pdf`
- Não use `/` no início
- Mantenha estrutura de pastas

---

## 💡 Dicas Finais

1. **Teste localmente primeiro**: Abra `index.html` antes de publicar
2. **Comprima ficheiros**: PDFs e imagens pesadas atrasam o site
3. **Use README**: Documente tudo para futuros membros
4. **Backup regular**: Mantenha cópias dos ficheiros
5. **Comunique mudanças**: Avise o grupo quando atualizar

---

## 📞 Recursos Úteis

- **GitHub Pages Docs**: https://pages.github.com/
- **Netlify Docs**: https://docs.netlify.com/
- **Vercel Docs**: https://vercel.com/docs
- **Tutorial Git**: https://git-scm.com/book/pt-br/v2
- **HTML/CSS/JS**: https://developer.mozilla.org/pt-BR/

---

**Criado para**: Grupo de Fados do IPCA
**Data**: Fevereiro 2025
**Versão**: 1.0
