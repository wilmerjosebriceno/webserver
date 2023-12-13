require("dotenv").config(); // CARGA APLICATIVO DOTENV VARIABLES DE ENTONO

const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT; // Llamamos la variable de entorno definido en .ENV

const objOptions = {
  titulo : ' HOUSE BY CELINA ',
  nombre : ' Janeth Celina Briceno '
} 

// hbs handlebars.js
app.set('view_engine','hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Se hace el contenido en la carpeta publico utilizando contenido middleware
app.use(express.static('public'));

// CallBack que se usara como controlador redndirando la pagina html o hbs
app.get('/', function (req, res) {
   
  res.render('home.hbs', objOptions );

})

// CallBack que se usara como controlador redndirando la pagina html o hbs GENERIC
app.get('/generic', function (req, res) {
  
  res.render('generic.hbs', objOptions );

})

// CallBack que se usara como controlador redndirando la pagina html o hbs GENERIC
app.get('/elements', function (req, res) {
  
  res.render('elements.hbs', objOptions );

})


app.get('/generic', function (req, res) {
  res.sendFile(__dirname+'/public/generic.html');
})

app.get('/elements', function (req, res) {
  res.sendFile(__dirname+'/public/elements.html');
})

app.get('*', function (req, res) {
    res.sendFile(__dirname+'/public/404.html');
})

app.listen( port ,  () =>{
    console.log(`El WebServer esta corriendo en el puerto : ${port} `);
})

