function convertToNumber(str) {

    const cleanedStr = str.replace(/[^0-9.]+/g, '');


    if (cleanedStr === '') {
        return 0;
    }

    return parseFloat(cleanedStr);
}
function setMonth(total) {
    document.getElementById("totalPrice").innerHTML = "$" + total.toFixed(2);
}
function setLast(total, prev) {
    let c = '';
    if (total - prev >= 1) c += '+'
    document.getElementById("precentage").innerHTML = c + (total - prev).toFixed(2);
}
let myBalance = 0;
let s = false;
class structure {
    p = 0;
    total = 0;
    cnt = 0;
    prev = 0;
    constructor(arr, cycle, cycleName) {
        this.arr = arr;
        this.cycle = cycle;
        this.cycleName = cycleName;
    }
    setheight() {
        let mx = 0;
        for (let i = 0; i < arr.length; i++) {
            const temp = document.getElementById(arr[i]);
            let num = convertToNumber(temp.querySelector(".current").innerHTML);
            if (mx < num) {
                mx = num;
            }
        }
        for (let i = 0; i < arr.length; i++) {
            const temp = document.getElementById(arr[i]);
            let num = convertToNumber(temp.querySelector(".current").innerHTML);
            let h = temp.querySelector(".chart")
            if (num == mx) {
                h.classList.add("blue");
            }
            else {
                h.classList.remove("blue");
            }
            h.style.height = 15 * (num / mx) + "rem"
        }
    }
    reset() {
        for (let i = 0; i < arr.length; i++) {
            const temp = document.getElementById(arr[i]);
            temp.querySelector(".current").innerHTML = "$0.00";
            let h = temp.querySelector(".chart")
            h.style.height = '0'
        }

    }
    add(val) {
        if (this.p === this.arr.length) {
            this.p = 0;
            this.reset();
        }
        const temp = document.getElementById(this.arr[this.p]);
        temp.querySelector(".current").innerHTML = "$" + convertToNumber(val).toFixed(2);
        this.setheight();
        this.total += convertToNumber(val);
        setMonth(this.total);
        if (s) {
            setLast(this.total, this.prev);
        }
        this.p++;
        if (this.p === this.arr.length) {
            this.cnt++;
            if (this.cnt === this.cycle) {
                this.cnt = 0;
                this.prev = this.total;
                s = true;
                this.total = 0;
            }
        }
    }

}
let arr = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
let obj = new structure(arr, 4, "month");
const add = document.getElementById("balanceAdd");
const minus = document.getElementById("balanceDelete");
const del = document.getElementById("delete");
const credit = document.getElementById("credit");
add.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        credit.innerHTML = "$" + (convertToNumber(add.value) + convertToNumber(credit.innerHTML)).toFixed(2);
    }
})
minus.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (convertToNumber(credit.innerHTML) >= convertToNumber(minus.value)) {
            credit.innerHTML = "$" + (convertToNumber(credit.innerHTML) - convertToNumber(minus.value)).toFixed(2);
            obj.add(minus.value);
        }
        else {
            alert("not enough credit");
        }
    }
})
document.getElementById("balanceAddBtn").addEventListener("click", function () {
    if (convertToNumber(add.value) + convertToNumber(credit.innerHTML) >= Number.MAX_SAFE_INTEGER) {
        credit.innerHTML = "$" + Number.MAX_SAFE_INTEGER;
    }
    else {
        credit.innerHTML = "$" + (convertToNumber(add.value) + convertToNumber(credit.innerHTML)).toFixed(2);
    }
})
document.getElementById("balanceDeleteBtn").addEventListener("click", function () {
    if (convertToNumber(credit.innerHTML) >= convertToNumber(minus.value)) {
        credit.innerHTML = "$" + (convertToNumber(credit.innerHTML) - convertToNumber(minus.value)).toFixed(2);
        obj.add(minus.value);
    }
    else {
        alert("not enough credit");
    }
})
del.addEventListener("click", function () {
    obj.p = 0;
    obj.total = 0;
    obj.cnt = 0;
    obj.prev = 0;
    document.getElementById("precentage").innerHTML = `finish this ${obj.cycleName}`
    obj.reset();
    setMonth(0);
    credit.innerHTML = "$0.00";
})