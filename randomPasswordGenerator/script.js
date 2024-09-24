
const str = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz', '0123456789', '@#$%^&*()_+!']
const slide = document.getElementById("slider");
const length = document.getElementById("length");
length.innerHTML = "length:" + slide.value;
slide.oninput = function () {
    length.innerHTML = "length:" + this.value
}
let b1, b2, b3, b4;
const t1 = document.getElementById("c1"), t2 = document.getElementById("c2"),
    t3 = document.getElementById("c3"), t4 = document.getElementById("c4")
const arr = [t1, t2, t3, t4];
let cnt = 3;
const t5 = document.getElementsByTagName(`input[type="checkbox"]`);
t5.style = "transition:0s;";
t1.checked = 1;
t2.checked = 1;
t3.checked = 1;
t4.checked = 0;
t5.style = "transition:0.3s;";
function valid() {
    let tt = 0;
    for (let i = 0; i < 4; i++) {
        tt += arr[i].checked
    }
    cnt = tt;
    if (cnt === 1) {
        for (let i = 0; i < 4; i++) {
            if (arr[i].checked) {
                arr[i].disabled = true;
                arr[i].style = "opacity:0.2;"
            }
        }
    }
    if (cnt > 1) {
        for (let i = 0; i < 4; i++) {
            if (arr[i].disabled) {
                arr[i].disabled = false;
                arr[i].style = "opacity:1;"
            }
        }
    }

}
t1.addEventListener("click", valid);
t2.addEventListener("click", valid);
t3.addEventListener("click", valid);
t4.addEventListener("click", valid);
document.getElementById("generate").addEventListener("click", function () {
    let size = "";
    b1 = document.getElementById("c1").checked;
    b2 = document.getElementById("c2").checked;
    b3 = document.getElementById("c3").checked;
    b4 = document.getElementById("c4").checked;
    if (b1) {
        size += str[0];
    }
    if (b2) {
        size += str[1];
    }
    if (b3) {
        size += str[2];
    }
    if (b4) {
        size += str[3];
    }
    pass = "";
    for (let i = 0; i < slide.value; i++) {
        let num = Math.floor(Math.random() * size.length)
        pass += size[num];
    }
    if (size != 0) {
        document.getElementById("copy").innerHTML = "click to copy";
        document.getElementById("password").innerHTML = pass;
    }
})
document.getElementById("copy").addEventListener("click", function () {
    const temp = document.getElementById("password");
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = temp.innerHTML;
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(tempTextarea.value)
    document.body.removeChild(tempTextarea);
})
