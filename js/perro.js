// 2do import Animal
import Animal from './animal.js';

// 1ro extends Animal
export default class Perro extends Animal{
    constructor(nombre, raza, edad) {
        // 3ro super de Animal
        super(nombre, edad);
        this.raza = raza;
    
    }
    ladrar() {
        return `${this.nombre} esta ladrando`;
    }
}