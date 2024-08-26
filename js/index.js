function validate() {
  let input = document.getElementById("input").value;
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Á", "É", "Í", "Ó", "Ú", "á", "é", "í", "ó", "ú", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let cont = 0;

  for (let i = 0; i < input.length; i++) {
    for (let letter = 0; letter < letters.length; letter++) {
      if (input.charAt(i) == letters[letter]) {
        cont++;
      }
    }
  }
  if (cont == 0) {
    return true;
  }
  return false;
}

function encrypt() {
  let input = document.getElementById("input").value;
  let btndecrypt = document.getElementById('decrypt');
  let title = document.getElementById("title");
  let txt = document.getElementById("txt");
  let img = document.getElementById("img");

  let cipher = input
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (!validate(input_txt)) {
    var input_txt = input.value;
    alert("Texto inválido, verifica que cumpla las condiciones")
  }
  else {
    if (input.length != 0) {
      document.getElementById("input").value = cipher;
      title.textContent = "Texto encriptado exitosamente";
      txt.textContent = "";
      img.src = "./assets/img/encrypt.jpg";
      btndecrypt.disabled = false;
    } else {
      title.textContent = "No hay mensajes para encriptar";
      txt.textContent = "Ingresa el texto que deseas encriptar";
      img.src = "./assets/img/blue.png";
    }
  }
}

function decrypt() {
  let input = document.getElementById("input").value;
  let title = document.getElementById("title");
  let txt = document.getElementById("txt");
  let img = document.getElementById("img");

  let cipher = input
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (!validate(input_txt)) {
    var input_txt = input.value;
    alert("Texto inválido, verifica que cumpla las condiciones")
  }
  else {
    if (input.length != 0) {
      document.getElementById("input").value = cipher;
      title.textContent = "Texto desencriptado exitosamente";
      txt.textContent = "";
      img.src = "./assets/img/decrypt.jpg";
    } else {
      title.textContent = "No hay mensajes para desencriptar";
      txt.textContent = "Ingresa el texto que deseas desencriptar";
      img.src = "./assets/img/blue.png";
    }
  }
}
