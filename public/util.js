'use strict';

let canv_x = 1600,
    canv_y = 900;

const getContext = (canvas)=>{
  return canvas.getContext('2d');
};

const clear = (ctx)=>{
  ctx.clearRect(0, 0, canv_x, canv_y);
};
