**Segurança do Repositório**

- **Revogar tokens:** Se você colou um Personal Access Token (PAT) em qualquer lugar (ou o forneceu em chat), revogue-o imediatamente em https://github.com/settings/tokens.
- **Rotacionar credenciais:** Atualize e rotacione chaves de API, segredos e credenciais expostas.
- **Remover segredos de arquivos:** Não deixe segredos em arquivos do repositório. Substitua por variáveis de ambiente ou arquivos `.env` excluídos por `.gitignore`.
- **Limpar histórico Git (se necessário):** Para remover segredos já comitados do histórico, use uma destas ferramentas (faça backup antes):
  - BFG Repo-Cleaner (fácil):

```powershell
git clone --mirror https://github.com/SEU-USUARIO/SEU-REPO.git
java -jar bfg.jar --delete-files your-credentials-file
git reflog expire --expire=now --all && git gc --prune=now --aggressive
git push --force
```

  - git filter-repo (recomendado moderno):

```powershell
pip install git-filter-repo
git clone --mirror https://github.com/SEU-USUARIO/SEU-REPO.git
cd SEU-REPO.git
git filter-repo --path path/to/file --invert-paths
git push --force
```

- **Automatizar a detecção:** Use o script `scripts/scan_for_secrets.ps1` para procurar padrões comuns no repositório. Execute localmente:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\scan_for_secrets.ps1
```

- **Pre-commit / hooks:** Considere instalar `pre-commit` com hooks que detectam segredos ou `git-secrets` para bloquear commits com padrões.
- **Boas práticas:** Nunca compartilhe tokens em chats ou e-mails. Armazene segredos em serviços de gerenciamento (GitHub Secrets, Azure Key Vault, etc.).

Se quiser, eu posso:
- executar a varredura localmente e mostrar resultados;
- gerar um conjunto de comandos para remover entradas específicas do histórico (se indicar quais arquivos contém segredos);
- adicionar um hook `pre-commit` ou workflow GitHub Actions para prevenção automática.
