/**
 * Created by admini161015 on 2017/5/14.
 */
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
