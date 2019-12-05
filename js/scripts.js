$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 300) {
      $('.logo').addClass("logo-scroll"),
        $('.navbar').addClass("navbar-scroll"),
        $('.navbar-toggler-right').addClass("navbar-toggler-scroll");

    } else {
      $('.logo').removeClass("logo-scroll"),
        $(".navbar").removeClass("navbar-scroll"),
        $(".navbar-toggler-right").removeClass("navbar-toggler-scroll");
    }
  });

  $('a[href^="#"]').on('click', function (event) {

    var target = $($(this).attr('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  function activeMenu() {
    const scrollValue = $(window).scrollTop();
    const heightHome = $('#home').offset().top;
    const heightAbout_Us = $('#about_us').offset().top;
    const heightOur_Services = $('#our_services').offset().top;
    const heightGallery = $('#gallery').offset().top;
    const heightBlog = $('#blog').offset().top;
    const heightContact = $('#contact').offset().top;

    $('.nav-item').removeClass('active');

    if (scrollValue < heightAbout_Us - 1) {
      $('.nav-home').addClass('active');
    } else if (scrollValue < heightOur_Services - 1) {
      $('.nav-about').addClass('active');
    } else if (scrollValue < heightGallery - 1) {
      $('.nav-services').addClass('active');
    } else if (scrollValue < heightBlog - 1) {
      $('.nav-gallery').addClass('active');
    } else if (scrollValue < heightContact - 1) {
      $('.nav-blog').addClass('active');
    } else {
      $('.nav-contact').addClass('active');
    }
  }

  $(window).on("scroll", activeMenu)

});