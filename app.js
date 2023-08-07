$("#hamburger-icon").on("click", () => {
  $("#hamburger-icon").toggleClass("show");

  if ($("nav .menu").hasClass("mobile-menu")) {
    $("nav .menu").fadeOut();
    setTimeout(() => {
      $("nav .menu").removeClass("mobile-menu");
    }, 500);
  } else {
    $("nav .menu").addClass("mobile-menu");
    $("nav .menu").fadeIn();
  }
});
