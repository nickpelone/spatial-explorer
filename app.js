/*jshint browser:true, devel:true, jquery:true */
(function () {
    "use strict";
    $(document).ready(function () {
        //populate dummy divs
        var dummyString = "<div class='dummy'>dont mind me </div>";
        for (var i = 0; i < 10; ++i) {
            $("#insert").append(dummyString);
        }

        //handle slider
        $("#paddingSlider").slider({
            value: 0,
            orientation: "horizontal",
            range: "min",
            min: -100,
            animate: true,
            change: function (event, ui) {
                $("#paddingText").html("Padding: " + ui.value + "px");
                //adjust the target div's css
                $("#target").css({
                    "padding": "" + ui.value
                });
            }
        });
        $("#marginSlider").slider({
            value: 0,
            orientation: "horizontal",
            range: "min",
            min: -100,
            animate: true,
            change: function (event, ui) {
                $("#marginText").html("Padding: " + ui.value + "px");
                //adjust target
                $("target").css({
                    "padding": "" + ui.value
                });
            }
        });
    });
}());
