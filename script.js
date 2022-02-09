// RGB colors with JS by David S.

// Event Listener

document.getElementById("preview-btn").addEventListener("click", rgbPreview);

function rgbPreview() {
    // Input: get red green bluen values.
    let rValue = document.getElementById("Red").value;
    let gValue = document.getElementById("Green").value;
    let bValue = document.getElementById("Blue").value;

    



    // Preocess: build rgb string(__, __, __)
    let rgbString = "rgb(" + rValue + "," + gValue + "," + bValue + ")";

    // Output: display rgb string and update the color preview.
    document.getElementById("rgbStrOut").innerHTML = rgbString
    document.getElementById("Display").style.background = rgbString;

}
