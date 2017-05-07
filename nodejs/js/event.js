/**
 * Created by admini161015 on 2017/4/21.
 */
var EventEmitter=require('events').EventEmitter;
var life=new EventEmitter();
//life.setMaxListeners(11); 每个事件分配最多11个监听
function water(){
    console.log('water');
}
life.on('name',water);
life.on('name',function (who) {
    console.log('我是'+who);
});
life.on('name',function (who) {
    console.log('她是'+who);
});
life.removeListener('name',water);
//life.removeAllListeners();移除所有
//life.removeAllListeners('name');
var hasListener=life.emit('name','Lee');

console.log(hasListener);
console.log(life.listeners('name').length+" "+EventEmitter.listenerCount(life,'name'));