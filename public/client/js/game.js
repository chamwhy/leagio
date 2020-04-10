import Players from "/client/js/players.js";
import Monsters from "/client/js/monsters.js";
import Structures from "/client/js/structures.js";

let loadImgs = {};
const setImgs = () => {
  loadImgs = config.game.imgs;
  loadImgs.forEach((item, i) => {
    loadImgs[i] = [loadImgs[i], false];
    loadImg(i, item);
  });

};

const loadImg = (name, url) => {
  let img = new Image();
  img.addEventListener('load', ()=>{
    loadImgs[name] = [img, true];
  }, false);
  img.src = url;
}

class Game{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.character = "noob";
    this.username = "chamwhy";
    this.skills = [];
  }

  setChar(char){
    this.character = char;
  }

  changeSkill(skill, index){
    this.skills[index] = skill;
  }

  clear(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  render(){
    this.rendStruc();
    this.rendMons();
    this.rendPlay();
    this.rendScreen();
    this.rendUI();
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

  }

  drawImg(x, y, d, i){
    this.rotate(d);
    this.ctx.drawImage(i, x, y);
  }

  loadImg(name, url){
    this.img = new Image();
    img.addEventListener('load', ()=>{
      loadImgs[name] = [img, true];
    }, false);
    img.src = url;
  }

}

const canvas = document.getElementById('canvas');
let game = new Game(canvas);
game.render();
