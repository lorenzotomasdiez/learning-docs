/* Realizando solo una iteracion eliminar los elementos que sean undefined, null,0 y false  */

const clean = (arr) => arr.reduce((acc, el) => {
    if(el){
        acc.push(el)
    }
    return acc
}, []);