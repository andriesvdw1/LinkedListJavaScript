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
    contains(value) {
        let current = this.head;
        while(current != null) {
            if(current.data === value) return true; //found the value
            current = current.next; //move to the next node
        }
        return false; //value not found in the list
    }

}

const list = new LinkedList();
list.add("ACE Diamonds");
list.add("Two of Hearts");
list.add("Three of Spades");
list.add("Jack of Clubs");
console.log("Linked list cards contains the Three of Spades: "+list.contains("Three of Spades")); // returns true
console.log("Linked list cards contains the Two of Diamonds: "+list.contains("Two of Diamonds")); // returns false
console.log(list);
