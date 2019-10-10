var {Node, LinkedList} = require('./practiceDataStructures');

let practiceNode = new Node('here it is');
console.log(practiceNode);

//8, 12, 1, 4
console.log("Make a new node object:");
const start = new Node(8);
start.next = new Node(12);
start.next.next = new Node(1);
start.next.next.next = new Node(4);
console.log("\nOur node object is: ",start);



var ll = new LinkedList();
ll.addNode(8);
console.log(ll);
ll.addNode(12);
ll.addNode(1);
ll.addNode(4);
ll.printAll();
console.table(ll);

console.log("Search for 1: ", ll.valueExists(1));
ll.addNode(57);
ll.printAll();

console.log("Testing getData with index 3:", ll.getData(3));
ll.printAll();
console.log(ll.removeNode(2));
ll.printAll();
