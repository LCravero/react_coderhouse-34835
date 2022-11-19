/**
 * Algunos ejemplos de sintactic sugar en Javascript
 */

// for..of loop

/**
 * El for...of loop es un sintactic sugar del ciclo for.
 * Veamos un ejemplo usando un ciclo for tradicional y la ventaja de usar
 * esta nueva sintaxis añadida en ES6 para trabajar con objetos iterables.
 */

const librariesAndFrameworks = ["React", "Vue", "Angular", "NextJs"];

/**
 * Si quisieramos ver por consola el nombre de las librerías y frameworks que
 * contiene la lista, de forma tradicional, deberíamos iterar esta lista de
 * esta manera.
 */

for (let item = 0; item < librariesAndFrameworks.length; item++) {
  const libraryOrFramework = librariesAndFrameworks[item];
  console.log(libraryOrFramework);

  /**
   * console.log(librariesAndFrameworks[item]);
   */
}

/**
 * El mismo caso usando el sintactic sugar para un ciclo for, se vería así...
 */

for (const itemList of librariesAndFrameworks) {
  console.log(itemList);
}

/**
 * Otro caso donde podemos ver fácilmente el agregado de un sintactic sugar a
 * JS, es con el destructuring!
 */
