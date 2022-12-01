const WORLD_CUP_GROUPS = [
  {
    id: "A",
    name: "Group A",
    countries: ["Ecuador", "Qatar", "Países Bajos", "Senegal"],
  },
  {
    id: "B",
    name: "Group B",
    countries: ["Inglaterra", "Irán", "Estados Unidos", "Gales"],
  },
  {
    id: "C",
    name: "Group C",
    countries: ["Argentina", "Arabia Saudita", "México", "Polonia"],
  },
  {
    id: "D",
    name: "Group D",
    countries: ["Dinamarca", "Túnez", "Francia", "Australia"],
  },
  {
    id: "E",
    name: "Group E",
    countries: ["Alemania", "Japón", "España", "Costa Rica"],
  },
  {
    id: "F",
    name: "Group F",
    countries: ["Marruecos", "Croacia", "Bélgica", "Canadá"],
  },
  {
    id: "G",
    name: "Group G",
    countries: ["Suiza", "Camerún", "Brasil", "Serbia"],
  },
  {
    id: "H",
    name: "Group H",
    countries: ["Uruguay", "Corea del Sur", "Portugal", "Ghana"],
  },
];

const SERVICE_TIMEOUT = 3500;

export function getGroups() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(WORLD_CUP_GROUPS);
    }, SERVICE_TIMEOUT);
  });
}
