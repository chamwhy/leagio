//import io from '/socket.io-client/dist/socket.io.js';

const socket = io();
let peer = new Peer();
let body = document.querySelector('body');
let myId;
let conn;
peer.on('open', (id)=>{
  myId = id;
  console.log(id);
});
body.addEventListener('click', ()=>{
  socket.emit('peer', myId);
});

peer.on('connection', (connn)=>{
  connn.on('data', (data)=>{
    console.log((new Date().getTime())-data);
  });
});
socket.on('connect', ()=>{
  let time = new Date().getTime();
  console.log(time);
  socket.emit('test', time);
  socket.emit('ping', time);
  console.log("ping");


});
socket.on('h', (start)=>{
  let ping = new Date().getTime() - start;
  console.log("pong!, "+ping+"ms");
});
socket.on('peer', (id)=>{
  console.log(id);
  if(myId != id){
    conn = peer.connect(id);
    conn.on('open', ()=>{
      conn.send(new Date().getTime());
    });
  }

});
