$(document).ready(function(){


  $('#slider-singer').slick({
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 9,
    responsive: [
         {
        breakpoint: 1440,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 9
        }
      },

        {
        breakpoint: 1366,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 7
        }
      },

       {
        breakpoint: 1199,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5
        }
      },

      {
        breakpoint: 992,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4
        }
      },

      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      }
    ]
  });
  
  $('.gallery-1').photobox('.gradient',{ time:0 }); 

  $('.gallery-2').photobox('.gradient-1',{ time:0 });

  jQuery(".btn-light-box").YouTubePopUp();

  $("#myNavbar ul li a[href^='#']").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 1000, function(){
       window.location.hash = hash;
     });
  });

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 100) {
          $(".navbar").addClass("active");
          $("#content").css("margin-top","100px");
      }
      else {
          $(".navbar").removeClass("active");
          $("#content").css("margin-top","0px");
      }
  });
  $('#section-2.parallax-window').parallax({imageSrc: './images/bg-section-2.jpg'});
  $('#section-3.parallax-window').parallax({imageSrc: './images/bg-section-3.jpg'});
  $('#section-4.parallax-window').parallax({imageSrc: './images/bg-section-4.jpg'});
  wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated', 
        offset: 0, 
        mobile: true, 
        live: true 
  })
  wow.init();


});
