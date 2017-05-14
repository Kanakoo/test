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