function toggle(id) {
    if (id.getAttribute("aria-expanded") === "true") {
        id.setAttribute("aria-expanded", "false");
    }
    else {
        id.setAttribute("aria-expanded", "true");
    }
}
function toggle2(id) {
    if (id.getAttribute("aria-hidden") === "true") {
        id.setAttribute("aria-hidden", "false");
    }
    else {
        id.setAttribute("aria-hidden", "true");
    }
}
const dropdowns = document.getElementsByClassName("dropdown");
const navbtns = document.getElementsByClassName("navbtn");
const contents = document.getElementsByClassName("dropcontent")
for (let i = 0; i < navbtns.length; i++) {

    navbtns[i].addEventListener("click", function () {
        for (const dropdown of dropdowns) {
            if (dropdown == dropdowns[i])
                continue
            if (dropdown.getAttribute("aria-expanded") === "true") {
                dropdown.setAttribute("aria-expanded", "false");
            }
        }
        for (const id of contents) {
            if (id == contents[i])
                continue
            if (id.getAttribute("aria-hidden") === "false") {
                id.setAttribute("aria-hidden", "true");
            }
        }
        toggle(dropdowns[i]);
        toggle2(contents[i]);
    });
}
const btng = document.getElementById("btngroup")
const nav = document.getElementById("nav");

document.getElementById("menu").addEventListener("click", function () {
    btng.classList.remove("close")
    btng.classList.add("open")
    document.getElementById("menu").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("site").style.display = "none";

    setTimeout(() => {
        toggle(nav)
    }, 2);
});
document.getElementById("exit").addEventListener("click", function () {
    toggle(nav)
    document.getElementById("menu").style.display = "block";
    document.getElementById("login").style.display = "block";
    document.getElementById("site").style.display = "block";
    setTimeout(() => {
        btng.classList.remove("open")
        btng.classList.add("close")
    }, 100);
});
const btns = document.getElementsByClassName("btn2");
for (let i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", function () {
        for (const btn2 of btns) {
            if (btn2 === btns[i])
                continue
            if (btn2.getAttribute("aria-expanded") === "true") {
                btn2.setAttribute("aria-expanded", "false");
            }
        }
        toggle(btns[i]);
    });
}
window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
