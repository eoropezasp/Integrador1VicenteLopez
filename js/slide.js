const carouselbox = document.querySelector(".carouselbox"),
    firstImg = carouselbox.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".carrusel i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {

    let scrollWidth = carouselbox.scrollWidth - carouselbox.clientWidth;
    arrowIcons[0].style.display = carouselbox.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carouselbox.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;

        carouselbox.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});

const autoSlide = () => {

    if (carouselbox.scrollLeft - (carouselbox.scrollWidth - carouselbox.clientWidth) > -1 || carouselbox.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14;

    let valDifference = firstImgWidth - positionDiff;

    if (carouselbox.scrollLeft > prevScrollLeft) {
        return carouselbox.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }

    carouselbox.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {

    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carouselbox.scrollLeft;
}

const dragging = (e) => {

    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carouselbox.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carouselbox.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carouselbox.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
}

carouselbox.addEventListener("mousedown", dragStart);
carouselbox.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carouselbox.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carouselbox.addEventListener("touchend", dragStop);