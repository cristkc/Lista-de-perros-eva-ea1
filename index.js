const perroActualElement = document.getElementById("perroActual");
const razaActualElement = document.getElementById("razaActual");
const spinner = document.getElementById("spinner");
const contadorLikesElement = document.getElementById("contadorLikes");
const contadorDislikesElement = document.getElementById("contadorDislikes");

const perrosLikeContainer = document.getElementById("perrosLikeContainer");
const perrosDislikeContainer = document.getElementById(
  "perrosDislikeContainer"
);

perrosLikeContainer.classList.toggle("escondido");
perrosDislikeContainer.classList.toggle("escondido");

let perroActual;
let cantidadLikes = 0;
let cantidadDislikes = 0;

document.getElementById("like").addEventListener("click", () => {
  rankearPerro("+");
});

document.getElementById("dislike").addEventListener("click", () => {
  rankearPerro("-");
});

document.getElementById("saltear").addEventListener("click", nuevoPerro);

perroActualElement.addEventListener("load", () => {
  spinner.classList.toggle("escondido", true);
  perroActualElement.classList.toggle("escondido", false);
});
perroActualElement.addEventListener("error", () => {
  spinner.classList.toggle("escondido", true);
  perroActualElement.classList.toggle("escondido", true);
  razaActualElement.textContent =
    "No se pudo cargar la imagen. Intenta nuevamente.";
});

function rankearPerro(ranking) {
  const nuevaImagen = document.createElement("img");
  nuevaImagen.src = perroActual;
  nuevaImagen.alt = "Perro calificado";

  if (ranking === "+") {
    cantidadLikes++;
    contadorLikesElement.textContent = cantidadLikes;

    perrosLikeContainer.appendChild(nuevaImagen);
    perrosLikeContainer.classList.toggle("escondido", false);
  } else {
    cantidadDislikes++;
    contadorDislikesElement.textContent = cantidadDislikes;

    perrosDislikeContainer.appendChild(nuevaImagen);
    perrosDislikeContainer.classList.toggle("escondido", false);
  }

  nuevoPerro();
}

async function nuevoPerro() {
  perroActualElement.classList.toggle("escondido", true);
  spinner.classList.toggle("escondido", false);

  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const jsonRes = await res.json();

  if (jsonRes.status === "success") {
    perroActual = jsonRes.message;
    perroActualElement.src = perroActual;

    const partesUrl = perroActual.split("/");
    const razaUrl = partesUrl[4];

    const razaFormateada = razaUrl
      .split("-")
      .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1))
      .join(" ");

    razaActualElement.textContent = `Raza: ${razaFormateada}`;
  } else {
    razaActualElement.textContent = "Raza: no disponible";
    nuevoPerro();
  }
}

nuevoPerro();