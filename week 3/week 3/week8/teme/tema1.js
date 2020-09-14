//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

function calculate(a, b) {
    if (a !== b) {
        return a + b;
    } else {
        return (a + b) * 5;
    }
}
console.log(calculate(10, 5));
console.log(calculate(10, 10));


//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

function isEqualTo30(a, b) {
    ;
    let sum = a + b
    return (a === 30 && b === 30) || sum === 30;
}

console.log(isEqualTo30(30, 30));
console.log(isEqualTo30(15, 15));
console.log(isEqualTo30(10, 15));

//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

function verifyString(str) {
    let addJS = 'JS'
    if (!str.startsWith(addJS)) {
        return addJS.concat(str);
    } else if (str === '') {
        return ''.concat(addJS);
    } else {
        return str;
    }
}
console.log(verifyString('JSisAwsome'));
console.log(verifyString('isEasy'));
console.log(verifyString(''));

//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234


function removeDuplicates(x) {
    var unique = '';
    //pt string
    for (let i = 0; i < x.length; i++) {
        if (unique.indexOf(x[i]) == -1) {
            unique += x[i];
        }
        //pt numar--- neterminat
        if (typeof x === 'number' && unique.indexOf(x[i]) == -1) {
            unique += parseInt(x[i], 10);
            //transforma nr in string....
            // parseInt(x[i], 10);

        }
    }
    return unique;
}
console.log(removeDuplicates('aabcdeef'));
console.log(removeDuplicates(122334));

//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'/

function findLongestString(str) {

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
console.log(findLongestString('Wantsome is Awsomeeee today'));

//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

function displayStars() {
    let n = 5;
    let str = "";
    for (let i = 0; i < n; i++) {
        str += "*"
        console.log(str);

    }
}
displayStars();

//ex7
const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
    // append any negative numbers found in the numbers array 
    // into the negativeNumbers array constant variable above
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeNumbers.push(numbers[i]);
        }
    }
    return negativeNumbers;
}
console.log(extractNegativeNumbers([1, 2, -5, 4, -6]));

//ex8 - -----facut in saptamana 7---
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

function isDiv(n) {
    if (n % 5 === 0 && n % 3 === 0) {
        console.log("BOTH");
    } else if (n % 3 === 0) {
        console.log("THREE");
    } else if (n % 5 === 0) {
        console.log("FIVE");
    } else {
        console.log(n);
    }
}

isDiv(15);
isDiv(9);
isDiv(7);

//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38

//gasit pe w3resource -> l-am simplificat putin :)

var today = new Date();
var day = today.getDay();
var daylist = ["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"];
console.log("Astazi este : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
console.log("Ora este : " + hour + prepand + " : " + minute + " : " + second);

//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

function validPin(pin) {

    let validLength = pin.length === 4 || pin.length === 6
    if (validLength) {
        return !/\D/.test(pin)
    } else {
        return false;
    }
}
console.log(validPin("1234"));
console.log(validPin("12345"));
console.log(validPin("z23f"));

//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"


function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}
console.log(removeVowels("Hey I am developer"));

//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false

function isSquareNumber(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
}
console.log(isSquareNumber(-1));
console.log(isSquareNumber(25));
console.log(isSquareNumber(3));

//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

function isAnagram(str1, str2) {
    let a = str1.toLowerCase().split('').sort().join('').trim();
    let b = str2.toLowerCase().split('').sort().join('').trim();

    if (a === b) {
        return true;
    }
    return false;
}
console.log(isAnagram("School master", "The class room"));
console.log(isAnagram("silent", "listen"));