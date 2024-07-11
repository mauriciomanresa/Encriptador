function codificar() {
  let ingresoTexto = document.getElementById("ingresoTexto").value;
  if (ingresoTexto.trim() !== "") {
    let encriptaTexto = btoa(ingresoTexto);
    document.getElementById("salida").value = encriptaTexto;
    document.getElementById("ingresoTexto").value = "";
  } else {
    alert("Por favor ingresa un texto para codificar.");
  }
}

function decodificar() {
  let ingresoCodigo = document.getElementById("ingresoCodigo").value;
  if (ingresoCodigo.trim() !== "") {
    let desencriptaCodigo = atob(ingresoCodigo);
    document.getElementById("salida").value = desencriptaCodigo;
    document.getElementById("ingresoCodigo").value = "";
  } else {
    alert("Por favor ingresa un código para decodificar.");
  }
}

function handleKeyPress(event, action) {
  if (event.keyCode === 13 || event.key === "Enter") {
    event.preventDefault();
    if (action === "codificar") {
      codificar();
    } else if (action === "decodificar") {
      decodificar();
    }
  }
}
