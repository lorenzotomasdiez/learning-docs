const Queue = (function() {
    const items = new WeakMap();
    class Queue {
        constructor (){
            items.set(this, []);
        }
        enqueue(e){
            let s = items.get(this);
            s.push(e);
        }
        dequeue(){
            let s = items.get(this);
            return s.shift(); 
        }
        front(){
            let s = items.get(this);
            return s[0];
        }
        isEmpty(){
            let s = items.get(this);
            return s.length==0;
        }
        size(){
            let s = items.get(this);
            return items.length;
        }
        print(){
            let s = items.get(this);
            console.log(s.toString());
        }
    }
    return Queue
})();

let queue = new Queue();
queue.enqueue("Jhon");
queue.enqueue("Jack");
queue.enqueue("Camila");
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
queue.print();

//PRIORITY QUEUE
