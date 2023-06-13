document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".form-1");
    var submitButton = form.querySelector(".send-button");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        // Muestra el mensaje de alerta
        alert("¡El formulario ha sido enviado!");

        // Restablece los valores del formulario
        var inputs = form.querySelectorAll("input");
        inputs.forEach(function(input) {
            input.value = "";
        });
    });
});