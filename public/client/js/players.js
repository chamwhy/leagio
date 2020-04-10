export default class Players{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }
  rotate(x, y, d){
    this.ctx.translate(x, y);
    this.ctx.rotate(Math.PI/180*d);
    this.ctx.translate(-x, -y);
  }
  drawSniper(x, y, r, l, d, c){
    this.ctx.beginPath();
    this.ctx.fillStyle = c;
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = l;
    this.rotate(x, y, d);
    this.ctx.rect(x-20,y-r-200, 40, 200);
    this.ctx.moveTo(x+r, y);
    this.ctx.arc(x, y, r, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
  }

  drawCat(x, y, r, d, c){

  }

  drawMagician(x, y, r, l, d, c){
    this.ctx.beginPath();
    let magicianColor = config.game.skins.color.magician[c];
    this.rotate(x, y, d);
    this.drawCircle(x, y, r, l, magicianColor.body);  //draw body
    let magicianHandY = y*1.73/2.2, magicianHandX = x-r*3/4;
    this.drawCircle(magicianHandX, magicianHandY, r/4, l, magicianColor.hand); //draw left hand
    this.drawCircle(magicianHandX+r*3/2, magicianHandY, r/4, l, magicianColor.hand); //draw right hand
    this.drawImg()
  }

  drawImg(x, y, w, d, c){
    let img = new Image();
    this.rotate(x, y, d);
    let color =
    this.ctx.drawImg(x, y, img);
  }

  drawCircle(x, y, r, l, c){
    this.ctx.beginPath();
    this.ctx.fillStyle = c;
    this.ctx.lineWidth = l;
    this.ctx.strokeStyle = 'black';
    this.ctx.moveTo(x+r , y);
    this.ctx.arc(x, y, r, 0, 2*Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
  }
}
