import wheel from "./assets/Pizzeros/other/kolo_fortuny.png";
import "./styles/style.css";
import { stark,arryn, baratheon,martell,tyrell,lannister,greyjoy,tully } from "./recipes";
import arrow from "./assets/Pizzeros/other/strzalka.png";


export default menu = `
<div id="choice-title-container">
<h2 id="choice-title">Make your choice</h2>
</div>
<div id="arrow-container">
<img
src="${arrow}"
id="arrow-image" alt="arrow"
>
</div>
<figure id="wheel-figure">
<img
src="${wheel}"
width="300px"
id="wheel"
alt="pizza wheel of fortune"
/>
</figure>
<div id="div-button-container">
<button id="spin-button">Spin</button>
</div>
<div id="result-container">
<p id="result-para"><span><strong></strong></span></p>
<p id="recipe-para"></p>
</div>
`;

function randomNumber(max) {
return Math.floor(Math.random() * max) + 1;
}
function calcTravel(position, destiny, menuLength){
let x=0;
let travel = 0;
if(position > destiny){
x = position - destiny;
travel=menuLength - x;
position = destiny;
return travel -1;
}
else if( position< destiny) {
travel= destiny - position;
position = destiny;
return travel -1; 

}
else {
return travel -1;
}

}

const MenuWheel = class {
#pizzaName = [
"Stark",
"Arryn",
"Baratheon",
"Martell",
"Tyrell",
"Lannister",
"Greyjoy",
"Tully",
];
#recipes=[stark,arryn, baratheon,martell,tyrell,lannister,greyjoy,tully];
#menuLength;
#maxSpins = 4;
#position= 0;
#destiny = 0;

constructor() {
this.menu = this.#pizzaName;
this.#menuLength = this.#pizzaName.length;
this.max = this.#menuLength;
this.spins = this.#maxSpins;
this.wheelImage = document.querySelector("#wheel");
this.resultPara = document.querySelector("#result-para");
this.recipePara = document.querySelector("#recipe-para");
this.spinBtn = document.querySelector("#spin-button");
this.recipes = this.#recipes;


}

spin() {

const randomChoice= randomNumber(this.max);
console.log(`random choice is ${randomChoice}`);
this.#destiny= randomChoice;
const spinTravel = calcTravel(this.#position, this.#destiny, this.#menuLength);
console.log(`Spin travel is ${spinTravel}`);
const randomFullSpin = randomNumber(4);
console.log(`randomFullSpin is: ${randomFullSpin}`)
const spinDistance = spinTravel * 45;
console.log(`spinDistance is ${spinDistance}`)



this.wheelImage.style.transition = "transform 2s linear ";
this.wheelImage.style.transform = `rotate(-${spinDistance}deg)`;



setTimeout(() => {
let recipe =this.#pizzaName[randomChoice-1].toLowerCase();
console.log(`recipe is: ${recipe}`);
let chosenrecipe= this.#pizzaName[randomChoice-1].toLocaleLowerCase();
console.log(chosenrecipe)
this.resultPara.innerHTML = `<strong>${this.#pizzaName[randomChoice-1]}</strong>`;
this.recipePara.innerHTML = this.#recipes[randomChoice-1];
}, 2000); 
}
};


export const wheelSpinner = new MenuWheel();

