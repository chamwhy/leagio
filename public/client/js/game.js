import Players from "/client/js/players.js";
import Monsters from "/client/js/monsters.js";
import Structures from "/client/js/structures.js";

const canvas = document.getElementById('canvas');

class Game{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }


}




let monster = new Monsters(canvas);
monster.drawMinion(canvas.width/2, canvas.height/2, canvas.height/20, 0, 'blue');

let player = new Players(canvas);
player.drawSniper(canvas.width/2+100, canvas.height/2+100, canvas.height/10, Math.PI/180*45, 'yellow');
