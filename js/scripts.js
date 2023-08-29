
const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<div>

<div class="encabezado"></div>

<div class="logo">
<a href="index.html"><img src="./recursos/logo.png" alt=""></a>
    
</div>

<div class="toggle-menu" id="toggle-menu">
    <i class="fa-solid fa-bars fa-2xl" style="color: #ffffff;"></i>
</div>

<nav class="main-nav" id="main-nav">
    <ul class="main-menu" id="main-menu">
        <li class="main-menu__item">
            <a href="./nosotros.html" class="main-menu__link">QUIENES SOMOS</a>
        </li>
        <li class="main-menu__item">
            <a href="./proyecto.html" class="main-menu__link">PROYECTO</a>
        </li>
        <li class="main-menu__item">
            <a href="./actividades.html" class="main-menu__link">ACTIVIDADES</a>
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


footer.innerHTML =`

<section class="container-footer">
<div class="row">
    <div class="contacto-datos col-md-6 mx-auto">
    <div class="datos-titulo">
        <h2>Escribinos</h2>
        </div>
        <div class="datos">
            <p>Malvinas argentinas 1685</p>
            <p>Gonzales Catan</p>
            <p>Provincia de buenos aires</p>
            <p>Tel. (54)5247 4525</p>
            <p>info@blabla.com</p>
            <div class="slogan">
                <img src="./recursos/logoGC_slogan.webp" alt="">
            </div>
        </div>
    </div>
    <div class="contacto-form px-5 col-md-6 mx-auto">
        <form class="formulario">
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" id="nombre" placeholder="Ej: Eduardo">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp" placeholder="Enter email">
               
            </div>
            <div class="form-group">
                <label for="mensaje">Mensaje</label>
                <textarea class="form-control" id="mensaje" rows="3"></textarea>
                <small class="form-text text-muted">We'll never share your email with anyone
                    else.</small>
            </div>


            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>


    </div>
</div>



</section>

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