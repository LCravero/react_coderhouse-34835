function showMenu(title, width, height, items) {
  // TODO: Implement logic here...
}

function showMenu(title = "My Menu", width = 800, height = 350, items = []) {
  // TODO: Implement logic here...
}

/**
 * Código implementado
 */
showMenu(400, 650, "Equipos", ["Manchester City", "Tottemham"]);
/**
 * Código implementado
 */

// ✅ La manera correcta de pasar varios argumentos a una función sería así...
showMenu({ title: "My Menu 3", width: 800, height: 350, items: [] });

/**
 * O quizás, si queremos modificar algún valor que pasamos por argumento sin
 * importar en qué parte del código luego llamemos a la función que toma esos argumentos
 */

const menuOptions = { title: "My Menu 3", width: 800, height: 350, items: [] };

showMenu(menuOptions);

// Dentro de la definición de nuestra función
function showMenu({
  title = "My Menu",
  width: w = 800,
  height: h = 350,
  items = [],
}) {
  // TODO: Implement logic here...
}
