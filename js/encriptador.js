
var regla = { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat" };
var predeterminado = document.querySelector("#default");
var textarea = document.querySelector("#texto");
var texto_res = document.querySelector("#texto_res");
var text_result = document.querySelector("#result");

function copiar() {
    const texto_res = document.querySelector("#texto_res");
    navigator.clipboard.writeText(texto_res.value);
    alert("Se ha copiado el  texto: " + texto_res.value);
}

function reset() {
    predeterminado.classList.remove("oculto");
    text_result.classList.add("oculto");
    document.getElementById("texto").value = "";   
}


function encriptar() {
    const texto = textarea.value;
    if (texto != "") {
        var out = ""
        for (var i = 0; i < texto.length; i++) {
            if (((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')) {
                alert("Solo letras minusculas y acentos ");
                return;
            }
            else if ((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == "") {
                reset();
                return;
            }
            if (texto[i] == 'a') {
                out += regla["a"];
            }
            else if (texto[i] == 'e') {
                out += regla["e"];
            }
            else if (texto[i] == 'i') {
                out += regla["i"];
            }
            else if (texto[i] == 'o') {
                out += regla["o"];
            }
            else if (texto[i] == 'u') {
                out += regla["u"];
            }
            else {
                out += texto[i];
            }
        }
        predeterminado.classList.add("oculto");
        text_result.classList.remove("oculto");
        texto_res.innerHTML = out;
    }
    return;
}

function desencriptar() {
    var texto = textarea.value;
    if (texto != "") {
        for (var i = 0; i < texto.length; i++) {
            if (((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')) {
                alert("Solo letras minusculas y acentos ");
                return;
            }
            else if ((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == "") {
                reset();
                return;
            }
        }
        predeterminado.classList.add("oculto");
        text_result.classList.remove("oculto");
        texto = texto.replace(new RegExp(regla["a"], "g"), "a");
        texto = texto.replace(new RegExp(regla["e"], "g"), "e");
        texto = texto.replace(new RegExp(regla["i"], "g"), "i");
        texto = texto.replace(new RegExp(regla["o"], "g"), "o");
        texto = texto.replace(new RegExp(regla["u"], "g"), "u");
        texto_res.innerHTML = texto;
    }
    return;
}

