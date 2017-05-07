/**
 * Created by admini161015 on 2017/2/18.
 */
$(function(){

    var $bird=$("#bird");
    var pos=$bird.offset();//方位
    var birdSize={width:$bird.width(),height:$bird.height()};
    var speed=10;
    var dir=37;
    $(document).keydown(function(even){
        var key=even.keyCode;
        if(key!=dir)
            $bird.removeClass().addClass("dir_"+key);
        dir=key;
        switch(key){
            case 37://左
                    pos.left-=speed;
                    if(pos.left<=0)
                        pos.left=0;
                break;
            case 38://上
                 pos.top-=speed;
                if(pos.top<0)
                    pos.top=0;
                break;
            case 39://右
                    pos.left+=speed;
                    if(pos.left>$(window).width()-birdSize.width)
                    pos.left=$(window).width()-birdSize.width;
                break;
            case 40://下
                pos.top+=speed;
                if(pos.top>$(window).height()-birdSize.height)
                    pos.top=$(window).height()-birdSize.height;
                break;
        }

        $bird.offset(pos);
    });

}
)
