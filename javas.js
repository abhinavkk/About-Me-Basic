var store=document.querySelector('h1');
store.innerHTML = 'Hello World!';
function validate(obj, lowval, hival){
  if ((obj.value < lowval) || (obj.value > hival))
    alert("Invalid Value!");
}



var time = new Date();
var cyear = time.getFullYear();
var check = new Date(cyear,1,23);
var interval = setInterval(function() { ct() }, 1000);
function ct() {

if (time>check)
{ bday=new Date(cyear+1,1,23);
  var diff= Math.abs(bday.getTime() - time.getTime());
  var days= Math.floor(diff / 86400000);
  diff %=86400000;
  var hours=Math.floor(diff / 3600000);
  diff %=3600000;
  var mins=Math.floor(diff / 60000);
  diff %=60000;
  var secs=Math.floor(diff / 1000);
  diff %=1000;
  $("#countdown").html("Days:" +days+ " Hours:" + hours + " Mins:" +mins+ " Secs:" +secs);
}
else
{ bday=new Date(cyear,1,23);
  var diff= time.getTime()-bday.getTime();
  var days= Math.floor(diff / 86400000);
  diff %=86400000;
  var hours=Math.floor(diff / 3600000);
  diff %=3600000;
  var mins=Math.floor(diff / 60000);
  diff %=60000;
  var secs=Math.floor(diff / 1000);
  diff %=1000;
  $("#countdown").html("Days:" +days+ " Hours:" + hours + " Mins:" +mins+ " Secs:" +secs);
}
}