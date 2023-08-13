
var shopImg = ["shopBook1", "shopBook2", "shopBook3"]
var i = 0;
var normalTime = 1000;
var interval = false;
$(".imgbox  button ").click(function () {

    if ($(this).hasClass("shopImgeleft")) {
        if (i == 0) {
            i = 2;
        } else {
            i--
        }
    }
    else if ($(this).hasClass("shopImgeright")) {
        if (i == shopImg.length - 1) {
            i = 0;
        } else {
            i++
        }
    }
    else {
        return;
    }

    var srcI = `./img/${shopImg[i]}.jpg`;
    $(".shopImge").animate({ opacity: "0" }, "slow", function () {
        $(".shopImge").animate({ opacity: "1" }, "slow");
        $(".shopImge").attr("src", srcI);
    })

    interval = false;
})
setTimeout(function () {
    $(".imgbox  .shopImgeleft ").click();
}, 3000)

$(".fulS").click(function () {
    if ($(".fulS span").text() == "fullscreen") {
        window.scrollTo(0, 0);
        $("body").css("overflow", "hidden")
        $(".layOutAbut").fadeIn();
        $(".imgbox").addClass("fullScren");
        //     css({
        //     position: "absolute",
        //     width: "60%",
        //     top: "50%",
        //     left: "50%",
        //     transform: "translate(-50%, -50%)"
        // });
        $(".textImg img").css({
            width: "100%"
        });
        $(".fulS span").text("fullscreen_exit")
    }
    else if ($(".fulS span").text() == "fullscreen_exit") {
        $(".layOutAbut").fadeOut();
        $("body").css("overflow", "scroll")

        // $(".imgbox").
        $(".imgbox").removeClass("fullScren");

        //     css({
        //     position: "relative",
        //     width: "max-content",
        //     top: "auto",
        //     left: "auto",
        //     transform: "translate(0%, 0%)"
        // });
        $(".textImg img").css({
            width: "300px"
        });
        $(".fulS span").text("fullscreen")
    }

})
$(".layOutAbut").click(function () {
    $(".fulS").click();
})

