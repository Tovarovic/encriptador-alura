const textArea = document.querySelector("#input");
const mensaje = document.querySelector("#output");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(strEncriptada) {

    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"], ["0", "xx"], ["1", "unelim"], ["2", "duebla"], ["3", "triam"], ["4", "qubo"], ["5", "petna"], ["6", "tnotb"], ["7", "topdross"], ["8", "eigta"], ["9", "knine"]];

    strEncriptada = strEncriptada.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {
        if (strEncriptada.includes(matriz[i][0])) {
            strEncriptada = strEncriptada.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return strEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(strDesencriptada) {

    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"], ["0", "xx"], ["1", "unelim"], ["2", "duebla"], ["3", "triam"], ["4", "qubo"], ["5", "petna"], ["6", "tnotb"], ["7", "topdross"], ["8", "eigta"], ["9", "knine"]];

    strDesencriptada = strDesencriptada.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {
        if (strDesencriptada.includes(matriz[i][1])) {
            strDesencriptada = strDesencriptada.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    return strDesencriptada;
}

function btnCopiar() {

    const copyText = document.getElementById("output");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);

    alert("Texto copiado al portapapeles");

    const textoCopiado = mensaje.value;
    textArea.value = textoCopiado;
    mensaje.value = "";

    mensaje.style.backgroundImage = "url(https://cdn.dribbble.com/users/1162077/screenshots/4158668/media/df13a1cc2271bd274d49d7ac13a0ff4e.png?compress=1&resize=768x576&vertical=top)";

}