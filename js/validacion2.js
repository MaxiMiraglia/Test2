var intentos = 1;
function adivinanza() {
    if (intentos >= 4) {
        alert("Oh, se te acabaron los intentos. La respuesta era: estrella de neutrones")
        document.getElementById(rta).disabled = true;
    }
    var rtacorrecta = "estrella de neutrones";
    var rtainput = document.getElementById("rta").value;
    do {
        if (rtainput.trim().toLowerCase() === rtacorrecta) {
            alert("¡Respuesta correcta! Adivinaste en " + intentos + " intentos");
        }
        else {
            if (intentos === 2) {
                alert("Intentalo nuevamente. Intentos: " + intentos);
                alert("Pista 1: es una estrella");
                intentos++;
            }
            else if (intentos === 3) {
                alert("Intentalo nuevamente. Intentos: " + intentos);
                alert("Pista 2: está compuesta mayormente por neutrones...");
                intentos++;
            }
            else {
                alert("Intentalo nuevamente. Intentos: " + intentos)
                intentos++;
            }
        }

        break;
    }
    while (intentos <= 4);
}