const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');

const time = 1000*60*60*2;

// var dataBase = mysql.createConnection({
//     host     : 'example.org',
//     user     : 'bob',
//     password : 'secret'
//   });
// dataBase.connect((err)=>{
//     if(err){throw err}
//     else{console.log('database connected!')}
// })

// adding middleware
app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(sessions({
    cookie:{
        maxAge: time,

    },
    secret: "", 
    resave:false, 
    saveUninitialized: true}))


//creating responses
app.get('/',(req,res)=>{
    res.cookie("hello",'hamzah');
    res.sendFile('public/index.html')
})
app.get('/yo',(req,res)=>{
    res.cookie('','');

   
    res.send(JSON.stringify(req.body))
})
app.post('/',(req,res)=>{
    console.log(sessions.Cookie)
})
app.listen(3000,()=>{
    console.log('working!!')
})


