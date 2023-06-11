const express = require("express"); //importando o server
const app = express(); //Criando instância do do express
const bodyParser = require('body-parser'); 
const connection = require("./database/connection");

const dispositivosController = require("./dispositivos/dispositivosController");
const manuaisController = require("./manuais/manuaisController");
const categoriasController = require("./categorias/categoriasController");

//Models de tabelas
const Manual = require("./manuais/Manual");
const Categoria = require("./categorias/Categoria");


//view engine
app.set('view engine', 'ejs');

//Static
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Connection with database sucess!")
    }).catch((error) => {
        console.log(error);
    });


//rotas do Express Router
app.use("/", dispositivosController);
app.use("/", manuaisController);
app.use("/", categoriasController);


//rotas

app.get("/", (req, res) => {
    res.render("login.ejs")
});


//Iniciando a aplicação

app.listen(8080, () => {
    console.log("O servidor está rondando em: http://localhost:8080")
});