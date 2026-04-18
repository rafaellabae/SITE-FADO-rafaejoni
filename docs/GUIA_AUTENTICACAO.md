# 🔐 Sistema de Autenticação - Fados IPCA

## 📋 Visão Geral

O site agora possui **dois níveis de acesso** para proteger o conteúdo de vídeo dos membros:

### 👥 **Tipos de Utilizadores**

1. **Visitantes** (sem login)
   - ✅ Podem ver: Letras, Acordes, Guitarra Portuguesa, Áudios
   - 🔒 **NÃO** podem ver: Vídeos (protegidos por privacidade)

2. **Membros** (com senha de membro)
   - ✅ Podem ver: TUDO (letras, acordes, GP, áudios, **vídeos**)
   - ❌ NÃO podem: Adicionar/editar conteúdo

3. **Administradores** (com senha de admin)
   - ✅ Podem ver: TUDO
   - ✅ Podem: Adicionar músicas, recursos, exportar dados

---

## 🔑 Senhas Atuais

### Senha de Membro (acesso a vídeos)
```
Gallus@Coimbra2025!
```

### Senha de Administrador (gestão do site)
```
FadoIPCA!2025#Admin$
```

⚠️ **IMPORTANTE**: Partilhe estas senhas apenas com pessoas autorizadas!

---

## 👤 Como Fazer Login como Membro

### Para aceder aos vídeos:

1. **Abrir o site** normalmente
2. Clicar numa música qualquer
3. Tentar abrir a tab **🎬 Vídeos**
4. Verá uma mensagem: **"Conteúdo Restrito - 🔒"**
5. Clicar no botão **"🔑 Fazer Login"**
6. Inserir a senha de membro: `gallus2025`
7. Clicar em **"Entrar"**
8. ✅ Agora tem acesso aos vídeos!

### Indicador de Login:
- Quando fizer login, o botão no menu muda para:
  - **👤 Membro** (se usou senha de membro)
  - **✅ Admin** (se usou senha de admin)

---

## ⚙️ Como Alterar as Senhas

### 1. Abrir o ficheiro `script.js`

### 2. Encontrar as linhas (aproximadamente linha 587-589):
```javascript
const ADMIN_PASSWORD = 'fadosipca2025';
const MEMBER_PASSWORD = 'gallus2025';
```

### 3. Alterar para as suas senhas:
```javascript
const ADMIN_PASSWORD = 'minhasenhaSEGURAadmin';
const MEMBER_PASSWORD = 'minhasenhaSEGURAmembro';
```

### 4. Guardar o ficheiro

### 5. Partilhar as novas senhas apenas com pessoas autorizadas

---

## 🔒 Segurança

### ⚠️ Limitações
Este é um sistema **simples** de autenticação adequado para:
- ✅ Grupos pequenos (até ~50 membros)
- ✅ Conteúdo semi-privado
- ✅ Hospedagem em GitHub Pages (sem servidor)

**NÃO é adequado para:**
- ❌ Dados altamente sensíveis
- ❌ Informação financeira
- ❌ Dados pessoais protegidos por RGPD

### 🛡️ Recomendações
1. **Altere as senhas** regularmente (a cada 3-6 meses)
2. **Use senhas fortes** (letras maiúsculas, minúsculas, números, símbolos)
3. **Partilhe apenas por meios seguros** (WhatsApp, email pessoal)
4. **Não publique** as senhas em redes sociais ou sites públicos
5. **Revogue acesso** alterando as senhas se alguém sair do grupo

### ✅ Boas Práticas
- ✅ Ter senhas diferentes para membro e admin
- ✅ Partilhar apenas com membros ativos do grupo
- ✅ Avisar quando alterar as senhas
- ✅ Manter backup do ficheiro `script.js`

---

## 🎯 Por que proteger os vídeos?

### Razões:
1. **Privacidade dos Membros** 
   - Os vídeos mostram rostos e vozes dos membros
   - Nem todos querem sua imagem pública na internet

2. **Conteúdo Exclusivo**
   - Valoriza a participação no grupo
   - Cria sentido de comunidade

3. **Controle de Distribuição**
   - Evita que vídeos sejam partilhados sem autorização
   - Protege contra uso indevido

4. **Conformidade RGPD**
   - Respeita o direito à imagem
   - Permite controle sobre dados pessoais

---

## 📱 Experiência do Utilizador

### Para Visitantes (sem login):
```
1. Navega pelo site normalmente
2. Clica numa música
3. Vê tabs: Letra ✅ | Acordes ✅ | GP ✅ | Áudios ✅ | Vídeos 🔒
4. Ao clicar em "Vídeos", vê:
   
   🔒
   Conteúdo Restrito
   Os vídeos são exclusivos para membros do Grupo de Fados IPCA.
   Para proteger a privacidade dos nossos membros, este conteúdo requer autenticação.
   
   [🔑 Fazer Login]
```

### Para Membros (com login):
```
1. Faz login uma vez
2. Navega pelo site
3. Todas as tabs funcionam normalmente
4. Pode ver e fazer download de vídeos
5. Botão mostra "👤 Membro" como confirmação
```

---

## 🔄 Processo Técnico

### O que acontece quando alguém tenta ver vídeos:

```javascript
// 1. Verifica se está autenticado
if (!isAuthenticated) {
    // Mostra mensagem de bloqueio
    return "🔒 Conteúdo Restrito";
}

// 2. Se autenticado, mostra vídeos normalmente
return videos;
```

### O que acontece no login:

```javascript
if (password === ADMIN_PASSWORD) {
    // Admin: acesso total + painel
    isAuthenticated = true;
    userRole = 'admin';
    
} else if (password === MEMBER_PASSWORD) {
    // Membro: acesso a vídeos
    isAuthenticated = true;
    userRole = 'member';
    
} else {
    // Senha errada
    alert("Senha incorreta");
}
```

---

## 📊 Estatísticas de Acesso

### Conteúdo Público (sem login):
- 📝 Letras: ~22 com letra completa
- 🎸 Acordes: 35 partituras
- 🪕 GP: 5 tablaturas de guitarra portuguesa
- 🎵 Áudios: 37 gravações

### Conteúdo Restrito (requer login):
- 🎬 Vídeos: 11 gravações de performances

---

## 🚀 Próximos Passos (Opcionais)

### Se quiser melhorar a segurança no futuro:

1. **Firebase Authentication**
   - Login por email/password individual
   - Cada membro tem sua própria conta
   - Histórico de acessos

2. **Backend com Base de Dados**
   - Senhas encriptadas
   - Gestão de utilizadores
   - Permissões granulares

3. **Autenticação Social**
   - Login com Google/Facebook
   - Mais conveniente para utilizadores
   - Menos senhas para lembrar

Mas para o grupo atual, o sistema simples é **suficiente e funcional**! 🎉

---

## 📞 Suporte

Se tiver dúvidas:
- **Coordenador do Grupo**: Para obter senhas
- **Suporte Técnico**: Rafaella Oliveira

---

**Versão**: 2.0 - Sistema de Autenticação  
**Data**: 11 de Fevereiro de 2026  
**Desenvolvido por**: Rafaella Oliveira
