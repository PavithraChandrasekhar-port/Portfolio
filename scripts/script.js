$(document).ready(function(){

    $(".nav").click(function() {
      $('#section1').fadeOut(2500);
      $('#section2').fadeOut(2500);
      $('#section3').fadeOut(2500);
      // $(".nav").removeClass("active");
      // $(this).addClass("active");
      $(this.getAttribute('href')).show( "drop", { direction: "down" }, "slow" );
    return false;
});

$(".projectcard").click(function() {
  $('#project1').fadeOut(2500);
  $('#project2').fadeOut(2500);
  $('#project3').fadeOut(2500);
  $(".projectcard").removeClass("active");
  $(this).addClass("active");
  $(this.getAttribute('href')).show( "drop", { direction: "down" }, "slow" );
  return false;
});

$(".project-details-1").find("#back").click(function(){
  ;
  $("#project1").hide( "drop", { direction: "down" }, "slow" );
});
$(".project-details-1").find("#back").click(function(){
  $("#project2").hide( "drop", { direction: "down" }, "slow" );
});
$(".project-details-1").find("#back").click(function(){
  
  $("#project3").hide( "drop", { direction: "down" }, "slow" );
});

})