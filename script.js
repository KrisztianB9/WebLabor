function add(a, b) {
    return a + b;
}
console.log("1. feladat (Összeadás 3+4):", add(3, 4));

function isEven(num) {
    return num % 2 === 0;
}
console.log("2. feladat (Páros a 4?):", isEven(4));
console.log("2. feladat (Páros az 5?):", isEven(5));

let count = 0;
function incrementCounter() {
    count++;
    document.getElementById('counter').innerText = count;
}

function askName() {
    let name = prompt('Mi a neved?');
    if (name) {
        document.getElementById('name').innerText = 'Üdvözöllek, ' + name + '!';
    }
}

function startCountdown() {
    let timeLeft = 10;
    let timer = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerText = 'Idő lejárt!';
        } else {
            document.getElementById('countdown').innerText = timeLeft;
        }
        timeLeft--;
    }, 1000);
}

function multiplyArray(arr, multiplier) {
    return arr.map(num => num * multiplier);
}
let numbers = [1, 2, 3, 4];
console.log("7. feladat (Szorzás 2-vel):", multiplyArray(numbers, 2));

function changeBg() {
    document.body.style.backgroundColor = 'lightcoral';
}

window.onload = function() {

    let fruits = ['Alma', 'Banán', 'Narancs'];
    let fruitListElement = document.getElementById('fruitList');
    fruits.forEach(function(fruit) {
        fruitListElement.innerHTML += '<li>' + fruit + '</li>';
    });

    let person = { name: 'John', age: 30, city: 'Budapest' };
    let personInfoElement = document.getElementById('personInfo');
    for (let key in person) {
        personInfoElement.innerHTML += '<li>' + key + ': ' + person[key] + '</li>';
    }

    setTimeout(function() {
        alert('Üdvözöllek az oldalon! (Ez a 10. feladat üzenete)');
    }, 5000);
};
