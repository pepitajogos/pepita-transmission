# Instalação das dependências do projeto:
$ npm install

# Para rodar o projeto são necessários dois comandos rodando em paralelo (duas abas do terminal, pelo root do projeto), um comando para criação do servidor pelo firebase:
$ firebase serve --only hosting

# Comando para que as alterações sejam compiladas e apresentadas na tela em tempo real:
$ npm run watch

# Importação das traduções feitas pelo POE:
$ npm run import-translations

# Publicação do projeto no ambiente de teste:
$ make deploy
