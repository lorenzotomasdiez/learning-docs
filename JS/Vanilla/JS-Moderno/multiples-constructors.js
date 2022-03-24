//SOBRECARGA DE CONSTRUCTORES
//COMO JS NO PERMITE MULTIPLES CONSTRUCTORES PODEMOS UTILIZAR METODOS STATICOS PARA LOGRARLO

class Persona {

    static constructorPorObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais)
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
}

const persona1 = Persona.constructorPorObjeto({
    nombre: 'Tomas',
    apellido: 'Diez',
    pais: 'Argentina'
})