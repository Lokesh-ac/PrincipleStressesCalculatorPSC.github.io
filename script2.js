
/*
$(document).ready(function(){
  $("#Cal").fadeOut("fast");
  $("#res").fadeOut("fast");
});
*/
$(function(){
  $("#Cal").hide("fast");
  $("#res").hide("fast");
  $("#Cal").slidDown(2000);
  $("#calculate").click(function(){
    $("#res").show(2000);
  });

  $("#refresh").click(function(){
    $("#res").hide("fast");
  });

});
