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

const config = require('./public/client/json/config.json');

app.get('/', (req, res)=>{
  if(config != undefined){
    res.render('game', {
      config: config
    });
  }
});
http.listen(PORT, ()=>{
  console.log(`leag.io is open at ${PORT}`);
});
