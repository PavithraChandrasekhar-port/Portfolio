$(document).ready(function () {
  
    $(function () {
        $("nav-links li").delegate("a", "click", function () {
            return (window.location.hash = $(this).attr("href")), !1;
        }),
            $(window).bind("hashchange", function () {
                var o,
                    e = window.location.hash.substring(0);
                e &&
                    (console.log(e),
                    $(".nav-links li a").removeClass("active rounded-rectangle"),
                    $(".nav-links li a[href='" + e + "']").addClass("active rounded-rectangle"),
                    (o = e),
                    $("#section1").css("transform", "scale(85%) translateY(30px)", "zIndex", "9").animate({ opacity: "0.9" }, 10).delay(5),
                    $("#section2").css("transform", "scale(85%) translateY(-70px)", "zIndex", "9").animate({ opacity: "0.9" }, 10).delay(5),
                    $("#section3").css("transform", "scale(85%) translateY(30px)", "zIndex", "9").animate({ opacity: "0.9" }, 10).delay(5),
                    $(o).css("transform", "scale(100%)", "zIndex", "10").show("drop", { direction: "up" }).css({ "margin-top": "1000px" }).animate({ "margin-top": 0, opacity: "1" }, 250),
                    $(o).siblings().delay(500).hide(200),
                    $(window).scrollTop(0));
            });

                
            
            
    }),

        $(".projectcard").click(function () {
            return (
                $("#project1").fadeOut(2500),
                $("#project2").fadeOut(2500),
                $("#project3").fadeOut(2500),
                $(".projectcard").removeClass("active"),
                $(this).addClass("active"),
                $(this.getAttribute("href")).show("drop", { direction: "down" }, "slow"),
                $(window).scrollTop(0),
                !1
            );
        }),
        $(".next-proj-right").click(function () {
            return (
                $("#project1").hide("drop", { direction: "down" }, "slow"),
                $("#project2").hide("drop", { direction: "down" }, "slow"),
                $("#project3").hide("drop", { direction: "down" }, "slow"),
                $(".projectcard").removeClass("active"),
                $(this.getAttribute("href")).show("drop", { direction: "down" }, "slow"),
                $(window).scrollTop(0),
                !1
            );
        }),
        $(".next-proj-left").click(function () {
            return (
                $("#project1").hide("drop", { direction: "down" }, "slow"),
                $("#project2").hide("drop", { direction: "down" }, "slow"),
                $("#project3").hide("drop", { direction: "down" }, "slow"),
                $(".projectcard").removeClass("active"),
                $(this.getAttribute("href")).show("drop", { direction: "down" }, "slow"),
                $(window).scrollTop(0),
                !1
            );
        }),
        $(".project-details-1")
            .find("#back")
            .click(function () {
                $("#project1").hide("drop", { direction: "down" }, "slow");
            }),
        $(".project-details-1")
            .find("#back")
            .click(function () {
                $("#project2").hide("drop", { direction: "down" }, "slow");
            }),
        $(".project-details-1")
            .find("#back")
            .click(function () {
                $("#project3").hide("drop", { direction: "down" }, "slow");
            });

}),


    $(window).scroll(function () {
        var o = $(window).scrollTop();
        var width = $(window).width();
        o > 325
            ? ($("#section1").css("transform", "scale(95%)").animate({ opacity: "0.9" }, 10), $("#section3").css("transform", "scale(95%)").animate({ opacity: "0.9" }, 10))
            : o < 355 && ($("#section1").css("transform", "scale(100%)").animate({ opacity: "1" }, 10), $("#section3").css("transform", "scale(100%)").animate({ opacity: "1" }, 10)),
            o > 325 ? $("#section-backdrop").fadeIn(500) : o < 225 && $("#section-backdrop").hide("drop", { direction: "down" });
    });
