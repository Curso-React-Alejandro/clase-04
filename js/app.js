// importo la clase Persona para poder usarla
import Persona from './persona.js';
import Perro from './perro.js';
import Gato from './gato.js';
import Animal from './animal.js';


let myPerson = new Persona('Juan', 'Perez', 18, 1.72);

console.log(myPerson.saludar());

let myPerro = new Perro('Firulais', 'Pastor Aleman', 3);

console.log(myPerro.ladrar());
console.log(myPerro.speak());