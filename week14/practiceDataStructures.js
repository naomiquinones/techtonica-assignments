//Linked List practice problem
//Part 1: make a Node class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    console.log('\nCreating new node with value: ',this.val);
  }
}
/*******************
 ** LinkedList class
 *******************/
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    console.log('\nCreating new linked list:\n',this);
  }
  printAll() {
    var current = this.head;
    console.log("Printing all values:");
    let counter = 1;
    while (current !== null) {
      console.log(`\t${counter}. ${current.val}`);
      current = current.next;
      counter++;
    }
  }
  //Part 2: returns whether or not a value is in the list
  valueExists(data) {
    var current = this.head;

    // iterate over the list
    while (current != null) {
      // comparing element with current
      // element if found then return true
      if (current.val === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  getData(indexToSearch) {
    // make sure index is positive integer
    if (indexToSearch >= 0) {
      let current = this.head;

      // make a variable to track which node we're on
      let counter = 0;
      // go through the list until we get to the end or the index to search
      while (current !== null && counter < indexToSearch) {
        current = current.next;
        counter++;
      }
      // if we got to the index, return the value
      // or we got to the end and not index, return undefined
      return current !== null ? current.val : undefined;
    } else {
      return undefined;
    }
    // complexity O(1) - O(N) from start to end
  }
  //Part 3: adds a new value to the end of a list.
  addNode(data) {
    // create new node
    const newNode = new Node(data);
    // if head is empty, create new node
    if (this.head === null) {
      console.log(`Adding ${data} at head`)
      this.head = newNode;
    } else {
      // if not, loop until the last element, then add new node
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      console.log(`Added new node with value of ${data}`)
      current.next = newNode;
    }
  }
  removeNode(indexToRemove) {
    let current = this.head;
    if (current === null) {
      // throw error instead of returning
      return "The list is empty";
    }
    if (indexToRemove < 0) {
      // throw error instead of returning
      return "Index does not exist";
    }
    if (indexToRemove === 0) {
      // make a temporary variable to hold the data in the current node
      const data = current.val;
      // set the head to be the node next to it (effectively gets rid of current head)
      current = current.next;
      // return the data in previous head
      return data;
    }
    // set previous node so can attach next if removing current node
    let prev = null;
    // make a variable to track which node we're on
    let counter = 0;

    // go through the list until we get to the end or the index to search
    while (current !== null && counter < indexToRemove) {
      prev = current;
      current = current.next;
      counter++;
    }
    if (current !== null) {
      // set node that follows the previous node to the node that follows current node
      // this effectively gets rid of current node
      prev.next = current.next;
      return "Removed value: " + current.val;
    }
    // if we got to the end, it means we didn't match the index to remove
    // can throw an error instead
    return `Index ${indexToRemove} not found`;
  }
  // complexity is O(1) to O(N)
}

module.exports = {
  Node, LinkedList
}