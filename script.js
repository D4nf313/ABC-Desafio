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
];

function crearTarjetasAbecedario() {
    const body = document.body;
    const tarjetaOriginal = document.querySelector('.card');
    
    
    const contenedor = document.createElement('div');
    contenedor.className = 'contenedor-tarjetas';
    body.appendChild(contenedor);
    
    abecedario.forEach(item => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'card';
        
        const img = document.createElement('img');
        img.src = item.imagen;
        img.alt = item.palabra;
        
        const boton = document.createElement('button');
        boton.className = 'btn';
        boton.textContent = `Letra ${item.letra}`;
        
        boton.addEventListener('click', () => {
            alert(`Seleccionaste la letra ${item.letra} - ${item.palabra}`);
        });
        
        tarjeta.appendChild(img);
        tarjeta.appendChild(boton);
        
        contenedor.appendChild(tarjeta);
    });
}

// Ejecutar cuando se cargue la página
document.addEventListener('DOMContentLoaded', crearTarjetasAbecedario);