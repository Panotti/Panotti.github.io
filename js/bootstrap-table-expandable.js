(function ($) {
    $(function () {
        $('.table-expandable').each(function () {
            var table = $(this);
            table.children('thead').children('tr').append('<th></th>');
            table.children('tbody').children('tr').filter(':odd').hide();
            table.children('tbody').children('tr').filter(':even').click(function () {
                var element = $(this);
                element.next('tr').toggle('slow');
                element.find(".table-expandable-arrow").toggleClass("up");
            });
            table.children('tbody').children('tr').filter(':even').each(function () {
                var element = $(this);
                element.append('<td><div class="table-expandable-arrow"></div></td>');
            });
        });
    });
})(jQuery); 

var falling = true;

TweenLite.set("#container",{perspective: 800})
TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})

var total = 7;
var container = document.getElementById("container"),   w = window.innerWidth , h = window.innerHeight;
 
 for (i=0; i<total; i++){ 
   var Div = document.createElement('div');
   TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
   container.appendChild(Div);
   animm(Div);
 }
 
 function animm(elm){   
   TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

function R(min,max) {return min+Math.random()*(max-min)};