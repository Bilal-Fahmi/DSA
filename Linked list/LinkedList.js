class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    prepend(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }
    append(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = newNode
        }
    }
    print() {
        let curr = this.head
        while (curr) {
            console.log(curr.value);
            curr = curr.next
        }
    }
    size() {
        let count = 0
        let curr = this.head
        while (curr !== null) {
            count++
            curr = curr.next
        }
        return count
    }
    insert(value, index) {
        if (index < 0 || index > this.size) {
            return null
        }
        if (index === 0) {
            this.perpend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
    }
    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return null
        }
        let removeNode
        if (index === 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
    }
    removeValue(value){
        if(!this.head){
            return null
        }
        if(this.head.value===value){
            this.head=this.head.next
            return
        }else{
            let prev = null
            let curr = this.head
            while(curr){
               if(curr.value===value){
                prev.next = curr.next
                return
               }
               prev=curr
               curr=curr.next
            }
         
        }
    }
}

const list = new LinkedList
list.append(5)
list.prepend(7)
list.prepend(10)
list.insert(69, 1)
// list.print()
list.removeValue(69)
list.print()

// console.log(list.size());