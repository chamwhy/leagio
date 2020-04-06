class Viewer{
  init = (canvas)=>{
    this.canvas = canvas;
    this.ctx = getContext(canvas);
  };

  playing = ()=>{
    this.kill = 0;
  };

  renderUI = ()=>{

  };

  renderText = (t, x, y, c, f, a)=>{
    this.ctx.beginPath();
    this.ctx.font = f;
    this.ctx.fillStyle = c;
    this.ctx.textAlign = a;
    this.ctx.fillText(t, x, y);
    this.ctx.closePath();
  };

}
