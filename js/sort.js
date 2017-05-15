/**
 * Created by admini161015 on 2017/5/14.
 */
/*
基本数据类型
* undefined
* null
* boolean
* string
* number
* 复杂数据类型 object
*
* Boolean类型：
* true:true,非空字符,非零数字(包括无穷大),任何对象,n/a(不适用)
* false:false,'',0,null,undefined
*
*
* Number类型：
* NaN==NaN ---->false
* isNaN(),Number(),parseInt('0xff') parseInt('ff',16),parseFloat('01.02')
*toFixed(2) toExponential(1) toPrecision(2)
* String类似：
* toString(16)(可选参数，null和undefined没有此方法), String(),
*
*String类型：
* charAt() charCodeAt() fromCharCode(101,104,108)
* concat('','')
* slice() substr() substring()
* indexOf() lastIndexOf()
* str.trim()
* toLowerCase() to UpperCase()
* match() search() replace() split()
* localeCompare()
*
*
* Array类型：
* Array.isArray(value) 或 value instanceof Array
* toString() valueOf()//['red','blue'] --->red,blue
* join('|')
* push() pop() shift() unshift()
* sort(compare) reverse()
* concat([],[],value)
* slice()
* splice(0,1,'a','b') //返回删除项的数组或空数组
*indexOf() lastIndexOf()
* every() some() filter()　map()　forEach()
* reduce 归并
*
* 基本包装类型：Boolean Number String
* 单体内置对象：Global(window) Math
* */
function addStyle(dom){
    var dom=dom||document.body;
    [].slice.call(dom.children).forEach(function(child){
        child.style.border="2px dashed #"+Math.floor(Math.random()*16777215).toString(16);
        addStyle(child);
    });
}
function addStyle2(dom){
    var dom = dom || document.body;
    var domList = [dom];
    while (domList.length !== 0) {
        var firstDom = domList.shift();
        firstDom.style.outline="2px dashed #"+Math.floor((Math.random()*16777215)).toString(16);
        [].slice.call(firstDom.children).forEach(function(childDom){
            domList.push(childDom);
    });
    }
}
function QuickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    var pivot=arr.splice(0,1)[0];
    var left=[];var right=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i])
        }
    }
    return QuickSort(left).concat([pivot],QuickSort(right));
}
function shuffle(arr){
    var n=arr.length;//n=5
    while(n!==0){
        var index=Math.floor(Math.random()*n);//0,4
        var tmp=arr[index];
        arr[index]=arr[n-1];
        arr[n-1]=tmp;
        n--;
    }
    return arr;
}
function bubble(arr,n){
    for(var i=1;i<n+1;i++){
        for(var j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                var tmp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tmp;
            }
        }
    }
    return arr.slice(arr.length-3);
}
function count(str){
    var o={};
    for(var i=0;i<str.length;i++){
        var char=str.charAt(i);
        if(o[char]){
            o[char]++;
        }else{
            o[char]=1;
        }
    }
    var max={num:0,key:''};
    for(var key in obj){
        if(max.num<obj[key]){
            max.num=obj[key];
            max.key=key;
        }
    }
    return max;
}
function binary(arr,value){
    var low=0,high=arr.length-1;
    while(low<=high){
        var mid=Math.floor((low+high)/2);
        if(arr[mid]==value){
            return mid;
        }
        if(arr[mid]<value){
            low=mid+1;
        }
        if(arr[mid]>value){
            high=mid-1;
        }
    }
    return -1;
}
Object.prototype.clone=function(){
    var o=this.constructor==Array?[]:{};
    for(var e in this){
        o[e]=typeof this[e]=='object'?this[e].clone():this[e];
    }
    return o;
};
Array.prototype.unique=function () {
    var re=[];
    this.forEach(function (value) {
        if(re.indexOf(value)==-1){
            re.push(value);
        }
    })
    return re;
}
String.prototype.unique=function(){
    var re='';
    for(var i=0;i<this.length;i++){
        if(re.indexOf(this.charAt(i))==-1){
            re+=this.charAt(i);
        }
    }
    return re;

}


