const peerID = '';
const socket = io.connect("");
const peer = new Peer({key: ''});
const conn;
const io
let myId;
peer.on('open', (id)=>{
  myId = id;
});




conn.on('open', ()=>{

});

const conn = peer.

/* host codes*/
socket.on('join', (data)=>{

});

/*
let players = {
  count: 1,
  data: [
    {
      name: 'chamwhy',
      lv: 4,
      peer: null,
      character: 'wizard',
      team: 'red'
    }
  ]
}
*/

let teamMap = [
  ['chamwhy', ''],  //red team
  []  //blue team
];

class User{
  constructor(data){
    /* user info */
    this.name = data.name;
    this.lv = data.lv;
    this.character = data.character;
    this.team = (teamMap[0].length > teamMap[1].length) ? 'red' : 'blue';
    this.userID = data.userID;

    /* peer module */
    this.peer = null;
    this.conn = null;

    this.init();

  }

  init(){
    this.peer = new Peer({key: peerID});

    this.peer.on('open', (id)=>{

    });

    this.peer.on('disconnected', ()=>{

    });

    this.peer.on('close', ()=>{

    });

    this.peer.on('error', (err)=>{

    });
  }

  join(){
    if(this.conn){
      this.conn.close();
    }
    this.conn = this.peer.connect(this.userID);
    this.conn.on('open', ()=>{

    });
    this.conn.on('data', (data)=>{
      switch (data.type) {
        case '':

          break;
        case '':

          break;
        case '':

          break;
        case '':

          break;
        default:

      }
    });
    this.conn.on('close', ()=>{

    });
  }

  sendMsg(data){
    this.conn.send(data);
  }

  changeTeam(team){
    this.team = team;
    this.sendMsg({
      type: 'changeTeam',
      team: teamMap
    });
  }
}



/* client codes */
