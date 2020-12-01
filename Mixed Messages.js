//Mixed Message

// store 3 variables:
//  happy                   sad             angry
//store 3 variables
// showw them in 3 parts
function randomNumber() {
    const generated = Math.floor(Math.random() * 3)
    return generated
}
const happy0 = ["Ok", "Yes", "Of course"] // "." aca
const happy1 = ["You can go", "Why not. Go", "We are both going out"] //"to the" aca
const happy2 = ["library", "party", "park"]
const filosophal0 = ["I don’t kwon", "I care more about Uruguay than you", "Why?"]
const filosophal1 = ["Do you know that there are more kangaroos in Australia than people in Uruguay?", "do you want a mate?", "this is awful."]
const angry0 = ["No", "Negative", "NO!!!"]
const angry1 = ["Your behavior is bad", "you always get lost", "You are to young"]
const angry2 = ["and you don’t care about it", "to go party", ". JUST STAY AND STUDY!"]

function humorSelect() {
    const humor = document.getElementById("selected").value
    console.log(humor)
    if (humor === "Happy") {
        alert(happy0[randomNumber()] + ". " + happy1[randomNumber()] + " to the " + happy2[randomNumber()] + ".")
    } else if (humor === "Filosophal") {
        alert(filosophal0[randomNumber()] + ". " + filosophal1[randomNumber()])
    } else if (humor === "Angry") {
        alert(angry0[randomNumber()] + ". " + angry1[randomNumber()] + " to the " + angry2[randomNumber()] + ".")
    } else {
        alert("How did you broke this? Please reload and try again.")
    }
}