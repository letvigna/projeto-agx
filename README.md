# agx-app

### *Instruções para execução*
### 1. Rodar o back end:
A partir do diretório root do projeto, execute o seguintes comandos.
```
cd server
npm install
node app.js
```

### 2. Rodar front end:
Assim como o back end, execute os comandos a seguir a partir do diretório root do projeto.
```
cd app
npm install
npm run serve
```
Verifique-se de que o back end continua rodando em fundo para que o projeto funcione.

---
### *Como usar*
Após executar tanto o back end como o front end, as operações CRUD estão disponíveis para utilizar com o calendário.

* **Criar um evento:**
Para criar um evento, basta clicar no dia desejado e inserir o título através do input. O calendário será atualizado automaticamente com o evento novo.

* **Atualizar um evento:**
Para atualizar um evento, verifique-se de que o calendário está em *"modo edição"* no canto superior esquerdo. Se estiver em *"modo remoção"*, clique no botão **"Editar eventos"** para ativar este modo. Com ele ativado, basta clicar no evento desejado e inserir o título novo. O calendário será atualizado automaticamente com o título atualizado.

* **Apagar um evento:**
Para apagar um evento, verifique-se de que o calendário está em *"modo remoção"* no canto superior esquerdo. Se estiver em *"modo edição"*, clique no botão **"Apagar eventos"** para ativar este modo. Com ele ativado, basta clicar no evento desejado para apagá-lo. O calendário será atualizado automaticamente, sem o evento removido.