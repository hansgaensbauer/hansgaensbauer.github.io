/*this script defines behavior for objects that appear on multiple pages, like
the gliding menu*/

var cblock;
var rrect;
var offset = (0.185 * document.documentElement.clientWidth);
var cstyle;
var ttop;

function linkt(abc){
  console.log(abc);
  var rdiv = document.getElementById(abc);
  //console.log("rdiv: " + rdiv);
  var ddiv = rdiv.getBoundingClientRect();
  //console.log(ddiv);
  var height = ddiv.top;
  //console.log(height);
  var headerheight = (0.05 * document.documentElement.clientWidth);
  //console.log("headerheight: " + headerheight);
  var scrollheight = (height - headerheight);
  console.log("scrollheight: " + scrollheight);
  window.scrollBy(0, scrollheight);
}

document.addEventListener('DOMContentLoaded', function(){
  initialize();
});

function initialize(){
  cblock = document.getElementById("contentsdiv");
  //console.log("offset: " + offset);
  cstyle = cblock.style;

  document.addEventListener('scroll',function(){
    ttop = window.scrollY;
    compare();
  });

  function compare(){
    //console.log("distance to top: " + ttop);
    if(ttop >= offset){
      cstyle.position = "fixed";
      cstyle.top = "5vw";
      //console.log("if");
    }
    else{
      cstyle.position = "absolute";
      cstyle.top = "23vw";
      //console.log("else");
    }
  }
}
