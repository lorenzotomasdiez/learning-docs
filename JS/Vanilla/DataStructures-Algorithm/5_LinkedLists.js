function LinkedList(){
    let Node = function(element) {
        this.element = element;
        this.next = null;
    };
    let length = 0;
    let head = null;
    //Methods
    this.append = function(element){
        let node = new Node(element),
        current;
        if(head===null){
            head = node;
        }else{
            current = head;
            //loop the list until find the last item
            while(current.next){
                current = current.next;
            };
            //get last item and assign next to node to make the link
            current.next = node;
        };
        length++;
    };
    this.insert = function(position, element){
        //check for out-of-bounds values
        if(position >= 0 && position < length){
            let node = new Node(element),
            current = head,
            previous,
            index = 0;
            if(position === 0){
                node.next = current;
                head = node;
            } else {
                while(index++<position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            };
            length++;
            return true
        }else{
            return false;
        };
    };
    this.removeAt = function(position){
        //check for out-of-bounds values
        if(position >= 0 && position < length){
            let current = head,
            previous,
            index = 0;
            //removing firts item
            if(position === 0){
                head = current.next;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                };
                //link previous with current's next: skip it to remove.
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
    this.remove = function(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    };
    this.indexOf = function(element){
        let current = head,
        index = -1;
        while(current){
            if(element===current.element){
                return index;
            }
            index++
            current=current.next;
        };
        return -1;
    };
    this.isEmpty = function(){
        return length === 0;
    };
    this.size = function(){
        return length
    };
    this.toString = function(){
        let current = head,
        string = '';

        while(current){
            string+=current.element + (current.next ? 'n' : '');
        }
        return string;
    };
    this.getHead = function(){
        return head;
    }
    this.print = function(){
        let objects = []
        let current = head;
        for(let i = 0;i < length; i++){
            objects.join(current.element);
            current.next;
        };
        return objects;
    };
};

//DOUBLE LINKED LIST

function DoublyLinkedList() {
    let Node = function(element){
        this.element = element;
        this.next = null;
        this.prev = null;
    };
    let length = 0;
    let head = null;
    let tail = null;
    //METHODS
    this.insert = function(position, element){
        //check out-of-bounds values
        if(position >= 0 && position <= length){
            let node = new Node(element),
            current = head,
            previous,
            index = 0;

            if(position===0){
                if(!head){
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head=node;
                }
            }else if (position === length){
                current = tail;
                current.next = node;
                node.prev = current;
                tail=node;
            } else {
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;

                current.prev = node;
                node.prev=previous;
            };
            length++;
            return true;
        }else{
            return false;
        };
    };
    this.removeAt = function (position){
        //look out-of-bounds values
        if(position >= 0 && position<length){
            let current = head,
            previous,
            index = 0;

            //removing first item;
            if(position === 0){
                head = current.next;
                if(length===1){
                    tail=null;
                }else{
                    head.prev = null;
                };
            }else if(position === length-1){
                current = tail;
                tail = current.prev;
                tail.next = null;
            }else{
                while(index++<position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            };
            length--;
            return current.element;
        }else{
            return null;
        };
    };
};