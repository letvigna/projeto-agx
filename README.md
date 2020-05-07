# agx-app

### *Instruções para execução*
### 1. Rodar o back end:
A partir do diretório root do projeto, execute o seguintes comandos.
```
cd server
npm install
node app.js
```

### 2. Rodar o front end:
Assim como o back end, execute os comandos a seguir a partir do diretório root do projeto.
```
cd app
npm install
npm run serve
```
Verifique-se de que o back end continua rodando em fundo para que o projeto funcione.

### *Como usar*
Após executar tanto o back end como o front end, as operações CRUD estão disponíveis para utilizar com o calendário.

* **Criar um evento:**
Para criar um evento, basta clicar no dia desejado e inserir o título através do input.

* **Atualizar ou apagar um evento:**
Para atualizar um evento, certifique-se de que o calendário está com o *"modo edição"* ativado no canto superior esquerdo. Para apagar um evento, desative o *"modo edição"*. Em ambas as opções, para realizar a ação **ativada** deve-se clicar no evento desejado.
