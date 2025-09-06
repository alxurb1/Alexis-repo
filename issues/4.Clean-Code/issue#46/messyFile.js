$(".colors").click(function() {
  var variable_a = $(this).css("background-color");
  $("#canvas").css("background-color", variable_a);
  $(".textures").css("background-color", variable_a);
});
$("#texture-a").click(function() {
  var variable_b = $(this).css("background-image");
  $("#canvas").css("background-image", variable_b);
});
$("#texture-b").click(function() {
  var variable_b = $(this).css("background-image");
  $("#canvas").css("background-image", variable_b);
});
