import logoImg from "./cocina2.png";
import logoImgDos from "./cocina3.png";
import logoImgTres from "./cocina5.png";

const Data = [
  {
    id: 1,
    name: "Torta con Frutilla",
    description: "Para el comienzo de primavera, no te lo pierdas, Click Leer Mas",
    img: logoImgDos
  },
  {
    id: 2,
    name: "Torta Merengue",
    description: "Para las personas que les encanta el merengue la mejor receta, Click Leer Mas",
    img: logoImg
  },
  {
    id: 3,
    name: "Arcoiris",
    description: "Imperdible torta para regalar a los mas pequeños de la familia, Click Leer Mas",
    img: logoImgTres
  }
];

const getFetch = new Promise((res, rej) => {
  const random = Math.random(); // variable aleatoria
  if (random > 0.5) {
    setTimeout(() => {
      res(Data);
    }, 2000);
  } else {
    rej("No hay datos");
  }
});

export default getFetch;