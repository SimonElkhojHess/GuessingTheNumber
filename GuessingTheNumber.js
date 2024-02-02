"use strict";

window.addEventListener("load", start);

function start() {
    console.log("JS started")
    document.querySelector("#too-high-button").addEventListener("click", guessIsTooHigh);
    document.querySelector("#too-low-button").addEventListener("click", guessIsTooLow);
    document.querySelector("#correct-button").addEventListener("click", guessIsCorrect);
    document.querySelector("#start-button").addEventListener("click", numberThoughtOf);
    console.log("event listeners added")

}

function numberThoughtOf(event) {
    event.preventDefault();
    document.querySelector("#start-button").classList.add("hidden");
    document.querySelector("#reply-form").classList.remove("hidden");
    document.querySelector("#guess-list").innerHTML = "";
    generateGuess();
}

function generateGuess() {
     const guess = Math.floor((Math.random()*99)+1);
     const list = document.querySelector("#guess-list");
     const html = `<li>Is ${guess} the number you are thinking of?</li>`;
     list.insertAdjacentHTML("beforeend", html);
}

function guessIsTooHigh(event) {
    event.preventDefault();

    const list = document.querySelector("#guess-list");
    const html = `<li>Too high? I'll try again!</li>`;
    list.insertAdjacentHTML("beforeend", html);
    generateGuess();
}

function guessIsTooLow(event) {
    event.preventDefault();

    const list = document.querySelector("#guess-list");
    const html = `<li>Too low? I'll try again!</li>`;
    list.insertAdjacentHTML("beforeend", html);
    generateGuess();
}

function guessIsCorrect(event) {
    event.preventDefault();

    const list = document.querySelector("#guess-list");
    const html = `<li>I was correct? great! Do you want to try again? Just press start then</li>`
    list.insertAdjacentHTML("beforeend", html);
    document.querySelector("#start-button").classList.remove("hidden");
    document.querySelector("#reply-form").classList.add("hidden");
}