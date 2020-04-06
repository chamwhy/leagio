class Player{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  };

  render(){
    this.drawPlayer(0, 0, 30, "yellow", 5, "black");
  };



  drawPlayer(x, y, r, c, sW, sC){
    this.ctx.beginPath();
    this.ctx.arc(x+this.canvas.width/2, y+this.canvas.height/2, r, 0, Math.PI*2, false);
    this.ctx.fillStyle = c;
    this.ctx.fill();
    if(sC != null){
      this.ctx.strokeStyle = sC;
      this.ctx.lineWidth = sW;
      this.ctx.stroke();
    }
    this.ctx.closePath();
  };
}
