import Players from '/client/js/players.js';
import Monsters from '/client/js/monsters.js';
import Structures from '/client/js/structures.js';
import UI from '/client/js/ui.js';
// import * as PIXI from '/client/js/pixi.min.js';
class Render{
  render(){
    this.rendStruc();
    this.rendMons();
    this.rendPlay();
    this.rendScreen();
    this.rendUI();
  }
  clear(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  rendPlay(){
    let player = new Players(canvas);
    player.drawSniper(canvas.width/2+100, canvas.height/2+100, canvas.height/10, canvas.height/80, Math.PI/180*45, 'yellow');
    player.drawMagician(canvas.width/2-100, canvas.height/2-100, canvas.height/10, canvas.height/60, -30, 0)
  }
  rendMons(){
    let monster = new Monsters(canvas);
    monster.drawMinion(canvas.width/2, canvas.height/2, canvas.height/20, 0, 'blue');
  }
  rendStruc(){

  }
  rendScreen(){

  }
  rendUI(){
    let ui = new UI(canvas);
    ui.render();
  }
  drawImg(x, y, d, i){
    this.rotate(d);
    this.ctx.drawImage(i, x, y);
  }
  loadImg(name, url){
    let img = new Image();
    img.addEventListener('load', ()=>{
      this.loadImgs[name] = [img, true];
    }, false);
    img.src = url;
  }
  setImgs(){
    this.loadImgs = config.game.imgs;
    this.loadImgs.forEach((item, i) => {
      this.loadImgs[i] = [this.loadImgs[i], false];
      this.loadImg(i, item);
    });
  };
}

class Game extends Render{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.character = 'noob';
    this.username = 'chamwhy';
    this.skillPos = [];
    this.skillSlots = [];
    this.loadImgs = {};
  }
  init(){
    this.setImgs();
    this.player = new Players(this.canvas);
    this.moster = new Monsets(this.canvas);
    this.structure = new Structures(this.canvas);
    this.ui = new UI(this.canvas);
  }
  setChar(char){
    this.character = char;
  }
  changeSkill(skill, index){
    this.skillSlots[index] = skill;
  }
  useSkill(skillName, x, y, d, p){

  }
  skillCheck(x, y, r){
    let hit = [];
    for(let i in this.skillPos){
      let dx = x-this.skillPos[i][0],
          dy = y-this.skillPos[i][1],
          radios = r + this.skillPos[i][2];
      if(Math.abs(dx) <= radios && Math.abs(dy) <= radios){ //사각형 판단
        if(Math.pow(dx, 2)+Math.pow(dy, 2) <= radios){  //실질적 원형 판단
          hit.push(this.skillPos[3]);
        }
      }
    }
    return hit;
  }
}

const canvas = document.getElementById('canvas');
let game = new Game(canvas);
game.render();
