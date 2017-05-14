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
    preAdd:function(value){
        var newnode=new node(value);
        newnode.next=this.head.next;
        this.head.next=newnode;
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
    }
}
var list=new LinkList();
list.preAdd(1);
list.preAdd(2);
list.print();