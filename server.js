const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res)=>{
  res.render('index', {});
});
http.listen(PORT, ()=>{
  console.log(`leag.io is open at ${PORT}`);
});
