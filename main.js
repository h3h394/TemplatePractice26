$(document).ready(function () {
    $(".burger").on("click", function () {
        $(".list").toggle("slow");
    });
    $(window).resize(function () {
        // This will fire each time the window is resized:
        if ($(window).width() >= 900) {
            // if larger or equal
            $('.list').show();
        }
    });
});