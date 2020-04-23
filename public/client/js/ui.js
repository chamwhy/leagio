export default class UI{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }
  init(){

  }
  render(){
    this.drawBox(50, 50, 400, 200, 50, "rgba(0,0,0,.4)");
  }
  drawBox(x1, y1, x, y, r, c){
    this.ctx.beginPath();
    this.ctx.fillStyle = c;
    if(x >= 2*r){
      this.ctx.arc(x1+r, y1+r, r, Math.PI, Math.PI * 1.5, false);
      this.ctx.fillRect(x1+r, y1, x-2*r, r);
      this.ctx.arc(x1+x-r, y1+r, r, Math.PI * 1.5, Math.PI * 2, false);
      this.ctx.fillRect(x1, y1+r, x, y-2*r);
      this.ctx.arc(x1+r, y1+y-r, r, Math.PI * 0.5, Math.PI, false);
      this.ctx.fillRect(x1+r, y1+y-r, x-2*r, r);
      this.ctx.arc(x1+x-r, y1+y-r, r, 0, Math.PI * 0.5, false);
    }
  }

}
