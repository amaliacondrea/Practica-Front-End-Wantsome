//Ex1. 
//Setati 3 cookie-uri cu numele, profesia si varsta voastra
//Stocatile in 3 variabile dupa si afisatile in consola
//Setati 2 cookie-uri (cu ce valori vreti voi) care sa expire la un momendat
// Stocatile si pe astea in alte 2 variabile
// La final vrem sa vedem 5 cookieuri in console.log


const setCookie = () => {
    const name = document.cookie = `name=Amalia Condrea`;
    console.log(name);

    const profession = document.cookie = `profession=Physical Therapist`;
    console.log(profession);

    const age = document.cookie = `age=30`
    console.log(age);

    const date = new Date();
    date.setTime(date.getTime() + 1789 * 1000);

    const exp1 = document.cookie = `City=Carcassonne,expires=${date}`
    console.log(exp1)

    const exp2 = document.cookie = `Country=France,expires=Vendredi, 30 Nov 2020 12:00:00 UTC`
    console.log(exp2)

}

setCookie()

//Ex2. 
//Stocati in localStorage urmatoarele chei si valori ("width" "100px") ("height" "100px") ("background-color" "green")
//stocatile in 3 variabile diferite
// folositile pentru a construi un patrat cu ele

const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}
let w =  saveToLocalStorage("width", "100px");
let h = saveToLocalStorage("height", "100px");
let bg = saveToLocalStorage("background-color", "green");




const getFromLocalStorage=(key)=>{
    const value=localStorage.getItem(key);
    console.log(value);
    return value;  
}

let getW = getFromLocalStorage("width");
let getH = getFromLocalStorage("height");
let getBg = getFromLocalStorage("background-color");

const square = document.createElement("div")
square.style.width=getW;
square.style.height=getH;
square.style.backgroundColor=getBg;


document.body.appendChild(square);

