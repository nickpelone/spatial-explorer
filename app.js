/*jshint browser:true, devel:true, jquery:true */
(function () {
    "use strict";
    $(document).ready(function () {
        console.log("bla");
        $("#paddingSlider").slider({
            value: 0,
            orientation: "horizontal",
            range: "min",
            min: -100,
            animate: true,
            change: function(event, ui) {
                $("#paddingText").html("Padding: " + ui.value + "px");
            }
        });
    });
}());
