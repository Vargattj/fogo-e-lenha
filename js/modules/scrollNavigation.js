export default function scrollNavigation() {
  $("#sec-introduction").click(() => {
    $("html, body").animate(
      {
        scrollTop: $("#introduction").offset().top - 0,
      },
      1000
    );
    return false;
  });

  $("#introduction").waypoint(
    function () {
      $(".container ul li").children().removeClass("active");
      $("#sec-introduction").addClass("active");
    },
    { offset: 101 }
  );
}
