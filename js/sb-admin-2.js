(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
    
    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $('a.scroll-to-top').on('click', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });


  $('#search_condition').bind('keypress', function (event) {
    if (event.keyCode == "13") {
      if($('#unsafe_checked:checked').val() == 'on'){
        location.href='bank_details_575CC5ED8D0FF70E6561735540FC89E5?model_name='+($('#search_condition').attr('data-model'))+'&page=0&condition='+($('#search_condition').val()+'&unsafe=1')
      }else{
      location.href='bank_details_575CC5ED8D0FF70E6561735540FC89E5?model_name='+($('#search_condition').attr('data-model'))+'&page=0&condition='+($('#search_condition').val())
      }
    }
  })


  // $( "button.btn.btn-primary.flip-action" ).on( "click", function() {
  //   alert( "Handler for `click` called." );
  // } );

  $('.flip-action').bind('click', function (event) {
      $.post("flip_entry",{qid:$(this).val()},function(result){
          console.log('flip')
          location.reload()
      });
  })

  $('.delete-action').bind('click', function (event) {
      $('#second-deletion').val($(this).val())
  })

  $('#second-deletion').bind('click', function (event) {
    $.post("delete_entry",{qid:$(this).val()},function(result){
      console.log('delete')
      location.reload()
  })});

  $('.mut-delete-action').bind('click', function (event) {
      $('#mut-second-deletion').val($(this).val())
  })

  $('#mut-second-deletion').bind('click', function (event) {
    $.post("delete_mut_entry",{qid:$(this).val()},function(result){
      console.log('delete mut entry')
      location.reload()
  });})




})(jQuery); // End of use strict
