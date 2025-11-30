class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    add(data){
        const newNode = new Node(data);
        if(this.head === null) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next; //point to the next node
            }
            current.next = newNode; //link the new node at the end
        }
        this.length++;// increment the length of the list by 1
        
    }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(20);
console.log(list);
