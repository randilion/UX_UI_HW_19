console.log("hello world");

  // function mouseOver() {
  //   document.getElementById("demo").style.color = "#DD2FED";
  // }

  // function mouseOut() {
  //   document.getElementById("demo").style.color = "#8B8B8B";
  // }
  var tabs = $('.tabs');
  var selector = $('.tabs').find('a').length;
  //var selector = $(".tabs").find(".selector");
  var activeItem = tabs.find('.active');
  var activeWidth = activeItem.innerWidth();
  $(".selector").css({
    "left": activeItem.position.left + "px", 
    "width": activeWidth + "px"
  });
  
  $(".tabs").on("click","a",function(e){
    e.preventDefault();
    $('.tabs a').removeClass("active");
    $(this).addClass('active');
    var activeWidth = $(this).innerWidth();
    var itemPos = $(this).position();
    $(".selector").css({
      "left":itemPos.left + "px", 
      "width": activeWidth + "px"
    });
  });