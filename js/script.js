/*ventana modal*/

document.addEventListener("DOMContentLoaded", function() {
    var modalBienvenida = document.getElementById("modalBienvenida");
    var modal = new bootstrap.Modal(modalBienvenida);
    modal.show();
});


document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".form-1");
    var submitButton = form.querySelector(".send-button");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        // Muestra el mensaje de alerta
        alert("¡Gracias por escribirnos ♥ Te vamos a estar contactando muy pronto!");

        // Restablece los valores del formulario
        var inputs = form.querySelectorAll("input");
        inputs.forEach(function(input) {
            input.value = "";
        });
    });
});

