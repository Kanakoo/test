/**
 * Created by admini161015 on 2017/5/7.
 */
function box(){
    var arr = [];
    for(var i=0;i<5;i++){
        arr[i] = function(){
            return i;                            //由于这个闭包的关系，他是循环完毕之后才返回，最终结果是4++是5
        }                                        //这个匿名函数里面根本没有i这个变量，所以匿名函数会从父级函数中去找i，
    }                                            //当找到这个i的时候，for循环已经循环完毕了，所以最终会返回5
    return arr;
}
//alert(box());                                    //执行5次匿名函数本身
//alert(box()[1]);　　　　　　　　　　　　　　　　　　　//执行第2个匿名函数本身
//alert(box().length);                            //最终返回的是一个数组，数组的长度为5
alert(box()[0]());
function box(){
    var arr = [];
    for(var i=0;i<5;i++){
        arr[i] = (function(num){                    //自我执行，并传参(将匿名函数形成一个表达式)(传递一个参数)
            return num;                            //这里的num写什么都可以
        })(i);                                    //这时候这个括号里面的i和上面arr[i]的值是一样的都是取自for循环里面的i
    }
    return arr;
}
//alert(box());
//alert(box()[1]);
//alert(box().length);
alert(box()[0]);
function box(){
    var arr = [];
    for(var i=0;i<5;i++){
        arr[i] = (function(num){
            //num在这里                                    //原理和上面一种方法一样的，所以可以实现闭包
            return function(){                        //在这个闭包里面再写一个匿名函数
                return num;
            };
        })(i)
    }
    return arr;
}
//alert(box());
//alert(box()[1]);
//alert(box().length);
var b = box();
alert(b[0]());
alert(box()[0]());
function box(){
    var arr = [];
    for(var i=0;i<5;i++){
        arr[i] = function(num){
            return num;
        }(i);
    }
    return arr;
}
//alert(box());
//alert(box()[1]);
//alert(box().length);
alert(box()[4]);