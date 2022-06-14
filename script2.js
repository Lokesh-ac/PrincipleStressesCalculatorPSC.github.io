
/*
$(document).ready(function(){
  $("#Cal").fadeOut("fast");
  $("#res").fadeOut("fast");
});
*/
$(function(){
  ¢("#Cal").slideDown("slow");
  $("#res").hide("fast");
  $("#calculate").click(function(){
    $("#res").show(2000);
  });

  $("#refresh").click(function(){
    $("#res").hide("fast");
  });

});
