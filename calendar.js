var today = new Date();
var ndate = today.getDate();
var weeksahead = 0;

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

function adday(tod, num){
  tod.setDate(tod.getDate() + num);
  return(tod);
}

function refresh(sunday){
  document.getElementById("sunday").innerHTML = ("<td>Sunday, " + month[sunday.getMonth()] + " " + sunday.getDate() + "</td>");
  var day = adday(sunday, 1)
  document.getElementById("monday").innerHTML = ("<td>Monday, " + month[day.getMonth()] + " " + day.getDate() + "</td>");
  var day = adday(sunday, 1)
  document.getElementById("tuesday").innerHTML = ("<td>Tuesday, " + month[day.getMonth()] + " " + day.getDate() + "</td>");
  var day = adday(sunday, 1)
  document.getElementById("wednesday").innerHTML = ("<td>Wednesday, " + month[day.getMonth()] + " " + day.getDate() + "</td>");
  var day = adday(sunday, 1)
  document.getElementById("thursday").innerHTML = ("<td>Thursday, " + month[day.getMonth()] + " " + day.getDate() + "</td>");
  var day = adday(sunday, 1)
  document.getElementById("friday").innerHTML = ("<td>Friday, " + month[day.getMonth()] + " " + day.getDate() + "</td>");
  var day = adday(sunday, 1)
  document.getElementById("saturday").innerHTML = ("<td>Saturday, " + month[day.getMonth()] + " " + day.getDate() + "</td>");
  }

  function nextweek(){
    weeksahead++;
    var adate = new Date();
    adate.setDate(adate.getDate() + (7 * weeksahead));
    refresh(adate);
  }

  function prevweek(){
    weeksahead--;
    var adate = new Date();
    adate.setDate(adate.getDate() + (7 * weeksahead));
    refresh(adate);
  }

window.onload = function(){
  refresh(today);

  document.getElementById("nextweek").addEventListener("click",nextweek);
  document.getElementById("prevweek").addEventListener("click",prevweek);
}
