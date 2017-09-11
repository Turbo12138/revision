/**
 * Created by Administrator on 2017/7/21.
 */
$(document).ready(function(){
    $(".jia").click(function(){
        var ulNode = $(this).next("ul");
        if(ulNode.css("display")=="none"){
            ulNode.css("display","block");
            $(this).closest(".jia").html("<i class='toDown'></i>")
        }else{
            ulNode.css("display","none");
            $(this).closest(".jia").html("<i class='toLeft'></i>");
        }
        //ulNode.slideToggle()
    });
    $(".moddle li a").click(function(){
        $(".moddle li a").css("color","#000");
        $(this).css("color","#00AEF3")
    });
    var height = $(".content").height();
    $(".det-nav").height(height)
    $(".toWhe ul li").removeClass("displayNone");
    $(".toWhe ul li").addClass("a-bouncein")
});