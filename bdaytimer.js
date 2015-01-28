var int = setInterval(function() { func()}, 1000);
function func()
{  var time = new Date();
   var cyear = time.getFullYear();
   var check = new Date(cyear,1,23);
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
     $("#countdown").html(days+ " Days " + hours + " Hours " +mins+ " Mins " +secs+ " Seconds ");
   }
   else
   { bday=new Date(cyear,1,23);
     var diff=bday.getTime()-time.getTime();
     var days= Math.floor(diff / 86400000);
     diff %=86400000;
     var hours=Math.floor(diff / 3600000);
     diff %=3600000;
     var mins=Math.floor(diff / 60000);
     diff %=60000;
     var secs=Math.floor(diff / 1000);
     diff %=1000;
     $("#countdown").html(days+ " Days " + hours + " Hours " +mins+ " Mins " +secs+ " Seconds ");
   }
}
$(function () {
    var elem = $("#bday");	
        elemTop = elem.offset().top;
    $(window).scroll(function () {
        elem.toggleClass('fixed', $(window).scrollTop() > elemTop);
    }).scroll();
});

 
