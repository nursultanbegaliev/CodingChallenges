class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    // If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  //Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    if (!this.head) {
      return;
    }

    while (count < index) {
      current = current.next;
      count++;
    }

    console.log(current.data);
  }

  //Remove at index
  removeAt(index) {
    let previous, current;
    let count = 0;
    current = this.head;
    if (!this.head) {
      return;
    }
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    previous.next = current.next;
  }

  //Clear list
  clear() {
    this.head = null;
    this.size = 0;
  }

  //Print list data
  printData() {
    let current = this.head;

    while (current) {
      // console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertLast(200);
ll.insertFirst(50);
ll.insertAt(30, 0);
ll.removeAt(0);
ll.getAt(1);
// ll.insertFirst(200);
// ll.insertFirst(500);
// ll.insertLast(400);
// ll.insertAt(500, 0);
ll.printData();
console.log(ll);
