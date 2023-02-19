window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-66px";
    }
    document.getElementById("arrow").style.opacity = 100 - document.documentElement.scrollTop/4 + "%";
    document.getElementById("parallax").style.opacity = 100 - document.documentElement.scrollTop/4 + "%";
}

function openMenu() {
    document.getElementById("myHeader").classList.toggle("change");
}

function arrow() {

}

function parallax() {
    document.getElementById("parallax").style.top = 25 + window.pageYOffset / 35 + "%";
    document.getElementById("scroll").style.top = document.documentElement.scrollTop + document.documentElement.scrollTop / document.body.scrollHeight * window.innerHeight + "px";
}

function constructor() {
    document.getElementById("scroll").style.height = document.body.scrollHeight / 10 + "px";
}

window.addEventListener("scroll", function () { parallax(); });