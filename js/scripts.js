
const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<div>

<div class="encabezado"></div>

<div class="logo">
    <img src="recursos/logo.png" alt="">
</div>

<div class="toggle-menu" id="toggle-menu">
    <i class="fa-solid fa-bars fa-2xl" style="color: #ffffff;"></i>
</div>

<nav class="main-nav" id="main-nav">
    <ul class="main-menu" id="main-menu">
        <li class="main-menu__item">
            <a href="#" class="main-menu__link">QUIENES SOMOS</a>
        </li>
        <li class="main-menu__item">
            <a href="#" class="main-menu__link">PROYECTO</a>
        </li>
        <li class="main-menu__item">
            <a href="#" class="main-menu__link">ACTIVIDADES</a>
        </li>
        <li class="main-menu__item">
            <a href="#" class="main-menu__link">COLABORAR</a>
        </li>
        <li class="main-menu__item">
            <a href="#" class="main-menu__link">INSCRIPCIONES</a>
        </li>
        <li class="main-menu__item">
            <a href="#" class="main-menu__link"><i class="fa-brands fa-instagram fa-2xl"
                    style="color: #ffffff;"></i></a>
        </li>

    </ul>
</nav>

</div>

`;

var coll = document.getElementsByClassName("toggle-menu");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    // this.classList.toggle("active"); asigna esta clase al elemento capturado en este caso por "coll"
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}