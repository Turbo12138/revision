/**
 * Created by Administrator on 2017/7/21.
 */
(function($){
    $(".topPic .bottom ul li a").click(function(){
        if (!$(this).hasClass("active")) {
            $(".topPic .bottom ul li a").removeClass("active");
            $(this).addClass("active");
        }
        $(".needPart").addClass("displayNone" );
        var id = $(this).attr("data-id");
        $(".needPart[data-id='" + id + "']").removeClass("displayNone" );
    });
})(jQuery);
$(document).ready(function(){
    $(".partT .left").removeClass("displayNone");
    $(".partT .left").addClass("a-fadeinL");
    $(".partT .right").removeClass("displayNone");
    $(".partT .right").addClass("a-fadeinR");
    $(".module1 .left").removeClass("displayNone");
    $(".module1 .left").addClass("a-fadeinL");
    $(".module1 .right").removeClass("displayNone");
    $(".module1 .right").addClass("a-fadeinR");
    $(".prod ul li").removeClass("displayNone");
    $(".prod ul li").addClass("a-bouncein")
    $(window).bind("scroll", function () {
        var sTop = $(window).scrollTop();
        var sTop = parseInt(sTop);
        if (sTop >= 0) {
        }
        if (sTop >= 400) {
            $(".partM .left").removeClass("displayNone");
            $(".partM .left").addClass("a-fadeinL");
            $(".partM .right").removeClass("displayNone");
            $(".partM .right").addClass("a-fadeinR")
            $(".module2 .left").removeClass("displayNone");
            $(".module2 .left").addClass("a-fadeinL");
            $(".module2 .right").removeClass("displayNone");
            $(".module2 .right").addClass("a-fadeinR");
        }else{
            $(".partM .left").addClass("displayNone");
            $(".partM .right").addClass("displayNone");
            $(".module2 .left").addClass("displayNone");
            $(".module2 .right").addClass("displayNone");
        }
        if (sTop >=900) {
            $(".partB .left").removeClass("displayNone");
            $(".partB .left").addClass("a-fadeinL");
            $(".partB .right").removeClass("displayNone");
            $(".partB .right").addClass("a-fadeinR");
            $(".module3 .left").removeClass("displayNone");
            $(".module3 .left").addClass("a-fadeinL");
            $(".module3 .right").removeClass("displayNone");
            $(".module3 .right").addClass("a-fadeinR");
        }else{
            $(".partB .left").addClass("displayNone");
            $(".partB .right").addClass("displayNone");
            $(".module3 .left").addClass("displayNone");
            $(".module3 .right").addClass("displayNone");
        }
        if (sTop >=1200) {
            $(".module4 .left").removeClass("displayNone");
            $(".module4 .left").addClass("a-fadeinL");
            $(".module4 .right").removeClass("displayNone");
            $(".module4 .right").addClass("a-fadeinR");
        }else{
            $(".module4 .left").addClass("displayNone");
            $(".module4 .right").addClass("displayNone");
        }
        if (sTop >=1700) {
            $(".module5 .left").removeClass("displayNone");
            $(".module5 .left").addClass("a-fadeinL");
            $(".module5 .right").removeClass("displayNone");
            $(".module5 .right").addClass("a-fadeinR");
        }else{
            $(".module5 .left").addClass("displayNone");
            $(".module5 .right").addClass("displayNone");
        }
        if (sTop >=2100) {
            $(".module6 .left").removeClass("displayNone");
            $(".module6 .left").addClass("a-fadeinL");
            $(".module6 .right").removeClass("displayNone");
            $(".module6 .right").addClass("a-fadeinR");
        }else{
            $(".module6 .left").addClass("displayNone");
            $(".module6 .right").addClass("displayNone");
        }
    });
});