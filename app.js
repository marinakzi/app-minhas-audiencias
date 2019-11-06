// Carregando módulos
	const express = requerid('express');
	const handlebars = requerid('express-handlebars');
	const bodyParser = requerid('body-parser');
	const app = express();
	//const mongoose = requerid('mongoose');

// Configuracoes
	// body parser
		app.use(bodyParser.urlencoded({extended: true}));
		app.use(bodyParser.json());
	// handlebars
		app.engine("handlebars", handlebars({defaultLayout: "main"}));	
		app.set("view engine", "handlebars");
	// mongoose	
// Rotas

// Outros
const PORT = 3333;
app.listen(PORT, ()=>{
 console.log("Servidor iniciado");
});