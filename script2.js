
/*
$(document).ready(function(){
  $("#Cal").fadeOut("fast");
  $("#res").fadeOut("fast");
});
*/
$(function(){
  $("#res").hide("fast");
  $("#calculate").click(function(){
    $("#res").show(2000);
  });

  $("#refresh").click(function(){
    $("#res").hide("fast");
  });

});
