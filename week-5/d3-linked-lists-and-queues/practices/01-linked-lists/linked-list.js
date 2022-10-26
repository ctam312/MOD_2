class LinkedListNode {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
    this.length = 0;
	}
  
	addToHead(val) {
    const start = Date.now();
    const newNode = new LinkedListNode(val);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    this.print();
    
	}

	addToTail(val) {

		const newNode = new LinkedListNode(val);
    this.length++;
    //case 1: there are not any nodes in the list
    if (!this.head){
      this.head = newNode;
      return this;
    }

    let currentNode = this.head

    while (currentNode.next){
      currentNode = currentNode.next
    }

    currentNode.next = newNode;
    this.print();
    //case 2: there are nodes in the list
	}

	// You can use this function to help debug
	print() {
		let current = this.head;

		while (current) {
			process.stdout.write(`${current.value} -> `);
			current = current.next;
		}

		console.log("NULL");
	}
}

module.exports = LinkedList;
