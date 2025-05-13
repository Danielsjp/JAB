window.onload = inicio;

function inicio() {

document.querySelector("body").insertAdjacentHTML("beforeend", `
<button class="boton" class="boton">Botón 1</button>
<button class="boton" class="boton">Botón 2</button>
<button class="boton" class="boton">Botón 3</button>
<div id="imagen"><img src="img/logo1.svg"></div>`);

document.querySelectorAll(".boton")[0].onclick=accion1;
}

function accion1(){

  document.querySelector("img").style.backgroundColor="#1162ac";
}
