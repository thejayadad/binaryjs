
//Queue has two main operations - add & remove element

//First in first out


class JsQueue {
    // Empty Array
    constructor() {
        this.list = [];
    }

    // Add Element to Queue
    enequeue(el){
        this.list.push(el);
    }

    //Remove  Element from Queue

    dequeue(){
        return this.list.shift();
    }
    //To get the size of the Queue
    size(){
        return this.list.length;
    }


    //Print all numbers in the queue
    printQueue(){
        console.log("The Items in the Queue are: " + this.list.toString());

    }

}

const queue = new JsQueue();

queue.enequeue(3);
queue.enequeue(2);
queue.enequeue(1);
queue.printQueue();
console.log("This Item is being removed:" + queue.dequeue());
console.log("The Size of the Queue is: " + queue.size());
queue.printQueue();
console.log("This Item is being removed:" + queue.dequeue());
console.log("The Size of the Queue is: " + queue.size());
queue.dequeue();
