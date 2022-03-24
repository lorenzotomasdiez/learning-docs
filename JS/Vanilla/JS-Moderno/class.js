class Persona {
    nombre = ""
    codigo = ""
    frase = ""
    comidaFavorita = ""

    static _conteo = 0

    constructor(nombre = "Sin name", codigo = "sin code", frase = "sin frase"){
        this.nombre = nombre
        this.codigo = codigo
        this.frase = frase
    }
    quienSoy(){
        console.log(`soy ${this.nombre}`)
    }
    
    setComidaFavorita(comida){
        this.comidaFavorita = comida
    }
    getComidaFavorita(){
        console.log(this.comida)
    }
}

const tomas = new Persona();
tomas.quienSoy()

tomas.comidaFavorita = "asdasda"  //
