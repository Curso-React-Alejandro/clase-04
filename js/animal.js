export default class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    speak() {
        return this.nombre + ' makes a noise.';
    }
}