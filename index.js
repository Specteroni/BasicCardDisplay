let topRect = document.getElementsByClassName("top-rect");
let bottomRect = document.getElementsByClassName("bottom-rect");
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
    }
}, 10)