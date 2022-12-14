// La clase se exporta en una especie de paquete default
export default class Persona {
    constructor(nombre, apellido, edad, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.altura = altura;
    }
    saludar() {
        return `Hola, me llamo ${this.nombre} ${this.apellido}`;
    }
    soyAlto() {
        return this.altura > 1.8;
    }
}