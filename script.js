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
        
    }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
console.log(list);
