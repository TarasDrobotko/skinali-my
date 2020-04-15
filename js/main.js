$(window).load(function () {
  $(".before-after").twentytwenty({
    before_label: "Без скинали", // Set a custom before label
    after_label: "Со скинали", // Set a custom after label
  });
  $(".before-slider").slick({
    draggable: false,
    dots: true,
    dotsClass: "before-slider__dots",
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right"),
  });
  $(".menu-button").on("click", function () {
    $(".menu").toggleClass("menu_active");
    $(this).toggleClass("menu-button_active");
  });

  /* select settings */
  $(".select").on("click", function () {
    $(".select__dropdown").toggleClass("select__dropdown_open");
    $(this).toggleClass("select_caret");
  });
  $(".select__option").on("click", function () {
    var value = $(this).attr("data-value");
    $("#select-type").val(value);
    $(".select_checked").text(value);
  });
  /* phone mask */
  $('[type="tel"]').mask("+8 (999) 999-99-99");

  /* href link #href */
  //   $('a[href^="#"]').click(function (e) {
  //     e.preventDefault();
  //     $("html, body").animate(
  //       {
  //         scrollTop: $($(this).attr("href")).offset().top - 80 + "px",
  //       },
  //       3000
  //     );
  //   });
});
