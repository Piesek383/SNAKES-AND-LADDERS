const cardsColor = ["red","red","purple","purple",
"blue","blue","brown","brown","yellow","yelllow",
"orange","orange","lightgreen","lightgreen",
",pink","pink","lightblue","lightblue"];
let card = document.querySelectorAll("div");
cards = [...cards]; //18 div-uw

const startTime = new Date().getTime();
let activeCard = "";
const activeCards = [];

const gamePairs = cards.length/2; //9
let gameResulit = 0;

const clickCard = function (){
    //*mini gra - dwa klikniecia*/

    activeCard = this;
    if(activeCard === activeCard[0]) return;

    activeCard.classList.remove("hidden");

    //czy to 1 klikniecie
    if(activeCard.length === 0) {
        activeCard [0] = activeCard;
        console.log("1");
        return;
    }

    //czy to 2 klikniecie
    else { 
        console.log("2");
        card.forEach(card => card.removeEventListener("click",
        clickCard))
        activeCard[1] = activeCard;
        setTimeout(function() {
   
    

            
        }, timeout);
      if(activeCard[0].classname === activeCard[1].classname) {
console.log("wygrane")
activeCard.forEach(card => card.classlist.add("off"))
gameResulit++;
card = card.filter(card => !card.classList.contains("off"))
if(gameResulit == gamePairs) {
    HTMLFormControlsCollection.log("wygrana gra")
const gameTime = (endTime - startTime)/1000
alert(`Udało sie! Twój wynick to: $ {gameTime} sekund`)
location.reload();
}
      }
      else {
        console.log("przegrana")
        activeCard.forEach(card => card.classlist.add("hidden"))
         
      }
      activeCard ="";
      activeCard.lenght = 0;
      card.forEach(card => card.addEventListener("click",
      clickCard))
    } 500;
        
    
    //jesli drugie to zablokowanei na czas klikniecia.
    //jesli drugie to to czy wygrana czy przegrana.jesli wygrana to
    //sprawdzenie czy koniec gry 
    //zabezpieczenia: dwukrotnie klikniecie w ten sam element 1 w element z klasą hidden
    
console.log("klik")
};
const init = function () {
    cards.forEach(card => {
       const position = Math.floor(Math.random() *
  cardsColor.length); //1
  card.classList.add(cardsColor[position]);
  cardsColor.splice(position, 1);
})
setTimeout(function (){
    cards.forEach(card => {
        card.classList.add("hidden")
        card.addEventListener("click", clickCard)
    })
}, 2000)
};
init()