/**
 * Created by admini161015 on 2017/2/17.
 */
var i=0;var timer;

$(function(){

    $(".img").eq(0).show().siblings().hide();
    $(".tag").eq(0).addClass("bg").siblings().removeClass("bg");
    ShowTimer();

    $(".tag").hover(function(){
        i=$(this).index();
        Show();
        clearInterval(timer);
    },function(){
        ShowTimer();
    });

    $(".btn1").click(function(){
        clearInterval(timer);
        i--;
        if(i==-1) i=2;
        Show();
        ShowTimer();

        });
    $(".btn2").click(function(){
        clearInterval(timer);
        i++;
        if(i==3) i=0;
        Show();
        ShowTimer();
    });

    $(".showarea").hover(function(){
        $(".btn1").fadeIn(300);
        $(".btn2").fadeIn(300);
    },function(){
        $(".btn1").fadeOut(300);
        $(".btn2").fadeOut(300);
    });
    $(".gundong").hover(function(){
        $(".btnl").fadeIn(300);
        $(".btnr").fadeIn(300);
    },function(){
        $(".btnl").fadeOut(300);
        $(".btnr").fadeOut(300);
    });
//ceshi
    $("#layer").click(function(){
        layer.alert('内容', {
            icon: 1,
            skin: 'layer-ext-moon'
        });

    });
   // alert( $(".showarea2")[0].style.left);
   // alert( $(".showarea2").offset().left);

//temp用来记下当前的offsetleft
    var ulwid=$(".showarea2")[0].offsetWidth/2;//900
    var ulleft= $(".showarea2")[0].offsetLeft;//0
    var l=ulleft,r=-ulwid,temp=null;
    var speed=2;

    //开始先向左滚动
var timer2=setInterval(function(){
    if(l>=-ulwid)
    {
        $(".showarea2")[0].style.left=l+"px";
        l-=speed;
    }
    else
    {
        $(".showarea2")[0].style.left=ulleft+"px";
        l=ulleft;//归零重新减
    }
    temp=l;
},10);
    //向左
    $(".btnl").click(function(){
        clearInterval(timer2);
        l=temp;
        timer2=setInterval(function(){

            if(l>=-ulwid)
            {
                $(".showarea2")[0].style.left=l+"px";
                l-=2;
            }
            else
            {
                $(".showarea2")[0].style.left="0px";
                l=ulleft;//归零重新减
            }
         temp=l;

        },10);
    });
    //向右
    $(".btnr").click(function(){

        clearInterval(timer2);
        r=temp;
        timer2=setInterval(function(){
            if(r<=ulleft)
            {
                $(".showarea2")[0].style.left=r+"px";
                r+=speed;
            }
            else
            {
                $(".showarea2")[0].style.left="-900px";
                r=-ulwid;
            }
            temp=r;
        },10);
    });
    $(".pic").click(function () {
        $(".pic[title]").stop(true,true);
        $(this).stop(true,true);
        var thisleft=$(this).css("left");
        var thistop=$(this).css("top");
        var thiszindex=$(this).css("z-index");
        var middleleft=$(".pic[title]").css("left");
        var middletop=$(".pic[title]").css("top");
        var middlezindex=$(".pic[title]").css("z-index");
        $(".pic[title]").animate({"left":thisleft,"top":thistop},1000).css("z-index",thiszindex).removeAttr("title");
        $(this).animate({"left":middleleft,"top":middletop},1000).css("z-index",middlezindex).attr("title","");

    });
});
function Show(){
    $(".img:eq("+i+")").fadeIn(300).siblings().fadeOut(300);
    $(".tag").eq(i).addClass("bg").siblings().removeClass("bg");}
function ShowTimer(){
    timer=setInterval(function(){
        i=(i+1)%3;
        Show();
    },2000);

}
