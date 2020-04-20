const map = [
  {
    wall: [

    ],
    liquid: [

    ],
    bush: [

    ],
    background: [

    ]
  },
  {

  },
  {

  }
];

export default class Structures{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.map = [];
    this.map[0] = {

    };
    this.map[1] = [];
    this.map[2] = [];
  }

  drawBush(x, y, r, c){
    this.ctx.quadraticCurveTo()
  }
}
