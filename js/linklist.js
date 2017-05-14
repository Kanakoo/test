/**
 * Created by admini161015 on 2017/5/14.
 */
function node(value){
    this.value=value;
    this.next=null;
}
function LinkList(){
    this.head=new node(0);
}
LinkList.prototype={
    constructor:LinkList,
    constructList:function(arr){
        var rear=this.head;
        for(var i=0;i<arr.length;i++){
            var s=new node(arr[i]);
            rear.next=s;
            rear=s;
        }
    },
    addByIndex:function(value,index){
        var pivot=this.findByIndex(index);
        var newnode=new node(value);
        newnode.next=pivot.next;
        pivot.next=newnode;
    },
    addByValue:function(value,pivot){
        var current=this.findByValue(pivot);
        var newnode=new node(value);
        newnode.next=current.next;
        current.next=newnode;
    },
    findByValue:function(v){
        var current=this.head;
        while(current.value!==v){
            current=current.next;
        }
        return current;
    },
    findByIndex:function(index){
        var current=this.head.next;
        for(var i=0;i<index;i++){
            current=current.next;
        }
        return current;
    },
    deleteByIndex:function (index) {
        var current=this.findByIndex(index);
        var pre=this.findByIndex(index-1);
        pre.next=current.next;
    },
    print:function(){
        var current = this.head;
        var arr=[];
        while(current.next != null) {
            //console.log(current.next.value);
            arr.push(current.next.value);
            current = current.next;
        }
        console.log(arr);
    },
    reverse:function () {
        var p=this.head.next;
        this.head.next=null;
        while(p!=null){
            var q=p;
            p=p.next;
            q.next=this.head.next;
            this.head.next=q;
        }
    }
};
var list=new LinkList();
list.constructList([1,2,3]);
list.addByIndex('abc',1);
list.addByValue('abc',1);
list.deleteByIndex(1);
list.reverse();
list.print();