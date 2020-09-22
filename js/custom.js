$(document).ready(function(){
  $('html').smoothScroll();
  $('.navbar-toggler,.nav-link').click(function(){
    $('.navbar-collapse,.navbar-toggler').toggleClass('open');
  });
  $('.search-btn').click(function(){
    $('.search-box').toggleClass('open');
  });
  $('.counter').counterUp({
    time:1000,
  });

  $("#scroll2bottom").on('click', function (e) {
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    e.preventDefault();
  });

  $('.my-carousel').owlCarousel({
    autoplay:false,
    autoplayTimeout:4000,
    loop:true,
    nav:true,
    navText:['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
    responsive:{
      0:{
        items:1,
      },
      576:{
        items:3,
        margin:25,
      },
      768:{
        items:4,
        margin:25,
      },
    }
  });
  $('.second-carousel').owlCarousel({
    items:1,
    autoplay:true,
    autoplayTimeout:3500,
    loop:true,
    nav:true,
    navText:['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>']
  });
  $('.third-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:6000,
    loop:true,
    nav:true,
    navText:['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
    responsive:{
      0:{
        items:1,
      },
      420:{
        items:2,
        margin:10,
      },
      576:{
        items:3,
        margin:10,
      },
      768:{
        items:5,
        margin:20,
      },
    }
  });
})
