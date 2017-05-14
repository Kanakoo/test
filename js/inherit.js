/**
 * Created by admini161015 on 2017/5/14.
 */
//工厂模式 不能知道对象的类型
function createPerson(name,hobbies){
    var o={};
    o.name=name;
    o.hobbies=hobbies;
    o.sayname=function(){
        console.log(this.name);
    }
    return o;
}
var p1=createPerson('lqq',['js']);
//构造函数模式 每个实例都要创建一次方法
//方法写在全局，而全局函数只能被某个对象调用
function Person(name,hobbies){
    this.name=name;
    this.hobbies=hobbies;
    this.sayname=function(){
        console.log(this.name);
    }
}
//原型模式 共享引用类型
function Person(name,hobbies){
}
Person.prototype.name=name;
Person.prototype.hobbies=hobbies;
Person.prototype.sayname=function(){
    console.log(this.name);
}
//或
Person.prototype={
    name:'lqq',
    hobbies:['js','java'],
    sayname:function(){
        console.log(this.name);
    }

}
//组合构造函数和原型
function Person(name,hobbies){
    this.name=name;
    this.hobbies=hobbies;
}
Person.prototype.sayname=function(){
    console.log(this.name);
}
//寄生构造函数
function createPerson(name,hobbies){
    var o={};
    o.name=name;
    o.hobbies=hobbies;
    o.sayname=function(){
        console.log(this.name);
    }
    return o;
}
var p1=new Person('lqq',['js']);
//稳妥构造函数模式
//...
//原型链继承 子类共享引用类型
function Parent(name){
    this.name=name;
    this.hobbies=['js'];
}
Parent.prototype.sayname=function(){
    console.log(this.name);
}
function Child(name){
    this.name=name;
}
Child.prototype=new Parent();

//借用构造函数 方法都在构造函数中定义，无法复用
function Parent(name){
    this.name=name;
    this.hobbies=['js'];
    this.prototype.sayname=function(){
        console.log(this.name);
    }
}
function Child(name){
    Parent.call(this,name);
}
Child.prototype=new Parent();

//组合继承 父类构造函数要调用两次
function Parent(name){
    this.name=name;
    this.hobbies=['js'];
}
Parent.prototype.sayname=function(){
    console.log(this.name);
}
function Child(name){
    Parent.call(this,name);//第二次
}
Child.prototype=new Parent();//第一次
Child.prototype.constructor=Child;

//原型式继承 共享引用属性
function object(o){
    function F(){}
    F.prototype=o;
    return new F();
}
var person={
    name:'lqq',
    hobbies:['js']
}
var person1=object(person);//Object.create(person,{name:{value:'xyz'}})
person1.name='xyz';

//寄生式继承 共享引用属性
var person={
    name:'lqq',
    hobbies:['js']
}
function createPerson(o){
    var clone=Object.create(o);
    clone.sayname=function(){
        console.log(this.name);
    };
    return clone;
}
var person1=createPerson(person);

//寄生组合式继承 不会共享引用类型
function inherit(parent,child){
    var prototype=Object.create(parent.prototype);
    prototype.constructor=child;
    child.prototype=prototype;
}
function Parent(name){
    this.name=name;
    this.hobbies=['js'];
}
function Child(name){
    Parent.call(this,name);
}
inherit(Parent,Child);
Child.prototype.say=function(){
    console.log('hi');
}
//给原型添加的方法一定要放在替换原型的语句之后

