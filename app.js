// Carregando módulos
	const express = require('express');
	const handlebars = require('express-handlebars');
	const bodyParser = require('body-parser');
	const app = express();
	const config = require("./routes/config");
	//const mongoose = require('mongoose');
	const usuarios = require("./routes/usuario");

// Configuracoes
	// body parser
		app.use(bodyParser.urlencoded({extended: true}));
		app.use(bodyParser.json());
	// handlebars
		app.engine("handlebars", handlebars({defaultLayout: "main"}));	
		app.set("view engine", "handlebars");
	// mongoose	

// Rotas
	app.use('/', config);
 	app.use("/usuario", usuarios);

 
// Outros
const PORT = 3333;
app.listen(PORT, ()=>{
 console.log("Servidor iniciado");
});