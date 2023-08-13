
let d = 0;
var halfScree = parseInt($("body").css("height")) / 2;
window.onscroll = (event) => {
    if (window.scrollY >= 200) {
        $(".goUp").fadeIn();
    }
    else {
        $(".goUp").fadeOut();

    }
    if (window.scrollY >= 290) {
        $(".boxExp:last-child , .boxExp:first-child").css({
            transform: "translateX(0%)",
            opacity: "1"
        });
    }
    if (window.scrollY >= 400) {
        $("#showTypsBut").css({
            animationName: "moveButD",
            transform: "translateX(0)"
        });
    }
    if (window.scrollY >= 460) {
        $(".bookMonthcover figure").css({
            left: "100%",
            opacity: "1"
        });
        $(".bookMonthcover aside").css({
            transform: "scale(1)"
        });
    }
    if (window.scrollY >= 680) {
        $(".whatWeHave").css("transform", "scale(1)")
        clearInterval(stopIt);
        var stopIt = setInterval(function () {
            d += 5;

            if (d <= 1000) {
                $(".countBooks span").text(d);

            }
            else {
                $(".countBooks span").text(1000);
            }
            if (d <= 2000) {

                $(".countStores span").text(d);
            } else {
                $(".countStores span").text(2000);

            }
            if (d <= 500) {
                $(".countsubs span").text(d);

            }
            else {
                $(".countsubs span").text(500);

            }
            if (d > 2000) {
                clearInterval(stopIt);
            }

        }, 100)

    }

    if (window.scrollY >= 890) {
        $(".bookMonth form").css({
            // bottom: "0"
        });
    }
    if (innerWidth <= 700) {
        if (window.scrollY >= halfScree) {
            $(".imgbookCover").css({
                transform: "scale(1)"
            });

        }
    } else {
        if (window.scrollY >= 990) {
            $(".imgbookCover").css({
                transform: "scale(1)"
            });

        }
    }

    if (window.scrollY >= 1090) {
        var del = 0
        for (g = 0; g < $(".boxImgPerson").length; g++) {
            $(".boxImgPerson")[g].style.transitionDelay = (del += 0.1) + "s";
            $(".boxImgPerson")[g].style.transform = "scale(1)";

        }

    }
};

$(".goUp").click(function () {
    window.scrollTo(0, 0)
})