//Javascript for dynamic drawing apparatus

/*this code was inspired by code posted on stackoverflow
by user1083202, which can be found at
https://stackoverflow.com/questions/2368784/draw-on-html5-canvas-using-a-mouse?answertab=active#tab-top*/

var d = false;
var o = false;

var x = 0;
var y = 0;
var newx = 0;
var newy = 0;

function loaded(){
  canvas = document.getElementById("whitespace");
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = (0.9*document.documentElement.clientHeight);

  canvas.addEventListener("mousedown", function(){d = true});
  canvas.addEventListener("mouseup", function(){d = false});
  canvas.addEventListener("mouseover",function(){o = true});
  canvas.addEventListener("mouseout",function(){o = false});
  canvas.addEventListener("mousemove",moving(event));
}


function moving(e){
  if(d == true && o == true){
    x = newx;
    y = newy;
    newx = e.clientX;
    newy = e.ClientY;
  }
}

function mark(){
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(newx,newy);
  ctx.strokeStyle = black;
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();
}
