/* Obtener el numero mayor de un arreglo pero iterando solo una vez */
const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el);
const b = [50, -1500, 1000, 0, 1, 54]