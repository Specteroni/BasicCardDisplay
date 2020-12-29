let topRect = document.getElementsByClassName("top-rect");
let bottomRect = document.getElementsByClassName("bottom-rect");
let playField = document.getElementsByClassName("name-rect")
let scoreField = document.getElementsByClassName("score-rect")
console.log(topRect);

const changeText = function() {
    console.log("calling changeText")
    let text = prompt("Enter the card text", "card text");

    if (text != null) {
        this.textContent = text;
      }
};

setTimeout(() => {
    for(let i = 0; i < topRect.length; i++) {
        console.log("adding")
        topRect[i].addEventListener("click", changeText);
        bottomRect[i].addEventListener("click", changeText);
        playField[i].addEventListener("click", changeText);
    }
}, 10)