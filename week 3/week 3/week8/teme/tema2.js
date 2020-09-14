/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata

*/

const sumOfNumbers = (n) => {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum;
}
console.log(sumOfNumbers(16));

/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/

const longestString = (str) => {
    let words = str.split(' ');
    let longestWord = 0;
    word = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord) {
            longestWord = words[i].length;
            word = words[i];
        }
    }
    return word;
}

console.log(longestString('akdkd dlkjlkjjkljlkjklj sdkmse'));

/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/

const reverseString = (str) => {

    let revString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revString += str[i];
    }
    return revString;
}
console.log(reverseString('cartof'));

/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/

const nextLetterInAlphabet = (s) => {

    let letters = s.split('');
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === "z") {
            letters[i] = "a";
        } else if (letters[i] === "Z") {
            letters[i] = "A";
        } else {
            letters[i] = String.fromCharCode(letters[i].charCodeAt(0) + 1);
        }
    }
    return letters.join('');
}
console.log(nextLetterInAlphabet("abcxYzv"));

/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/
const convertToTime=(n)=>{
    let hours = parseInt(n/60, 10);
    let minutes = n%60
    return hours + ":"+ minutes;
}
console.log(convertToTime(64));
/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/

const sortedString= (s)=>{
    let chars = s.split('');
    return chars.sort().join('');
}
console.log(sortedString('fhgfdaluteadhjfjb'));
