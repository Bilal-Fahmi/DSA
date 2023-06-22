class Node {
    constructor (value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
    }
    size (){
        let count = 0
        let curr = this.head
        while(curr !== null){
            count++
            curr = curr.next
        }
        return count
    }
    print (value){
        let curr = this.head
        while(curr){
            console.log(curr.value);
            curr = curr.next
        }
    }
    append (value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }
        let prev = this.head
        while(prev.next){
            prev= prev.next
        }prev.next= node
    }
    removefrom(index){
        if(index=0 || index>this.size){
            return null
        }
        let prev = 0 
        if(index===0){
            curr = this.head
            this.head = this.head.next
        }
        let curr = this.head
        for(let i=0;i<index-1;i++){
            prev=curr
            curr=curr.next
        }
        prev.next = curr.next
    }
    removeValue(value){
        if(!this.head){
            return null
        }
        if(this.head.value == value){
            this.head = this.head.next
            return
        }else{
            let prev
            let curr = this.head
            while(curr.next){
                prev = curr
                curr = curr.next
                if(curr.value = value){
                    prev.next = curr.next
                }
            }
        }
    }
}


const list = new LinkedList()