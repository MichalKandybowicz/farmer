const dice2 = [
    ["rabbit", "img/rabbit.png", ],
    ["rabbit", "img/rabbit.png"],
    ["rabbit", "img/rabbit.png"],
    ["bear", "img/bear.png"],
    ["bear", "img/bear.png"],
    ["elephants", "img/elephants.png"],
    ["elephants", "img/elephants.png"],
    ["giraffe","img/giraffe.png"],
    ["wolf","img/wolf.png"],
];
const dice1 = [
    ["rabbit", "img/rabbit.png"],
    ["rabbit", "img/rabbit.png"],
    ["rabbit", "img/rabbit.png"],
    ["bear", "img/bear.png"],
    ["bear", "img/bear.png"],
    ["elephants", "img/elephants.png"],
    ["elephants", "img/elephants.png"],
];

const troop = {
    "rabbit": 60,
    "bear": 32,
    "elephants": 30,
    "giraffe": 12,
}

const diceButton = document.getElementById('roll-dice');
diceButton.onclick = eventHandler;

function eventHandler() {
    const rNum1 = Math.floor(Math.random() * dice1.length);
    const rNum2 = Math.floor(Math.random() * dice2.length);
    document.getElementById("dice1").src = dice1[rNum1][1];
    document.getElementById("dice2").src = dice2[rNum2][1];



    if(dice1[rNum1][0] ==="wolf" || "wolf" === dice2[rNum2][0]){ // if wolf
        console.log("wilk!")

        const rabbits = document.getElementsByClassName("rabbit").length;
        const bears = document.getElementsByClassName("bear").length;
        const elephants = document.getElementsByClassName("elephants").length;
        const giraffe = document.getElementsByClassName("giraffe").length;

        

        console.log("stado gracza",rabbits, bears, elephants,giraffe)

        const elToDelete = document.querySelectorAll(".animal");
        for (const el of elToDelete) {
            el.remove(); //usuwamy tylko z HTML
        }
    }

    else if (dice1[rNum1][0] === dice2[rNum2][0]) { // two same
            addingAnimals(dice1[rNum1][0], 2)
        }
    else if (dice1[rNum1][0] !== dice2[rNum2][0]){
        // kostka 1
        addingAnimals(dice1[rNum1][0], 1)
        // kostka 2
        addingAnimals(dice2[rNum2][0], 1)
    }
}


function addingAnimals(animal, x){
    console.log(troop[animal])
    const howMany = document.querySelectorAll("."+animal).length
    const howManyAdd = Math.floor((howMany + x )/2)
    troop[animal] = troop[animal] - howManyAdd

    if (troop[animal] >= 0){
        for (let i = 0; i < howManyAdd; i++) {
            const el = document.createElement("img");
            el.src = "img/"+animal+".png";
            el.className = animal;
            el.classList.add("animal");

            const div = document.getElementById(animal);
            div.appendChild(el);
        }
    }
    else troop[animal] = 0

}

