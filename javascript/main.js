//obtener los elementos de la case .close
let links = document.querySelectorAll(".close");
//recorrerlos
links.forEach(function (link) {
  //agregar evento click a cada uno de ellos
  link.addEventListener("click", function (ev) {
    ev.preventDefault();
    let content = document.querySelector(".content");
    // quitarle clases de animacion que ya tiene

    content.classList.remove("animate__fadeInDownBig");
    content.classList.remove("animate__animated");
    //agregar clases para animar su salida
    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");
    setTimeout(function () {
      location.href = "/boletines";
    }, 600);

    return false;
  });
});
