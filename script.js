const text = [
    "Frontend Developer",
    "C++ Programmer",
    "Open Source Learner"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

    current = text[i];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            current.substring(0, j++);
    } else {
        document.getElementById("typing").textContent =
            current.substring(0, j--);
    }

    if (j > current.length) {
        isDeleting = true;
        setTimeout(type, 1200);
        return;
    }

    if (j < 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
        j = 0;
    }

    setTimeout(type, isDeleting ? 60 : 120);
}

type();
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});