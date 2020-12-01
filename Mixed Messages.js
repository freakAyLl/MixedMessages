//Data phrases saved below this.
const happy0 = ["Ok", "Yes", "Of course"]
const happy1 = ["You can go", "Why not. Go", "We are both going out"]
const happy2 = ["library", "party", "park"]
const filosophal0 = ["I don’t kwon", "I care more about Uruguay than you", "Why?"]
const filosophal1 = ["Do you know that there are more kangaroos in Australia than people in Uruguay?", "do you want a mate?", "this is awful."]
const angry0 = ["No", "Negative", "NO!!!"]
const angry1 = ["Your behavior is bad", "you always get lost", "You are to young"]
const angry2 = ["and you don’t care about it", "to go party", ". JUST STAY AND STUDY!"]
    //Data phrases saved above this.

function randomNumber() { //Function to return a random number from 0 to 2
    const generated = Math.floor(Math.random() * 3)
    return generated
}

function humorSelect() { //function called from HTML document.
    const humor = document.getElementById("selected").value //getting parents humor with a form
        //    console.log(humor)
        //selective structure
    if (humor === "Happy") { //happy
        alert(happy0[randomNumber()] + ". " + happy1[randomNumber()] + " to the " + happy2[randomNumber()] + ".") //generate an alert so they can just use the app again without reloading
    } else if (humor === "Filosophal") {
        alert(filosophal0[randomNumber()] + ". " + filosophal1[randomNumber()]) //the alert will pop out with our phrases located on the array taking one with our randomNumber as index
    } else if (humor === "Angry") {
        alert(angry0[randomNumber()] + ". " + angry1[randomNumber()] + " to the " + angry2[randomNumber()] + ".")
    } else {
        alert("How did you broke this? Please reload and try again.") //Not necesary (i think)
    }
}