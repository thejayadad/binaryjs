
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
    //To get the first item from the Queue
    peek(){
        if(!this.isEmpty()){
            return this.list[0];
        }
        return null

    }
    printQueue(){
        console.log(this.list.toString());

    }

}

const queue = new JsQueue();

queue.enequeue(10);
console.log(queue.size());
