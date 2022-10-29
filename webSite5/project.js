$(".butsTyp  button").click(function () {
    var classP = $(this).text();
    var inex = 0;
    console.log(classP)
    $(".imgProj > div").each(function () {
        if (!$(this).hasClass(classP)) {
            $(this).removeClass("showImg");
            $(this).attr("order", "100")
        }
        else {
            $(this).addClass("showImg");
            $(this).attr("order", inex)
            inex += 1;


        }
    })
    colum = 0;
    span = 0;
    xtran = 0;
    // tranArray = [];
    // oldtranArray = [];
    // setTran()

});
var colum = 0;
var span = 0;
var xtran = 0;
var tranArray = [];
var oldtranArray = [];
var widImg
var higImg
widImg = parseInt($(".imgProj img").css("width"));
var halallWin = (widImg * 3) / 2;
higImg = parseInt($(".imgProj img").css("height"));
function setTran() {

    $(".showImg").each(function (index) {
        console.log(index)
        if (index % 3 == 0) {
            xtran = colum * (higImg + 20);
            colum++;

            span = 0;
        } else {
            span++
        }
        var ytran = span * (widImg + 20);
        tranArray[index] = [ytran, xtran];

        // $(this).css("transform", `translate(${ytran}px, ${xtran}px) scale(1)`);
    })
    console.log(tranArray)
    oldtranArray = oldtranArray == [] ? [...tranArray] : [...oldtranArray]
    $(".imgProj > div").each(function (index) {
        $(this).css("left", `calc(50% - ${halallWin} )`)
        console.log($(this).css("left"))
        if (!$(this).hasClass("showImg")) {
            $(this).css("transform", `translate(${oldtranArray[index][0]}px, ${oldtranArray[index][1]}px)  scale(0)`);
        }
    });
    oldtranArray = [...tranArray];
    $(".imgProj").css("height", `${xtran + 270}px`)
}

// setTran()
