const express = require('express');
const bodyParser=require("body-parser");
var mysql=require("mysql");
var path=require("path");
var app=express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'somedb'
});

connection.connect(function(err){
  if(err){
    cosole.log(err);
  }
  else{
    console.log(err);
  }
});

app.get("/",(req,res)=>{
  connection.query("SELECT * FROM tableone",function(err,rows,field){
    if(!!err){
      console.log(err);
    }else{
      console.log("successful query\n");
      console.log(rows[0].Name);
      res.json(rows);
    }
  })
});


const port=process.env.PORT||4011;
app.listen(port,()=>{
  console.log(`app is runnning on port ${port}`)
});
