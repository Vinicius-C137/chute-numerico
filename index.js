function ConfereNumero(onclick) {
    const GeraNumeros = Math.floor(Math.random() * 100) + 1;
    const Palpite = parseInt(document.getElementById("campo_Dig").value);

    if (Palpite === GeraNumeros) {
      document.getElementById("resultado").innerText =
        "Parabens voce acertou ";
    } else if (Palpite < GeraNumeros) {
      document.getElementById("resultado").innerText =
        "Ops! Tente um numero maior";
    } else {
      document.getElementById("resultado").innerText =
        "Talvez um numero menor venha a calhar";
    }

    console.log(GeraNumeros);
  }

