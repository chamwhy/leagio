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
  drawSniper(x, y, r, d, c){
    this.ctx.beginPath();
    this.ctx.fillStyle = c;
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = r/8;
    this.rotate(x, y, d);
    this.ctx.rect(x-20,y-r-200, 40, 200);
    this.ctx.moveTo(x+r, y);
    this.ctx.arc(x, y, r, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
  }

}
