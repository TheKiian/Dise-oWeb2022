function withAnimate() {
    $("#with-jquery").animate({
      left: "500px",
    }, {
      duration: 3000, 
      easing: "linear"
    } ); 
  }
  
  $("#play-jquery").on('click', function(){
    withAnimate();
  });
  
  function withVelocity() {
    $("#with-velocity").velocity({
      left: "500px",
    }, {
      duration: 3000, 
      easing: "linear"
    } );  
  }
  
  $("#play-velocity").on('click', function(){
    withVelocity();
  });
  