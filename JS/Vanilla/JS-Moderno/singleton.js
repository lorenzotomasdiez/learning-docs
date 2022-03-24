//SIGLETON TENER UNA UNICA INSTANCIA Y QUE NO IMPORTA SI DIGO NEW MILES DE VECES SIEMPRE ME DEVUELVA LA MISMA INSTANCIA.
class Singleton {
    static instancia
    nombre = ''
    
    constructor(nombre = ''){

        if(!!Singleton.instancia){
            return Singleton.instancia
        }
        Singleton.instancia = this
        this.nombre = nombre
    }
}