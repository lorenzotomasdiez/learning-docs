//=============================================================================================================================
/*
    BASICS DEFINITIONS
    ==================
*/



//=============================================================================================================================
//TIPOS DE DATOS
//==================
//BOOLEAN = TRUE/FALSE
//NULL = SIN VALOR ABSOLUTO
//UNDEFINED = UNA VARIABLE DECLARADA QUE AUN NO SE LE ASIGNA VALOR
//NUMBER = INTEGER, FLOATS, ETC
//STRING = CADENA DE CARACTERES
//SYMBOL = TIPO DE DATO UNICO QUE NO ES IGUAL A NINGUN OTRO VALOR

// EN JAVASCRIPT SI NO ES UN PRIMITIVO ES UN "OBJETO"
//=============================================================================================================================
let symbol = Symbol('a') // 
let symbol2 = Symbol('a') //
symbol === symbol2 // false


//OBJETO LITERAL
let object = {

}
// para bloquear el cambio de de un objeto debo ejecutar un freeze del objeto.
Object.freeze(object)
//=============================================================================================================================



//=============================================================================================================================
// ================ VAR =====================
/*
    VAR = DEFINICION DE VARIABLE QUE SE GUARDA DENTRO DEL OBJETO GLOBAL LLAMADO WINDOW
*/
var miNombre = 'TCODE'
/* 
    (PERMITE PODER REEMPLAZAR PROPIEDADES Y OBJETOS PROPIOS DEL OBJETO WINDOW) === PROBLEMA
    CASO QUE LET O CONST NO CAUSAN ESTE PROBLEMA  
    SI DECLARAMOS LAS SIGUIENTES VARIABLES, NUESTRA PANTALLA DEL NAVEGADOR CAMBIARIA SUS WIDTH Y HEIGHT AL VALOR QUE DECLAREMOS. 
*/
var outerWidth = 150000;
var outerHeight = 150000;
//=============================================================================================================================



//=============================================================================================================================
// ============ PROMPT - CONFIRM - ALERT =================
// AMBOS 3 SON METODOS BLOQUEANTES A NIVEL APLICACION.
/* 
    ALERT --> METODO TIPO VOID, QUE MUESTRA MENSAJE EN PANTALLA
*/
alert('Alerta')


/* 
    PROMP DEVUELVE UN STRING, TIENE 2 PARAMETROS STRING, EL MENSAJE QUE MUESTRA Y UN DEFAULT MESSAGE DE ENTRADA === SIMIL INPUT
    y si lo declaramos como una variable asignara el input a la variable.
*/
let string = prompt('Inserte su nombre', 'default message')

/* 
    CONFIRM ---> prenseta un mensaje en pantalla con una respuesta booleana
    y si lo declaramos como una variable asignara el booleano respondido a la variable.
*/
let confirm = prompt('Inserte su nombre', 'default message')
//=============================================================================================================================




//=============================================================================================================================
// ============ FUNCIONES =================
// AMBOS 3 SON METODOS BLOQUEANTES A NIVEL APLICACION.
/* 
    NORMALES
*/
function hola(){
    console.log('esta es mi funcion normal')
}
/* 
    ANONIMAS
*/
const hola2 = function(){
    console.log('esta es mi funcion anonima')
}
/* 
    LAMBDA
*/
const hola3 = () => {
    console.log('esta es mi funcion lambda')
}
/* 
    TIPS DE FUNCIONES:
        1-RETORNO SIN CUERPO
        2-RETORNO DE MUCHOS ARGUMENTOS
        3-ASIGNACION DINAMICA DE RETORNO
        4-REASIGNACION DE NOMBRE DE UN RETORNO
        5-DESESTRUTURACION
*/

//1-RETORNO SIN CUERPO
const crearPerson = ( name, lastname) => ({name, lastname})

//2-RETORNO DE MUCHOS ARGUMENTOS
const printArgs = (...args) => {
    return args
}
printArgs(10,true,false,['s'],'s')// return [10,true,false,['s'],'s']

//3-ASIGNACION DINAMICA DE RETORNO
const [casado, vivo, nombre, saludo] = printArgs('si', 'no', 'name', 'hola')

//4-REASIGNACION DE NOMBRE DE UN RETORNO
const {lastname: Apellido} = crearPerson('tomas', 'diez')
console.log(Apellido)

//5-DESESTRUTURACION
const imprimeProperties = ({name,lastname}) => {
    console.log(name, lastname)
}
imprimeProperties({
    name, lastname
})
//=============================================================================================================================