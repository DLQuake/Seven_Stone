let prev = document.getElementById('prev');
let next = document.getElementById('next');
let next1 = document.getElementById('next1');
let number = document.getElementById('number');

let slideIndex = 1;
moveContent(slideIndex);

function plusMinusPages(n) {
    moveContent(slideIndex += n);
    currentPage(slideIndex);
}

function currentPage(n) {
    number.innerHTML = slideIndex = n;
    if (slideIndex < 1 || slideIndex > 12) {
        prev.disabled = true;
        next.disabled = true;
        next1.disabled = true;
    }
}

function moveContent(n) {
    let i;
    let pages = document.getElementsByClassName("deals__prices--width");
    if (n > pages.length) { return }
    if (n < 1) { return }
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    pages[slideIndex - 1].style.display = "flex";
}