let prev = document.getElementById('prev');
let next = document.getElementById('next');
let next1 = document.getElementById('next1');
let number = document.getElementsByClassName('deals__moving-options-numbers--change')

prev.addEventListener('click', function () {
    for (let i = 0; i < number.length; i++) {
        number[i].innerHTML = parseInt(number[i].innerHTML) - 1;
        if (number[i].innerHTML < 1) {
            number[i].innerHTML = 1;
            return;
        }
    }
});

next.addEventListener('click', function () {
    for (let i = 0; i < number.length; i++) {
        number[i].innerHTML = parseInt(number[i].innerHTML) + 1;
        if (number[i].innerHTML > 12) {
            number[i].innerHTML = 12;
            return;
        }
    }
});

next1.addEventListener('click', function () {
    for (let i = 0; i < number.length; i++) {
        number[i].innerHTML = parseInt(number[i].innerHTML) + 1;
        if (number[i].innerHTML > 12) {
            number[i].innerHTML = 12;
            return;
        }
    }
});

let slideIndex = 1;
moveContent(slideIndex);

function plusMinusPages(n) {
    moveContent(slideIndex += n);
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