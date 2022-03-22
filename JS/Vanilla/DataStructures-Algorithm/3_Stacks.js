function Stack() { //CREATING A STACK CLASS
    let items = [];
    this.push = function(e){
            items.push(e);
        }
    this.pop = function(){
            return items.pop();
        }
    this.peek = function(){
            return items[items.length-1];
        }
    this.isEmpty = function(){
            return items.length == 0;
        }
    this.size = function() {
            return items.length;    
        }
    this.clear = function() {
            items=[];
        }
    this.print = function() {
            console.log(items.toString());
        }
}

let stack = new Stack();

stack.print();
stack.push(1);

// ES6
// NOW THE VARIABLE ITEMS ARE PUBLIC. CONSTRUCTOR IS PROTOTYPE BASED, DOES NOT ALLOW US TO DECLARE PRIVATE PROPERTIES OR METHODS.
/* class Stack { 
    constructor() { this.items = [];}
    push(e){
        this.items.push(e);
    };
}; */

/*THere is one data type we can use to ensure that the property will be private in class
it is called WeakMap. A weakmap can store a key/value pair, where the key is an object and the value can be any data type. */

//LET SEE HOW IT LOOKS LIKE.

const item = new WeakMap();
class Stack {
    constructor(){
        item.set(this, []);
    }
    push(e){
        let s = item.get(this);
        s.push(e);
    }
    pop(){
        let s = item.get(this);
        let r = s.pop();
        return r;
    };
} 

/* We know that the items property is truly private in the stack class
    But there is one more step we need to do. Right now, the items variable
    is still declared outside the Stack class, so anyone can change it.
    We will wrap the Stack class with a closure ( an outer function ) so the WeakMap has scope only inside the function. */

let Stack = (function () {
    const items = new WeakMap();
    class Stack {
        constructor () {
            items.set(this, []);
        }
        push(e){
            let s = items.get(this);
            s.push(e);
        }
        pop(){
            let s = items.get(this);
            let r = s.pop();
            return r;
        }
        isEmpty(){
            let s = items.get(this);
            return s.length == 0;
        }
    }
    return Stack;
})();


//DECIMAL TO BINARY ALGORITHM

const divideBy2 = (decNumber) => {
    var remStack = new Stack(), rem, binaryString = '';
    while (decNumber > 0){
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber/2);
    }
    while (!remStack.isEmpty()){
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}



//THE BASE CONVERTER ALGORITHM

const baseConverter = (decNumber, base) => {
    var remStack = new Stack(), rem, baseString = '', digits = '0123456789ABCDEF';
    while (decNumber>0){
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }
    while(!remStack.isEmpty()){
        baseString+=digits[remStack.pop()];
    }
    return baseString;
}