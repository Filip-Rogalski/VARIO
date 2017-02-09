$(document).ready(function () {
    var items = $(".item");
    for (var i = 0; i < items.length; i++) {
        var target = Math.floor(Math.random() * items.length - 1) + 1;
        var target2 = Math.floor(Math.random() * items.length - 1) + 1;
        items.eq(target).before(items.eq(target2));
    };
    var cardsOpen = 0;
    $(function () {
        $("#item_int1").click(function () {
            if (cardsOpen == 2) {
                $(".c1").css("visibility", "hidden");
                $(".c2").css("visibility", "hidden");
                cardsOpen = 0;
            }
            else {
                $("#c11").css("visibility", "visible");
                cardsOpen = cardsOpen + 1;
                if ($("#c12").css('visibility') == 'visible') {
                    $("#item_int1").css("background", "grey");
                    $("#item_int2").css("background", "grey");
                    $("#item_int1").attr("disabled", true);
                    $("#item_int2").attr("disabled", true);
                    cardsOpen = 0;
                };
            }
        })
    });
    $("#item_int2").click(function () {
        if (cardsOpen == 2) {
            $(".c1").css("visibility", "hidden");
            $(".c2").css("visibility", "hidden");
            cardsOpen = 0;
        }
        else {
            $("#c12").css("visibility", "visible");
            cardsOpen = cardsOpen + 1;
            if ($("#c11").css('visibility') == 'visible') {
                $("#item_int1").css("background", "grey");
                $("#item_int2").css("background", "grey");
                $("#item_int1").attr("disabled", true);
                $("#item_int2").attr("disabled", true);
                cardsOpen = 0;
            };
        }
    });
    $("#item_int3").click(function () {
        if (cardsOpen == 2) {
            $(".c1").css("visibility", "hidden");
            $(".c2").css("visibility", "hidden");
            cardsOpen = 0;
        }
        else {
            $("#c21").css("visibility", "visible");
            cardsOpen = cardsOpen + 1;
            if ($("#c22").css('visibility') == 'visible') {
                $("#item_int3").css("background", "grey");
                $("#item_int4").css("background", "grey");
                $("#item_int3").attr("disabled", true);
                $("#item_int4").attr("disabled", true);
                cardsOpen = 0;
            };
        }
    })
    $("#item_int4").click(function () {
        if (cardsOpen == 2) {
            $(".c1").css("visibility", "hidden");
            $(".c2").css("visibility", "hidden");
            cardsOpen = 0;
        }
        else {
            $("#c22").css("visibility", "visible");
            cardsOpen = cardsOpen + 1;
            if ($("#c21").css('visibility') == 'visible') {
                $("#item_int3").css("background", "grey");
                $("#item_int4").css("background", "grey");
                $("#item_int3").attr("disabled", true);
                $("#item_int4").attr("disabled", true);
                cardsOpen = 0;
            };
        }
    });
    $("#reset").click(function () {
        $(".c1").css("visibility", "hidden");
        $(".c2").css("visibility", "hidden");
        location.reload();
    });
});