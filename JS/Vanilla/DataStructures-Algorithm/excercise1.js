//multiplicar 2 numeros sin signo de multiplicacion
const multiply = (a, b) => {
    let result = 0;
    const positivo = Math.abs(b) == b;
    for(i=0; i<Math.abs(b); i++){
        result=positivo ? result + a : result - a;
    }
    return result;
}

const a = multiply(50, -50);
console.log(a);


//obtener numero mayor en un arreglo iterando el arreglo una sola vez

const getBiggest = (arr) => arr.reduce((acc, e) => acc>e ? acc : e);

const b = getBiggest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 5000]);

console.log(b);


//iterando un arreglo solo una vez, escribir una funcion que elimine los undefined, false, los 0 y los null

const clean = (arr) => arr.reduce((acc, e) => {
    if(e){
        acc.push(e)
    }
    return acc
}, []);

const c = clean([1, undefined, null, 0, 2, 3]);
console.log(c)


//escribir una funcuion que aplane los arreglos en un nivel

const arr =[[1, 2], [[3, 4]],[1,[]]];

const flatter = arr => arr.reduce((acc, e) => acc.concat(e), []);
const d = flatter(arr);
console.log(d)

//escribir una funcion que cuente la cantidad de veces que se repite una palabra
const repeated = str => {
    const lowered = str.toLowerCase();
    const splitted = lowered.split(' ');
    const reduced = splitted.reduce((acc, e) => {
        if(acc[e]){
            acc[e]++
        }else{
            acc[e]=1
        }
        return acc
    }, {})
    return Object.entries(reduced).reduce((acc, e) => acc[1] > e[1]? acc : e)
}

const e = repeated('this is a repeated word test this a a e e e e');
console.log(e)

//verificar si un string es palindromo\
const isPalindrome = (str) => {
    str=str.replace(/\s/g,'');
    const lowered = str.toLowerCase();
    const splitted = lowered.split('');
    const reversed = splitted.reverse();
    const joined = reversed.join('')
    return lowered == joined
}

const f = isPalindrome('Do geese see god');
console.log(f)