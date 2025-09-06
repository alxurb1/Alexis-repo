$(".colors").click(function() {
  const newBackgroundColor = $(this).css("background-color");
  $("#canvas").css("background-color", newBackgroundColor);
  $(".textures").css("background-color", newBackgroundColor);
});

function setupTextureSelector(selector) {
  $(selector).click(function() {
    const newTextureImage = $(this).css("background-image");
    $("#canvas").css("background-image", newTextureImage);
  });
}

setupTextureSelector("#texture-a");
setupTextureSelector("#texture-b");
