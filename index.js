const express = require("express"); //importando o server
const app = express(); //Criando instância do do express
const bodyParser = require('body-parser');
const conecction = require("./database/connection")


//view engine
app.set('view engine', 'ejs');

//Static
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({ extendeds: false }));
app.use(bodyParser.json());

//Database



//rotas

app.get("/", (req, res) => {
    res.render("login.ejs")
});


//Iniciando a aplicação

app.listen(8080, () => {
    console.log("O servidor está rondando em: http://localhost:8080")
});