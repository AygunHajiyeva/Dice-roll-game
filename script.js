let images = [
    "dice-one-solid.svg",
    "dice-two-solid.svg",
    "dice-three-solid.svg",
    "dice-four-solid.svg",
    "dice-five-solid.svg",
    "dice-six-solid.svg"
];


let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");



function roll() {
    var num1 = Math.floor(Math.random() * 6);
    var num2 = Math.floor(Math.random() * 6);

    dice1.src = images[num1];
    dice2.src = images[num2];

}