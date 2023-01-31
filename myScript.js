window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-66px";
    }

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("arrow").style.opacity = "0";
    } else {
        document.getElementById("arrow").style.opacity = "100";
    }
}
//try adding an oppacity change when scrolling down for the navigation bar

function openMenu() {
    document.getElementById("myHeader").classList.toggle("change");
}

function arrow() {

}

function parallax() {
    document.getElementById("parallax").style.top = 25 + window.pageYOffset / 17 + "%";
    document.getElementById("scroll").style.top = document.documentElement.scrollTop + document.documentElement.scrollTop / document.body.scrollHeight * window.innerHeight + "px";
}

function constructor() {
    document.getElementById("scroll").style.height = document.body.scrollHeight / 10 + "px";
}

window.addEventListener("scroll", function () { parallax(); });