/**
 * Created by Administrator on 2017/10/21.
 */


$(function () {
    var index=0;
    $('.flash ul li').mouseover(function () {
        index=$(this).index();
        //在鼠标划过当前的li的时候其宽度为538px，
        // 查找其他的每一个li元素，让其停止动画，并且宽度为106px
        $(this).stop().stop().animate({width:538},500)
            .siblings("li").stop().animate({width:106},500);
        //在鼠标划过当前的li的时候,其文字部分显现，其余的隐藏
        $(".imgCen").eq(index).css("display","block").siblings(".imgCen").css("display","none");
        $(".bt_2").eq(index).css("display","block").siblings(".bt_2").css("display","none");
        $(".imgTop img").eq(index).addClass("tm").siblings(".imgTop img").removeClass("tm");

    });
    $(".flash ul li").mouseout(function () {
        $(".imgCen").css("display","none");
        $(".bt_2").css("display","none");
    });
});