/**
 * Created by admini161015 on 2017/5/14.
 */
function runAsync(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('执行完成');
            resolve('随便什么数据');
        }, 1000);
    });
    return p;
}
runAsync().then(function(data){
    console.log(data);
    return runAsync();
    //后面可以用传过来的数据做些其他操作
    //......
}).then(function(data){
    console.log(data);});

function test(){
    return new Promise(function(resolve,reject){
        resolve();
    });
}

test().then(function(){
    console.log('resolve1');
    return test();
}).then(function(){
    console.log('resolve2');
});
////
function test1(data){
    return new Promise(function(resolve,reject){
        resolve();
        console.log(data);

    });
}

test1('re0').then(function(){
    return test1('re1');
}).then(function(){
    return test1('re2');
});