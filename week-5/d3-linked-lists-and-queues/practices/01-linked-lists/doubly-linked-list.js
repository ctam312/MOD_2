class DoublyLinkedListNode {
	constructor(val) {
		this.value = val;
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	addToHead(val) {
		// Your code here
    const start = Date.now();
		const newNode = new DoublyLinkedListNode(val);
    this.length++

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
    const end = Date.now();
    console.log(end-start)
	}

	addToTail(val) {
		// Your code here
    const start2 = Date.now();
		const newNode = new DoublyLinkedListNode(val);
		this.length++;

		//case 1: there are not any nodes in the list
		if (!this.tail) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}
    const end2 =Date.now();
    console.log(end2-start2);
	}

	// You can use this function to help debug
	print() {
		let current = this.head;

		while (current) {
			process.stdout.write(`${current.value} <-> `);
			current = current.next;
		}

		console.log("NULL");
	}
}

module.exports = DoublyLinkedList;
