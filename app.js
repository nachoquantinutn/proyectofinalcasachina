const path = require ('path');
const express = require('express');
const hbs = require ('hbs');
const bodyParser = require ('body-parser');
const session = require ('express-session');
const app = express();
const conn = require("./database/db");

require('dotenv').config();
const PORT = process.env.PORT;

app.set('views', path.join (__dirname,'views'));
app.set('view engine', 'hbs');

 app.use(express.json());
 app.use(express.urlencoded({extended:false}));

app.use('/assets', express.static (__dirname + '/public'));

//handlebars
app.set ('view engine','hbs');
hbs.registerPartials( __dirname + '/views/partials');

//routes productos
app.get('/',(req,res)=>{
let sql = "SELECT * FROM articulos WHERE id_productos";
let query = conn.query (sql,(err,results)=>{
  if (err) throw err;
  res.render ('index',{
    results:results
    })
  }
)});

//rutas 
app.get('/index', (req,res)=>{
  res.render('index');
});

// Suscripcion 
app.post('/suscribe', (req, res) => {
  let data = { id_email: req.body.id_email }
  let sql = "INSERT INTO correos SET?";
  let query = conn.query(sql, data, (err, results) => {
      if (err) throw err;
      res.redirect('/index');
  });
});

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//contenido estatico 
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index.hbs')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})