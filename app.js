const path = require ('path');
const express = require('express');
const hbs = require ('hbs');
const bodyParser = require ('body-parser');
// const mysql = require ('mysql');
const session = require ('express-session');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;

//conexion a base de datos

//  const conn = mysql.createConnection({ 
//  host:'localhost',
// user:'root',
//  password: '',
// database: 'casachina'
//  });

// conn.connect((err)=>{
//   if (err) throw err;
//   console.log ('conexion extablecida..')
// });

app.set('views', path.join (__dirname,'views'));
app.set('view engine', 'hbs');

 app.use(express.json());
 app.use(express.urlencoded({extended:false}));

app.use('/assets', express.static (__dirname + '/public'));


//routes
app.get('/',(req,res)=>{
  let sql = "SELECT * FROM articulos WHERE id_productos";
  let query = conn.query (sql,(err,results)=>{
    if (err) throw err;
    res.render ('index',{
      results:results
      })
    }
  )});

//handlebars
app.set ('view engine','hbs');
hbs.registerPartials( __dirname + '/views/partials');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app
//contenido estatico 
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index.hbs')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})