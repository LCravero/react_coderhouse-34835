// Ejemplo de un caso donde no todos los motores y navegadores comprenden este
// método

const truncApplied = Math.trunc(1.23);
// console.log(truncApplied);

// TRANSPILER

let height;

// Antes de que corra el transpiler... (Caso del operador nullish coalescing)
height = height ?? 100;
// console.log(height);

// Después de que corra el transpiler...
height = height !== undefined && height !== null ? height : 100;

// Escribiendo el polyfill de Array.prototype.find
typeof Array.prototype.find !== "function";

if (typeof Array.prototype.find !== "function") {
  Array.prototype.find = function (fn) {
    if (this === null) throw new TypeError("this es nulo o no está definido");

    if (typeof fn !== "function")
      throw TypeError("El predicado debe ser de tipo función");

    for (let i = 0; i < this.length; i++) {
      const response = fn(this[i], i, this);

      if (response) return this[i];
    }
    return undefined;
  };
}

/**
 * NOTAS:
 */

// typeof Array.prototype.find !== 'function'

// null.find(el => el > 1);
