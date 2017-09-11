/**
 * Created by Administrator on 2017/7/20.
 */
function ShowDiv(show_div,bg_div){
    document.getElementById(show_div).style.display='block';
    document.getElementById(bg_div).style.display='block' ;
    var bgdiv = document.getElementById(bg_div);
    bgdiv.style.width = document.body.scrollWidth;
    $("#"+bg_div).height($(document).height());
};
//�رյ�����
function CloseDiv(show_div,bg_div) {
    document.getElementById(show_div).style.display='none';
    document.getElementById(bg_div).style.display='none';
};

$(document).ready(function(){
    $(".black-overlay").click(function(){
        $(".black-overlay").css("display","none");
        $(".white-content").css("display","none");
    });
    $(".clients").click(function(){
        $(".firms").removeClass("firm");

        $(this).addClass("client");
        $("client").css("color","#fff")
    });
    $(".firms").click(function(){
        $(".clients").removeClass("client");

        $(this).addClass("firm");
        $("firm").css("color","#fff")
    });
    $('.flexslider').flexslider({
        directionNav: false,
        pauseOnAction: true,
        slideshowSpeed: 5000
    });
    $(".example ul li img").removeClass("gray");
    //$(".example ul li").hover(function(){
    //    $(this).find(".hid").show("slow")
    //},function(){
    //    $(this).find(".hid").addClass("displayNone")
    //});
//        $(".example ul li").mouseover(function(){
//            var data = $(this).attr("data-id");
//            $(this).html('<img src="images/comp'+data+'.jpg">')
//        }).mouseout(function(){
//            var datas = $(this).attr("data-id");
//            $(this).html('<img src="images/co'+datas+'.jpg">')
//        });
    $(window).bind("scroll", function () {
        var sTop = $(window).scrollTop();
        var sTop = parseInt(sTop);
        //if (sTop >= 80) {
        //    $(".index-navs").removeClass("index-nav");
        //    $(".index-navs").addClass("index-nava")
        //}
        if (sTop >= 180) {
            $(".light4").removeClass("displayNone");
            $(".light4").addClass("a-fadeinR")
        }
        if (sTop >= 200) {
            $(".light1").removeClass("displayNone");
            $(".light1").addClass("a-fadeinL")
        }
        if (sTop >=480) {
            $(".light5").removeClass("displayNone");
            $(".light5").addClass("a-fadeinR")
        }
        if (sTop >=500) {
            $(".light2").removeClass("displayNone");
            $(".light2").addClass("a-fadeinL")
        }
        if (sTop >=780) {
            $(".light6").removeClass("displayNone");
            $(".light6").addClass("a-fadeinR")
        }
        if (sTop >=750) {
            $(".light3").removeClass("displayNone");
            $(".light3").addClass("a-fadeinL")
        }
        if (sTop >=1050) {
            $(".intro").removeClass("displayNone");
            $(".intro").addClass("a-fadeinL")
        }else{
            $(".intro").addClass("displayNone");
            $(".intro").removeClass("a-fadeinL")
        }
        if (sTop >=1050) {
            $(".pho").removeClass("displayNone");
            $(".pho").addClass("a-fadeinR")
        }else{
            $(".pho").addClass("displayNone");
            $(".pho").removeClass("a-fadeinR")
        }
        if (sTop >=1700) {
            $(".device ul li").removeClass("displayNone");
            $(".device ul li").addClass("a-bouncein")
        }else{
            $(".device ul li").addClass("displayNone");
            $(".device ul li").removeClass("a-bouncein")
        }
        if (sTop >=2300) {
            $(".example ul li").removeClass("displayNone");
            $(".example ul li").addClass("a-wobble")
        }else{
            $(".example ul li").addClass("displayNone");
            $(".example ul li").removeClass("a-wobble")
        }
    });
});