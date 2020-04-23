const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;



app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

const config = require('./public/client/json/config.json');

app.get('/', (req, res)=>{
  if(config != undefined){
    res.render('game', {
      config: config
    });
  }
});

io.on('connection', (socket)=>{
  console.log("ping");
  socket.on('ping', (start)=>{
    console.log(start);

  });
  socket.on('test', (num)=>{
    console.log(num);
    socket.emit('h', num);
  });
});

http.listen(PORT, ()=>{
  console.log(`leag.io is open at ${PORT}`);
});
