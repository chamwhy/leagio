let canvasDoc = document.getElementById('canvas');
let resizeWindow = ()=>{
  if(window.innerWidth * 9/16 < window.innerHeight){
    canvasDoc.width = window.innerWidth;
    canvasDoc.height = window.innerWidth * 9/16;
  }else{
    canvasDoc.height = window.innerHeight;
    canvasDoc.width = window.innerHeight * 16/9;
  }
}
resizeWindow();
window.onresize = ()=>{
  console.log('resize');
  resizeWindow();
}
