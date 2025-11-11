// Array con el abecedario y sus imágenes
const abecedario = [
    { letra: "A", imagen: "https://cdn-icons-png.flaticon.com/512/5040/5040698.png ", palabra: "Avión" },
    { letra: "B", imagen: "https://cdn-icons-png.flaticon.com/512/5226/5226024.png ", palabra: "Ballena" },
    { letra: "C", imagen: "https://cdn-icons-png.flaticon.com/512/4552/4552946.png ", palabra: "Casa" },
    { letra: "D", imagen: "https://cdn-icons-png.flaticon.com/512/5226/5226046.png ", palabra: "Dedo" },
    { letra: "E", imagen: "https://cdn-icons-png.flaticon.com/512/5310/5310626.png ", palabra: "Elefante" },
    { letra: "F", imagen: "https://cdn-icons-png.flaticon.com/512/5226/5226066.png ", palabra: "Fuego" },
    { letra: "G", imagen: "https://cdn-icons-png.flaticon.com/512/3479/3479417.png ", palabra: "Gato" },
    { letra: "H", imagen: "https://cdn-icons-png.flaticon.com/512/4019/4019787.png  ", palabra: "huevo" },
    { letra: "I", imagen: "https://cdn-icons-png.flaticon.com/512/5226/5226092.png  ", palabra: "Iglesia" },
    { letra: "J", imagen: "https://cdn-icons-png.flaticon.com/512/4552/4552981.png ", palabra: "Jirafa" },
    { letra: "K", imagen: "https://cdn-icons-png.flaticon.com/512/4552/4552989.png", palabra: "Karate" },
    { letra: "L", imagen: "https://cdn-icons-png.flaticon.com/512/4552/4552996.png", palabra: "Lino" },
    { letra: "M", imagen: "https://cdn-icons-png.flaticon.com/512/4552/4552998.png", palabra: "Mani" },
    { letra: "N", imagen: "https://cdn-icons-png.flaticon.com/512/4553/4553006.png", palabra: "Niño" },
    { letra: "Ñ", imagen: "https://cdn-icons-png.flaticon.com/512/5226/5226123.png", palabra: "Ñoño" },
    { letra: "O", imagen: "https://cdn-icons-png.flaticon.com/512/3479/3479461.png", palabra: "Ocho" },
    { letra: "P", imagen: "https://cdn-icons-png.flaticon.com/512/4553/4553011.png", palabra: "Pera" },
    { letra: "Q", imagen: "https://cdn-icons-png.flaticon.com/512/4553/4553013.png", palabra: "Queso" },
    { letra: "R", imagen: "https://cdn-icons-png.flaticon.com/512/4553/4553016.png", palabra: "Ratón" },
    { letra: "S", imagen: "https://cdn-icons-png.flaticon.com/512/4553/4553018.png", palabra: "Sapo" },
    { letra: "T", imagen: "https://cdn-icons-png.flaticon.com/512/4553/4553019.png", palabra: "Tetero" },
    { letra: "U", imagen: "https://cdn-icons-png.flaticon.com/512/4553/4553022.png", palabra: "Uva" },
    { letra: "V", imagen: "https://cdn-icons-png.flaticon.com/512/4553/4553024.png", palabra: "Venado" },
    { letra: "W", imagen: "https://cdn-icons-png.flaticon.com/512/4553/4553026.png", palabra: "water" },
    { letra: "X", imagen: "https://cdn-icons-png.flaticon.com/512/8532/8532367.png", palabra: "x" },
    { letra: "Y", imagen: "https://cdn-icons-png.flaticon.com/512/4553/4553030.png", palabra: "Yuca" },
    { letra: "z", imagen: "https://cdn-icons-png.flaticon.com/512/4553/4553032.png", palabra: "Zapato" },
];

function crearTarjetasAbecedario() {
  const body = document.body;

  const contenedor = document.createElement("div");
  contenedor.className = "contenedor-tarjetas";
  body.appendChild(contenedor);

  abecedario.forEach((item, index) => {
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

    palabra.classList.add("texto-verde");

    if (index < 3) {
      palabra.classList.add("texto-azul");
    }

    if (item.letra === "E") {
      palabra.classList.add("texto-rojo");
    }

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

document.addEventListener("DOMContentLoaded", crearTarjetasAbecedario);
