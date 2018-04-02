/*script for animating the canvas on index.html*/

var width = window.innerWidth;
var height = window.innerHeight;
var randTime = 1000;
var intr;

function loaded(){
  var dcan = document.getElementById("myCanvas");
  dcan.width = width;
  dcan.height = (0.17*document.documentElement.clientWidth);
  var clx = dcan.getContext("2d");

  function dream(){
    var writecanvas = document.getElementById("myCanvas");
    var cdx = writecanvas.getContext("2d");
    cdx.clearRect(0,0,width,(height/2.5));
    var randTime = Math.floor(Math.random()*1000);
    window.setTimeout(function(){
      x = Math.floor(Math.random()*window.innerWidth);
      y = Math.floor(Math.random()*window.innerHeight/2.5);
      newx = Math.floor(Math.random()*window.innerWidth);
      newy = Math.floor(Math.random()*window.innerHeight/2.5);
      var randcolorO = Math.floor(Math.random()*196);
      cdx.strokeStyle = "rgb(0," + randcolorO + ",255)";
      cdx.beginPath();
      cdx.moveTo(x,y);
      cdx.lineTo(newx,newy);
      cdx.stroke();
      cdx.closePath();
    }, randTime);
    }
    intr = window.setInterval(dream,500);
}

function end(event){
  var writecanvas = document.getElementById("myCanvas");
  var box = writecanvas.getBoundingClientRect();
  console.log(box);
  var cdx = writecanvas.getContext("2d");
  for(i=0;i<1024;i++){
    x = event.clientX + box.left;
    y = event.clientY - box.top;
    newx = Math.floor(Math.random()*window.innerWidth);
    newy = Math.floor(Math.random()*window.innerHeight/2.5);
    var randcolorO = Math.floor(Math.random()*196);
    cdx.strokeStyle = "rgb(0," + randcolorO + ",255)";
    cdx.beginPath();
    cdx.moveTo(x,y);
    cdx.lineTo(newx,newy);
    cdx.stroke();
    cdx.closePath();
    clearInterval(intr);
  }
}
