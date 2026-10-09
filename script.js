

const boton = document.querySelector("#boton-contacto");
const mensaje = document.querySelector("#mensaje");

boton.addEventListener("click", function(){
    mensaje.textContent =
    "¡Gracias por contactarnos! Pronto te atenderemos."
});

const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const respuesta = document.querySelector("#respuesta");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    const nombreIngresado = nombre.value.trim();

    if(nombreIngresado === ""){
        respuesta.textContent = "Ingresa tu nombre.";
        return;
    }

    respuesta.textContent = 
    `¡Hola, ${nombreIngresado}! Gracias por contactarnos.`;
});