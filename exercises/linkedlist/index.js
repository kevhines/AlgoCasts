// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    size() {
        let currentNode = this.head
        let count = 0
        while (currentNode) {
            count++
            currentNode = currentNode.next 
        }
        return count
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let currentNode = this.head
        while (currentNode.next) {
            currentNode = currentNode.next 
        }
        return currentNode  
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        if (this.head.next) {
           this.head = this.head.next
        } else {
            this.head = null
        }

    }

    removeLast() {
            if (this.head && this.head.next) {
                let currentNode = this.head
                let prevNode = null
                while (currentNode.next) {
                    prevNode = currentNode
                    currentNode = currentNode.next 
                }
                prevNode.next = null
            } else {
                this.head = null
            }
    }

    insertLast(data) {
        let newNode = new Node(data)
        if (this.head) {
            this.getLast().next = newNode
        } else {
            this.head = newNode
        }
    }

    getAt(index) {
        let counter = 0
        let node = this.head
        while (counter !== index) {
            if (node && node.next) {
                node = node.next
            } else {
                return null
            }
            counter++
        }
        return node
    }

    removeAt(index) {
        if (!this.head) { return  }
        if (index === 0) { 
            this.head = this.head.next
            return
        }
        const prevNode = this.getAt(index - 1)
        if (prevNode) {
            prevNode.next = (prevNode.next) ? prevNode.next.next : null
        } 
    }

    insertAt(data, index) {
        if (!this.head || index === 0) {
            this.insertFirst(data)
            return
        }

        let prevNode = this.getAt(index - 1)
        if (prevNode) {
            prevNode.next = new Node(data,prevNode.next) 
        } else {
            this.insertLast(data)
        }
    }

    forEach(func) {
        let node = this.head
        if (node) { func(node)}
        while (node.next) {
            node = node.next
            func(node)
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
          yield node;
          node = node.next;
        }
      }


}

module.exports = { Node, LinkedList };
