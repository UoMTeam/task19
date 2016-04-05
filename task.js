var numbers = new Array();

function randomNum() {
    numbers = [];
    for (var i = 0; i < 60; i++) {
        var n = Math.floor(Math.random() * 50) + 10;
        numbers.push(n);
    }
    render();
}

function sort1() {
    var i = 0;
    var j = i + 1;
    var repeat;
    var t;
    if (numbers.length < 30) {
        t = 100;
    } else {
        t = 10;
    }

    sort1.dosort = function () {
        if (numbers[i] > numbers[j]) {
            var s = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = s;
            render();
        }
        j++;
        if (j >= numbers.length) {
            i++;
            j = i + 1;
        }
        if (i >= numbers.length) {
            clearInterval(repeat);
            alert("Sort done");
        }
    }
    repeat = setInterval("sort1.dosort()", t);

}

function verifyNum(num) {
    var reg = new RegExp(/[0-9]+/);
    if (reg.test(num)) {
        if (num < 10 || num > 100) {
            alert("The number must between 10-100");
            return false;
        }
        if (numbers.length == 60) {
            alert("There are 60 numbers already, cannot receive more");
            return false;
        }
        return true;
    } else {
        alert("Plz input any number at first");
        return false;
    }
}

function leftin() {
    var num = parseInt(document.getElementById("num-input").value);
    if (verifyNum(num)) {
        numbers.unshift(num);
        document.getElementById("num-input").value = "";
        console.log(numbers);
        render();
    } else {
        document.getElementById("num-input").value = "";
    }
}

function rightin() {
    var num = parseInt(document.getElementById("num-input").value);
    if (verifyNum(num)) {
        numbers.push(num);
        document.getElementById("num-input").value = "";
        console.log(numbers);
        render();
    } else {
        document.getElementById("num-input").value = "";
    }
}

function leftout() {
    var num = numbers[0];
    if (num == undefined) {
        alert("Empty in the quere");
    } else {
        numbers.shift();
        alert("The left out number is " + num);
    }
    console.log(numbers);
    render();
}

function rightout() {
    var num = numbers[numbers.length - 1];
    if (num == "") {
        alert("Empty in the quere");
    } else {
        numbers.pop();
        alert("The right out number is " + num);

    }
    console.log(numbers);
    render();
}

function mkdiv() {
    var nwdiv = document.createElement("div");
    nwdiv.className += "number";
    return nwdiv;
}

function render() {
    document.getElementById("wrap").innerHTML = "";
    for (var i = 0; i < numbers.length; i++) {
        var element = mkdiv();
        element.style.height = numbers[i];
        document.getElementById("wrap").appendChild(element);
    }
}

function init() {
    console.log(numbers);
    document.getElementById("leftin").addEventListener("click", function () {
        leftin()
    }, false);
    document.getElementById("rightin").addEventListener("click", function () {
        rightin()
    }, false);
    document.getElementById("leftout").addEventListener("click", function () {
        leftout()
    }, false);
    document.getElementById("rightout").addEventListener("click", function () {
        rightout()
    }, false);
    document.getElementById("sort").addEventListener("click", function () {
        sort1()
    }, false);
    document.getElementById("ran").addEventListener("click", function () {
        randomNum()
    }, false);
    render();
}

window.onload = function () {
    init()

};
