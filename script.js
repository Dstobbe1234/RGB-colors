// RGB colors with JS by David S.
// Variables to store HTML Elements
let redInEl = document.getElementById("Red");
let greenInEl = document.getElementById("Green");
let blueInEl = document.getElementById("Blue");
let rgbStringOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("Display");
// Event Listener
redInEl.addEventListener("input", rgbPreview)
greenInEl.addEventListener("input", rgbPreview)
blueInEl.addEventListener("input", rgbPreview)

function rgbPreview() {
    // Input: get red green bluen values.
    let rValue = +redInEl.value;
    let gValue = +greenInEl.value;
    let bValue = +blueInEl.value;

    
    // Validate Colors (Constrain colors between 0 - 255)
    // Check rValue
    if (rValue < 0) {
        rValue = 0;
        redInEl.value = 0;
    } else if (rValue > 255) {
        rValue = 255;
        redInEl.value = 255;
    }
    // Check gValue
    if (gValue < 0) {
        gValue = 0;
        greenInEl.value = 0;
    } else if (gValue > 255) {
        gValue = 255;
        greenInEl.value = 255;
    }
    // Check bValue
    if (bValue < 0) {
        bValue = 0;
        blueInEl.value = 0;
    } else if (bValue > 255) {
        bValue = 255;
        blueInEl.value = 255;
    }


    // Preocess: build rgb string(__, __, __)
    let rgbString = "rgb(" + rValue + "," + gValue + "," + bValue + ")";

    // Output: display rgb string and update the color preview.
    rgbStringOutEl.innerHTML = rgbString
    displayEl.style.background = rgbString;

}
