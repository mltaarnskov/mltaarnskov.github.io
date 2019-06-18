$(".main").scroll(function() {
  $(this)
    .find(".sticky")
    .css("left", $(this).scrollLeft());
});
