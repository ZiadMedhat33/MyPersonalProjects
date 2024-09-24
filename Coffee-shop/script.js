let prices = [10, 8, 12, 6, 20];
const cur = document.getElementById("currency");
const p1 = document.getElementById("p1"), p2 = document.getElementById("p2"), p3 = document.getElementById("p3"),
    p4 = document.getElementById("p4"), p5 = document.getElementById("p5")
let arr = [p1, p2, p3, p4, p5];
for (let i = 0; i < prices.length; i++) {
    if (cur.value == "USD") {
        arr[i].innerHTML = prices[i] + "$";
    }
    else {
        arr[i].innerHTML = prices[i] * 50 + "EGP";
    }
}
cur.addEventListener("change", function () {
    for (let i = 0; i < prices.length; i++) {
        if (cur.value == "USD") {
            arr[i].innerHTML = prices[i] + "$";
        }
        else {
            arr[i].innerHTML = prices[i] * 50 + "EGP";
        }
    }
    console.log("YES");
});
const con = document.getElementById("con");
function sw() {
    con.classList.toggle("active")
} 