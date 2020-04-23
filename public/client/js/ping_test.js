//import io from '/socket.io-client/dist/socket.io.js';

const socket = io();


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
