// document.getElementById("count").innerText = 5;

// initialize count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count in the HTML to reflect the new count

let count = 0;
// DOM -> Document Object Model: hoe you use JS to modify a website
let count_el = document.getElementById("count-el"); // pass in arguments
let save_el = document.getElementById("save-el");

function increment() {
    count++;
    // .innerText modifies the element text, .textContent is better for spaces
    count_el.textContent = count;
    console.log(count);
}

function decrement() {
    // condition prevents negative count
    if (count > 0) {
        count--;
        count_el.textContent = count;
        console.log(count);
    }
}

function save() {
    let currCount = String(count) + " - ";
    save_el.textContent += currCount;
    console.log(count);
    count = 0;
    count_el.textContent = count;
}