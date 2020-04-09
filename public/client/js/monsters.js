export default class Monsters{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  drawMinion(x, y, r, d, c){
    this.ctx.beginPath();
    this.ctx.fillStyle = c;
    this.ctx.lineWidth = r/4;
    this.ctx.strokeStyle = 'black';
    this.ctx.arc(x, y, r, 0, 2*Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
  }
}
