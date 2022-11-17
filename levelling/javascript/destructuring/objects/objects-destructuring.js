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

// DESTRUCTURACION DE OBJECTOS

/**
 * La sintaxis básica del destructuring de objetos es la siguiente:
 */
const profesor = { name: "Lucas", surname: "Cravero", age: 31 };
let { name, surname, age } = profesor;

console.log(name); // Lucas
console.log(surname); // Cravero
console.log(age); // 31

/**
 * A TENER EN CUENTA!!
 * En la destructuración de objetos, el orden en el que desestructuremos
 * los mismos, no causa errores.
 * Ahora bien, el limitante a la hora de desestructurar un objeto es que
 * debemos llamar a las variables de la misma manera que las keys del objeto
 * del cual queremos copiar ese valor en una variable.
 * Veamos un ejemplo:
 */

// ❌ No se puede hacer
let { profesorName, surname, age } = profesor;

/**
 * Pero, ¿Y si quisiera renombrar esas variables para darle un nombre
 * más descriptivo para la lógica de mi aplicación?
 * Bueno, podemos hacer lo siguiente...
 */

let {
  name: nombreDelProfe,
  surname: apellidoDelProfe,
  age: edadDelProfe,
} = profesor;

console.log(nombreDelProfe); // Lucas
console.log(apellidoDelProfe); // Cravero
console.log(edadDelProfe); // 31

/**
 * Colocando los dos puntos seguidos del verdadero nombre de la key del objeto
 * del cual estamos destructurando, podemos renombrar esa variable y darle el
 * nombre que deseemos.
 */

// DEFAULT VALUES

/**
 * Los valores por defecto funcionan de la misma manera que al desestructurar
 * un array. Debemos colocarle el valor que deseamos que tenga como default
 * en caso de que no se pase, de la siguiente manera...
 */

let { name, surname, age, course = "React JS" } = profesor;

/**
 * De esta forma, si el objeto que vamos a desestructurar no tiene la propiedad
 * 'course', le podemos brindar un valor por default a nuestra variable
 * resultante
 */

// REST OPERATOR

/**
 * Al igual que con los arrays, el rest operator agrupa el resto de valores
 * que no queremos asignar a variables pero dentro de un objeto.
 * Veamos...
 */

let { name: profesorName, ...restOfProfesorData } = profesor;

console.log(restOfProfesorData); // { .surname: 'Cravero', age: 31 }

// DESESTRUCTURACION ANIDADA

/**
 * Esto es algo súper importante como cotidiano. Nos va a pasar a menudo
 * que la respuesta de una API pueda ser un objeto con mucha data dentro,
 * de la cual no queramos ni tengamos que usar todo, y solamente nos interesen
 * algunos datos.
 * En estos casos, podemos aplicar una desestructuración anidada.
 * ¿Cómo? Bueno, veamos...
 */

const profesor2 = {
  name: "Lucas",
  surname: "Cravero",
  age: 31,
  address: {
    locale: "Rafael Castillo",
    state: "La Matanza, Buenos Aires",
    addressNumber: 2465,
  },
  network: {
    linkedin: "https://www.linkedin.com/in/ljcravero/",
  },
};

/**
 * En este caso queremos solamente quedarnos con: nombre, partido en donde
 * vive, y el link a su perfil de LinkedIn..
 * Entonces, usando desestructuración anidada, podemos hacerlo así...
 */

const {
  name,
  address: { state },
  network: { linkedin },
} = profesor2;

/**
 * Fijense que luego de llamar a la key que contiene el dato que me interesa,
 * debo:
 *  - Colocar dos puntos
 *  - Abrir llaves (porque se trata de un objeto en este caso. Si fuera que
 *      contiene datos dentro de un array, colocaría corchetes, como una
 *      desestructuración de un array)
 *  - Llamar a la key de la cual quiero quedarme con el valor
 *
 * A todo esto, podemos sumarle que podemos renombrar esas variables como
 * antes vimos.
 * Todo es cuestión de practicar!
 */
