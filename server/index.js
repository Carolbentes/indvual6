const express = require('express');
//executa o express 
const app = express();
// conectar no banco de dados
const mysql = require ("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host:"localhost",
  user:"root",
  password:"138698",
  database:"crudproduto",
});
 app.use(cors());
 app.use(express.json());

 app.post("/register", (req, res)=>{
  const {name} = req.body;
  const {cost} = req.body;
  const {category} = req.body;

  let SQL = "INSET INTO produto (nome, cost, category) VALUES (?,?,?)";
 

 db.query(SQL,[name, cost, category], (err, result)=>{
  
 });
});

app.get("/getCards",(req, res)=>{
  let SQL = "SELECT * from produto";

  db.query(SQL, (err, result)=>{
    if(err) console.log(err);
    else req.setEncoding(result);
  })
})

//como fazer a conecção 

//req= tudo que entra no servidor
//res= tudo que vai sair do servidor 
//app.get('/', (req, res) =>{
   // res.send("hello worl");
//});

app.listen(3001, () => {
  console.log ("rodando servidor");
});
