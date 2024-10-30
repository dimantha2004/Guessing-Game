let randomnumber = Math.floor(Math.random() * 10) + 1;
let chances = 3;

function Guess() {
    let userinput = parseInt(document.getElementById("userinput").value);
    let winorloss = document.getElementById("winorloss");
    let lowhigher = document.getElementById("loworhigher");
    let leftnumbers = document.getElementById("leftnumbers");

    if (chances > 0) {
        if (randomnumber === userinput) {
            winorloss.innerHTML = "YOU WIN THE GAME...!";
            lowhigher.innerHTML = "Guessing number is correct...!";
        } else {
            chances--;
            leftnumbers.innerHTML = "Chances left: " + chances;
            if (randomnumber > userinput) {
                lowhigher.innerHTML = "Your number is too low";
            } else {
                lowhigher.innerHTML = "Your number is too high";
            }
        }
        
        if (chances === 0 && randomnumber !== userinput) {
            winorloss.innerHTML = "GAME OVER ! Out of chances...";
            
        }
    }
}
