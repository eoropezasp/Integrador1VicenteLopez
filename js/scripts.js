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

