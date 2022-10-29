// $('header')
var i = 1;
var mion = '-'
var plus = '+'
var oldI;

function scrolImg(el, imgName, dir, stopit) {
    console.log(i)
    if (dir == "ltr") {
        mion = '-'
        plus = '+'
        function dirc() {
            oldI = i;
            if (i != 3) {

                i++

            }
            else {
                i = 1;
            }

        }
    }
    else {
        mion = '+'
        plus = '-'
        function dirc() {
            oldI = i;
            if (i != 1) {


                i--

            }
            else {
                i = 3;
            }

        }

    }

    $('.firstBImg').css("backgroundImage", `url('./img/${imgName + i}.jpg')`);
    $(".firstBImg").animate({ right: `${mion}100%`, zIndex: -1 }, 2000, function () {

    })
    dirc();

    $(`.${i}_C`).css("background", "white")
    $(`.${i}_C`).siblings().css("background", "transparent")
    $('.lastBImg').css("backgroundImage", `url('./img/${imgName + i}.jpg')`);

    $(".lastBImg").animate({ right: '0%', zIndex: -1 }, 2000, function () {
        $(".firstBImg").animate({ right: `${plus}100%`, zIndex: -1 }, 2000, function () {
            $(".lastBImg").animate({ right: `${mion}100%`, zIndex: -2 }, 2000, function () {

            })
            dirc()
            $(`.${i}_C`).css("background", "white")
            $(`.${i}_C`).siblings().css("background", "transparent")

            $('.firstBImg').css("backgroundImage", `url('./img/${imgName + i}.jpg')`);

            $(".firstBImg").animate({ right: '0%', zIndex: -1 }, 2000, function () {
                $(".lastBImg").animate({ right: `${plus}100%`, }, 2000, function () {
                    stopit;
                    scrolImg('header', 'bigLib', dir, stopit);
                }
                )

            })
        })
    });

}
scrolImg('header', 'bigLib', 'rtl', true);


$(".listOfsection > ul > li > a").hover(function () {
    var srcAttr = $(this).attr("imgSrc");
    $('.coverThis').animate({ opacity: "0" }, .3, function () {

        $('.coverThis').animate({
            opacity: "1",

        }, .3, function () {

        })
        $('.coverThis').css("backgroundImage", "url(" + (srcAttr) + ")")
    })


}, function () {
})
$(".formD span").click(function () {
    $(".bookMonth form ").toggleClass("showForm");
    if ($(".bookMonth form ").hasClass("showForm")) {
        $(this).text("remove")
        $(".formD").css("height", "280px");

    }
    else {
        $(this).text("add")
        $(".formD").css("height", "80px");

    }

})