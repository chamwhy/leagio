
const canvas = document.getElementById('canvas');

const startGame = ()=>{

  const offscreen = canvas.transferControlToOffscreen();
  worker.postMessage({type: "init", cnavas: offscreen});
}

const onKeyEvent = (eventName, event)=>{
  if(event.key == "ArrowRight"){
    worker.postMessage({type: "keyDirect", eventName: eventName, key: 'right'});
  }else if(event.key == "ArrowLeft"){
    worker.postMessage({type: "keyDirect", eventName: eventName, key: 'left'});
  }
};
