// Con numeros
const evenNumbers = [2, 4, 6, 8];

const result = [...evenNumbers, 10];
// result

evenNumbers.push(12);
console.log(evenNumbers);
console.log(result);

// Con String
const profesorName = "Lucas Cravero";

const spreadName = [...profesorName];
console.log(spreadName);

// Con tipos de datos no primitivos

const profesor = {
  name: "Lucas",
  surname: "Cravero",
  course: {
    name: "ReactJS",
    class: 7,
  },
};

let fullData = { ...profesor, age: 31 };
console.log(fullData);

fullData = { ...fullData, surname: "Cravero" };
console.log(fullData);

profesor.course.name = "NextJS";
console.log(fullData);
