// Array con el abecedario y sus imágenes
const abecedario = [
  {
    letra: "A",
    imagen:
      "https://cdn.pixabay.com/photo/2016/11/29/13/10/animal-1869817_640.jpg",
    palabra: "Avión",
  },
  {
    letra: "B",
    imagen:
      "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_640.jpg",
    palabra: "Ballena",
  },
  {
    letra: "C",
    imagen:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg",
    palabra: "Casa",
  },
  {
    letra: "D",
    imagen:
      "https://cdn.pixabay.com/photo/2016/11/14/04/36/boy-1822559_640.jpg",
    palabra: "Dedo",
  },
  {
    letra: "E",
    imagen:
      "https://cdn.pixabay.com/photo/2016/11/18/13/43/elephant-1834856_640.jpg",
    palabra: "Elefante",
  },
  {
    letra: "F",
    imagen:
      "https://cdn.pixabay.com/photo/2015/10/12/14/50/fire-984013_640.jpg",
    palabra: "Fuego",
  },
  {
    letra: "G",
    imagen:
      "https://cdn.pixabay.com/photo/2017/06/21/16/14/giraffe-2427667_640.jpg",
    palabra: "Gato",
  },
];

function crearTarjetasAbecedario() {
  const body = document.body;

  const contenedor = document.createElement("div");
  contenedor.className = "contenedor-tarjetas";
  body.appendChild(contenedor);

  abecedario.forEach((item) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "card";

    const img = document.createElement("img");
    img.src = item.imagen;
    img.alt = item.palabra;

    const contenedorBotonPalabra = document.createElement("div");
    contenedorBotonPalabra.className = "contenedor-boton-palabra";
    
    const palabra = document.createElement("h3");
    palabra.textContent = item.palabra; 
    
    const boton = document.createElement("button");
    boton.className = "btn";
    boton.textContent = `Letra ${item.letra}`;

    boton.addEventListener("click", () => {
      alert(`Seleccionaste la letra ${item.letra} - ${item.palabra}`);
    });

    contenedorBotonPalabra.appendChild(palabra);  
    contenedorBotonPalabra.appendChild(boton);    
    
    tarjeta.appendChild(img);                     
    tarjeta.appendChild(contenedorBotonPalabra); 
    contenedor.appendChild(tarjeta);
  });
}

// Ejecutar cuando se cargue la página
document.addEventListener("DOMContentLoaded", crearTarjetasAbecedario);