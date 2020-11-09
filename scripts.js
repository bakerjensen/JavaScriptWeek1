'use strict'

// Very Easy Challenge

function min(x, y) {
    if (x > y) {
        return `${y} is the min`
    }
    if (x < y) {
        return `${x} is the min`
    }
}

console.log(min(12, 7));

// Easy Challenge

let studentNames = ["Winston Baker", "Rumi Carter", "Taylor Paige"]
let age = [15, 3, 34]

console.log(`Hello, my name is ${studentNames[1]} and I'm ${age[1]} years old.`)


// Medium Challenge

let monthNames = ["nan", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
function monthNum() {
    let date = window.prompt("Pick a Number between 1-12!");


    if (date < 1) {
        return `Nahh. Too Low!`
    }
    if (date > 12) {
        return `Ehhhh...A little too high!`
    }
    return monthNames[date]
}
console.log(monthNum());



// Hard Challenge

let mass = [8, 45]
let height = [9, 10]

function bmi(height, mass) {
    return mass / (height ** 2)
}
console.log(bmi(mass[0], height[0]));
console.log(bmi(mass[1], height[1]));

let Tom = bmi(mass[0], height[0]);
let Jerry = bmi(mass[1], height[1]);

alert(`Is Tom's BMI is greater than Jerry's?... ${Tom > Jerry}`)




