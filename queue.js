
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
        console.log(this.list.toString());

    }

}

const queue = new JsQueue();

queue.enequeue(10);
queue.enequeue(20);
console.log("The size of the Queue is: " + queue.size());
console.log(queue.printQueue())
