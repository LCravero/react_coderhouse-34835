const coderhouseCoursesByProfessor = new Promise((resolve, reject) => {
  const response = true;
  if (response) {
    setTimeout(
      () =>
        resolve({
          name: "Lucas",
          role: "professor",
          courses: ["React", "NextJs"],
        }),
      3000
    );
  } else {
    reject("ERROR 500");
  }
});

function responseAfterThreeSeconds() {
  coderhouseCoursesByProfessor
    .then((profesor) => {
      console.log(`El llamado a la API resultó OK`);
      console.log(profesor);
      return profesor;
    })
    .then(({ courses }) => {
      console.log("Los cursos que dicta, son:", courses);
    })
    .catch((error) =>
      console.error(`El llamado al servicio dio error: ${error}`)
    )
    .finally(() => {
      console.log(`Esto fue todo el ejemplo del llamado a una API`);
    });
}

responseAfterThreeSeconds();
