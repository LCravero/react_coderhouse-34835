/**
 * NOTA: Para ejecutar cada ejemplo de este archivo, recomiendo ir comentando
 * el código del ejemplo anterior y de los posteriores al actual, y correr por
 * terminal el comando:
 * node <nombre_del_archivo>.js
 *
 */

/**
 * Las dos estructuras de datos más usadas en JS son los objetos y los arrays.
 * Los objetos nos permiten crear entidades que almacenan datos mediante pares
 * clave-valor.
 * Los arrays nos permiten reunir datos dentro de una lista ordenada.
 *
 * Destructuring assigment es una sintaxis especial que nos permite desmembrar
 * arrays u objetos en variables de una manera más conveniente
 */

// DESTRUCTURACION DE UN ARRAY

let nameAndSurname = ["Lucas", "Cravero"];

// Sin usar destructuring assigment...
console.log(nameAndSurname[0]); // para acceder al nombre..
console.log(nameAndSurname[1]); // para acceder al apellido..

// Usando destructuring...
let [name, surname] = nameAndSurname;

console.log(name); // Lucas
console.log(surname); // Cravero

/**
 * El destructuring en un array trabaja accediendo a cada elemento, por su
 * posición dentro de la lista, de manera ordenada, y COPIANDO el valor de
 * cada posición a la que se accede, en una variable nombrada.
 * Es decir, en el ejemplo de arriba, la variable name es resultado de que
 * haya sucedido lo siguiente:
 *
 * let name = nameAndSurname[0] => let [name] = nameAndSurname
 */

/**
 * ¿Qué sucede en los casos donde hay algún valor que no me interesa obtener?
 * Bien, podemos ignorarlo! Veamos el caso de tener dentro de un array, los
 * datos personales del profesor del curso de React..
 */

let profesorPersonalData = [
  "Lucas",
  "Cravero",
  "ljcravero@gmail.com",
  "Frontend Engineer",
];

/**
 * De esos datos de arriba, solamente queremos quedarnos con: nombre, apellido
 * y rol actual dentro de su trabajo.
 * Entonces, usando destructuring, podemos hacer lo siguiente:
 */

const [name, surname, , rol] = profesorPersonalData;
console.log(name); // Lucas
console.log(surname); // Cravero
console.log(rol); // Frontend Engineer

/**
 * Podemos hacer uso del destructuring para alternar el valor entre dos
 * variables..
 */

// Sin destructuring tendríamos que hacer algo de esta manera...

let name = "Lucas";
let surname = "Cravero";
let tempApellido;

tempSurname = surname;
surname = name;
name = tempSurname;

// Usando destructuring...
let [surname, name] = [name, surname];

// REST OPERATOR

/**
 * El operador rest es una aplicación de los conocidos puntos suspensivos(...),
 * dependiendo su aplicación, podemos hablar de aplicar spread operator, o rest
 * operator.
 */

let elMejorJugadorDelMundo = ["Leonel", "Messi", "FC Barcelona", "PSG"];

/**
 * Quizás nos insteresa solamente destructurar el nombre y apellido del mejor
 * jugador del mundo, y mantener en una lista, los equipos por los cuáles pasó
 * Entonces, de qué manera podemos hacerlo?
 */

const [nombre, apellido, ...equipos] = elMejorJugadorDelMundo;

console.log(nombre);
console.log(apellido);
console.log(equipos); // ['FC Barcelona', 'PSG']

// DEFAULT VALUES

/**
 * En caso de que intentemos destructurar un array que contenga menos valores
 * de los que nosotros intentamos destructurar, las variables resultantes
 * quedarán con valor undefined
 */

const EMPTY_LIST = [];
const [name, surname] = EMPTY_LIST;

console.log(name); // undefined
console.log(surname); // undefined

/**
 * Pero en estos casos nosotros podemos manejar este tipo de "errores"
 * y disponibilizar un valor default para las variables, en caso de enfrentarnos
 * a casos similares... Veamos cómo.
 */

const [name = "Lucas", surname = "Cravero"] = EMPTY_LIST;

console.log(name); // Lucas
console.log(surname); // Cravero
