function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();

  if (hora >= 0 && hora < 12) {
    //Good morning!
    msg.innerHTML = `Good morning! It is now ${hora} o'clock.`;
    img.src = "fotomanha.png";
    document.body.style.background = "#47d1d1";
  } else if (hora >= 12 && hora <= 18) {
    //Good afternoon!
    msg.innerHTML = `Good afternoon! It is now ${hora} o'clock.`;
    img.src = "fototarde.png";
    document.body.style.background = "#de87a4";
  } else {
    //Good evening!
    msg.innerHTML = `Good evening! It is now ${hora} o'clock.`;
    img.src = "fotonoite.png";
    document.body.style.background = "#666666";
  }
}
