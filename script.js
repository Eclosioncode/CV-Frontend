
let oculto = document.getElementById("oculto");
let botonoculto = document.getElementById("botonoculto");

botonoculto.addEventListener('click', cambiaTexto);

function cambiaTexto() {
    oculto.classList.toggle("escondidooff");
    if (oculto.classList.contains("escondidooff")) {
        botonoculto.innerHTML = "Menos";
    }
    else
    botonoculto.innerHTML = "Lee más";

}

function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    link.className = "seleccionado";

    // oculto menu en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}


// muestro menu en navegacion responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className == "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

