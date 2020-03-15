$(function() {
/*
var mainNav = $('.main-nav');

setTimeout(function() {
    $(window).scroll(function() {

        var winTop = $(window).scrollTop();
       
        processTop(winTop);

    });
},200);

function processTop(top) {

    if(top > 300) {
        // add a class
        mainNav.css('position','fixed');
        mainNav.css('borderBottom','1px solid');
        mainNav.css('background','#fff');
        mainNav.css('top',0);
    } else {
        // remove a class
        mainNav.css('position','static');
        mainNav.css('background','#fff');
        mainNav.css('top',0);
    }


} // processTop
*/ 

// read more link
$('.read_more').click(function(e) {
  var read_more_text = $('.read_more').text();
  //$('.hidden').slideToggle();
  $(this).parent().find('.hidden').slideToggle();

  if($(this).hasClass('arrow-down')) {
    $(this).text('Leer Menos');
    $(this).removeClass('arrow-down');
    $(this).addClass('arrow-up');
  } else {
    $(this).text('Leer Más');
    $(this).removeClass('arrow-up')
    $(this).addClass('arrow-down');
  }
  
  e.preventDefault();

});


$('.navigation a').click(function() {
    
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 120
        }, 1000);
        return false;
      }
    }

});




// smooth scroll
/* 
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 140
        }, 1000);
        return false;
      }
    }
  });
*/
}); // jquery init