const miTitulo = document.querySelector("h1");
miTitulo.textContent = "Mozilla is cool!,Danica";

let helado = "chocolate";
if (helado === "chocolate") {
  alert("¡Sí, amo el helado de chocolate!");
} else {
  alert("Awwww, pero mi favorito es el de chocolate...");
}

document.querySelector("html").onclick = function () {
  alert("¡Ouch! ¡Deja de pincharme!");
};