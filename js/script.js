jQuery(document).ready(function(){
"use strict";

$(".timeline span a").on("click", function(){
    $(".timeline span a").removeClass("active");
    $(this).addClass("active");
});


/* =============== Ajax Contact Form ===================== */
$('#contactform').submit(function(){
    var action = $(this).attr('action');
    $("#message").slideUp(750,function() {
    $('#message').hide();
        $('#submit')
        .after('<img src="images/ajax-loader.gif" class="loader" />')
        .attr('disabled','disabled');
    $.post(action, {
        name: $('#name').val(),
        email: $('#email').val(),
        comments: $('#comments').val(),
        verify: $('#verify').val()
    },
        function(data){
            document.getElementById('message').innerHTML = data;
            $('#message').slideDown('slow');
            $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
            $('#submit').removeAttr('disabled');
            if(data.match('success') != null) $('#contactform').slideUp('slow');

        }
    );
    });
    return false;
});


/*=================== STICKY HEADER ===================*/ 
var menu = $("header").innerHeight();
if($("header").hasClass("transparent-header")){
    $(".theme-layout").css({
        "padding-top":0
    });
}else if($("header").hasClass("stick")){
    $(".theme-layout").css({
        "padding-top":menu
    });        
}else{
    $(".theme-layout").css({
        "padding-top":0
    });        
}

$(window).scroll(function() { 
    var scroll = $(window).scrollTop();
    if (scroll >= 70) {
        $(".stick").addClass("sticky");
    }
    else{
        $(".stick").removeClass("sticky");
    }
}); 



/*=================== Responsive Menu ===================*/  
$(".responsive-menu > span.open-menu").on("click",function(){
    $(this).parent().find(".menu-links").toggleClass("slide");
    $("body").toggleClass("move");
    $(".responsive-menu .menu-links > ul li.menu-item-has-children ul").slideUp();    
});
$(".responsive-menu .menu-links > ul li.menu-item-has-children > a").on("click",function(){
    $(this).next("ul").slideToggle();
    return false;
});
$("html").on("click",function(){
    $(".responsive-header .menu-links").removeClass("slide");
    $("body").removeClass("move");
});
$(".responsive-menu > span.open-menu,.responsive-menu .menu-links > ul li.menu-item-has-children a").on("click",function(e){
    e.stopPropagation();
});



/*================== Map =====================*/
function initialize() {
var myLatlng = new google.maps.LatLng(51.5015588, -0.1276913);
var mapOptions = {
zoom: 14,
disableDefaultUI: true,
scrollwheel:false,
center: myLatlng
}
var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

var image = 'images/icon.png';
var myLatLng = new google.maps.LatLng(51.5015588, -0.1276913);
var beachMarker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  icon: image
});

}
google.maps.event.addDomListener(window, 'load', initialize);




/*================== SCROLLBAR =====================*/
$('.menu-links').enscroll({
showOnHover: true,
verticalTrackClass: 'track3',
verticalHandleClass: 'handle3'
}); 




var timeline = $(".timeline").height();
var timeline_half = timeline/2;
$(".timeline").css({
	"margin-top":-timeline_half
});



/*=================== Dropdown Anmiation ===================*/ 
var drop = $('nav > ul > li > ul > li') 
$('nav > ul > li').each(function(){
    var delay = 0;
    $(this).find(drop).each(function(){
    $(this).css({transitionDelay: delay+'ms'});
    delay += 50;
    });
});  
var drop2 = $('nav  > ul > li > ul > li >  ul > li')
$('nav > ul > li > ul > li').each(function(){      
    var delay2 = 0;
    $(this).find(drop2).each(function(){
    $(this).css({transitionDelay: delay2+'ms'});
    delay2 += 50;
    });
});  


$(".selectors a").on("click", function(){
    $(".selectors a").removeClass("active");
    $(this).addClass("active");
});

});


$(window).load(function(){
/* =============== Pretty Photo ===================== */
  jQuery("body a[data-rel^='prettyPhoto']").prettyPhoto({
      theme: "facebook",
  });



});






