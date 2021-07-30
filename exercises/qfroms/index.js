// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

    constructor() {
        this.stack = new Stack()
    }

    add(n) {
        this.stack.push(n)
    }

    remove() {
        let tempStack = new Stack()
        while (this.stack.peek()) {
            tempStack.push(this.stack.pop())
        }
        let removed = tempStack.pop()
        while (tempStack.peek()) {
            this.stack.push(tempStack.pop())
        }
        return removed
    }

    peek() {
        let tempStack = new Stack()
        while (this.stack.peek()) {
            tempStack.push(this.stack.pop())
        }
        let peeked = tempStack.peek()
        while (tempStack.peek()) {
            this.stack.push(tempStack.pop())
        }
        return peeked
    }

}

module.exports = Queue;
