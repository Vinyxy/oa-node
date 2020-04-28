var express = require('express');
var bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');

//PERSISTÊNCIA
mongoose.connect('mongodb+srv://vinicius:123@cluster0-bxtbr.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

//Configuração do server para usar body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definindo a porta via arquivo de configuração
var port = process.env.port || 3000;

//ROTAS
//var indexRoute = require("./src/routes/index-routes");
var productRoute = require("./src/routes/product-routes");
var userRoute = require("./src/routes/user-routes");

//Vincular a aplicacao (app) com o motor de rotas
//app.use('/api', indexRoute);
app.use('/api/products', productRoute);
app.use('/api/user', userRoute);

app.listen(port, () => {
    console.log('Server up and running!');

});