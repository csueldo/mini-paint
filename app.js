$(document).ready(function() {
    var currentColor = "white";

    $(".box").click( function() {
        $(this).toggleClass(currentColor);
    });
    // $(".box").on('dblclick', function() {
    //         $(this).removeClass("currentColor"));
    // });
    $("#reset").click(function() {
      $(".box").removeClass("red blue green yellow white");
     });
     $(".color-item").click(function() {
       currentColor = $(this).text().toLowerCase();
     });
});
