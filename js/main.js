$(document).ready(() => {
  let hero_img = $(".hero-img");
  if($(window).width() > 576){
    hero_img.attr("src", "./assets/images/illustration-woman-online-desktop.svg");
    $(".il-box").show()
  } else {
    hero_img.attr("src", "./assets/images/illustration-woman-online-mobile.svg");
    $(".il-box").hide()
  }
  $(window).resize(() => {
    if($(window).width() > 576){
      hero_img.attr("src", "./assets/images/illustration-woman-online-desktop.svg");
      $(".il-box").show()
    } else {
      hero_img.attr("src", "./assets/images/illustration-woman-online-mobile.svg");
      $(".il-box").hide()
    }
  })
  
});
wow = new WOW(
  {
  boxClass:     'animate__animated',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
});
wow.init();  