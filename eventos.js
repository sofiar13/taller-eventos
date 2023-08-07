const saludo = document.getElementById("boton");
saludo.addEventListener("click", function() {
    event.stopPropagation()
    alert('Hola! Soy el div');
})