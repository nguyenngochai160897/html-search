$(document).ready(function () {
    $(".tab-link").on("click", function (e) {
        e.preventDefault();
        let valueLink = $(this).html().trim()
        
        $(".tab-link").removeClass("active");

        if (valueLink.includes("Tất cả")) {
            $(this).addClass("active")
        }
        else if (valueLink.includes("Streamer")) {
            $(this).addClass("active")
        }
        else if (valueLink.includes("Game")) {
            $(this).addClass("active")
        }
        else if (valueLink.includes("Video")) {
            $(this).addClass("active")
        }

    });
});