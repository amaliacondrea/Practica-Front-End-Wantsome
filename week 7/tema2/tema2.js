/*
Scrieti o functie care sa protejeze emailul unui user
de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

*/

function protectEmail(email) {
    var str = "";
    for (var i = 0; i < email.length; i++) {
        if (i > 2 && i < email.indexOf("@")) {
            str += "..."
        } else {
            str += email[i];
        }
    }
    console.log(str);

}
protectEmail("amalia@email.com")

/* ex 2
Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string de ex:
myFunction("i am superman") sa printeze "I Am Superman"

........
-declaram o  functie care accepta un string ca si parametru
-impartim stringul intr-un array (strToArray)//dupa spatiu- cu split// pt fiecare cuvant
-declaram o variabila result ca si string gol
-parcurgem strToArray
//strToarray[i] o sa fie pe rand: "i", apoi "am" apoi "superman"
result = result.concat( StrToArray[1].slice(0,1).toUpperCase().concat strToArray[i].splice(1)))
result = result.concat(" ");
*/

function firstLetterToUpperCase(str) {
    var strToArray = str.split(' ');
    var result = ' ';
    for (var i = 0; i < strToArray.length; i++) {
        result = result.concat(strToArray[i].slice(0, 1).toUpperCase().concat(strToArray[i].slice(1)));
        result = result.concat(' ');
    }
    return result;
}
console.log(firstLetterToUpperCase("i am superman"));

//ex3 
//crieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers 
//ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

function changeCase(s) {
    //impartim stringul intr-un array de caractere
    var resultStr = s.split("");
    // parcurgem array-ul
    for (var i = 0; i < resultStr.length; i++) {
        //verificam  fiecare element din array: daca  este LowerCase schimbam in Upper si invers;
        if (resultStr[i] !== resultStr[i].toLowerCase()) {
            resultStr[i] = resultStr[i].toLowerCase();
        } else {
            resultStr[i] = resultStr[i].toUpperCase();
        }
    }
    //returnam array-ul ca string.
    return resultStr.join('');
}
console.log(changeCase("xxXyYzZZ"));

//ex 4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"


function concateStr(str, nr) {
    //declaram un empty string
    var result = "";
    //parcurgem stringul de la 0 pana la numarul declarat ca parametru
    for (var i = 0; i < nr; i++) {
        result = result + str;
    }
    return result;

}

console.log(concateStr("Wantsome", 3));

//ex5
//A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'. 
//Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante

function isSymmetrical(arr) {
    //parcurgem arrayul pana la jumatate
    for (let i = 0; i < arr.length / 2; i++) {
        //verificam daca corespund elementele pe pe pozitiile extreme (de ex: primul element cu ultimul, al doilea cu penultimul etc.) si returnam true sau false;
        if ((arr[i] != arr[arr.length - i - 1])) {
            return false;
        }
    }
    return true;
}
console.log(isSymmetrical("acca"));

/* ex 6

6. Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice 
si returneaza un array care contine ca si elemente cele mai mari numere din fiecare array
*/

function arrMax(arr) {

    /* var max=[0,0,0];
     for(var i=0; i<arr.length; i++){
         for(var j=0; j<arr[i].length; j++){
             if(arr[i][j]>max[i]){
                 max[i]=arr[i][j];   
             }
         }
     }
     return max;
   */

    //am creat un array gol unde vor fi stocate numerele cele mai mari din fiecare array
    let finalArr = [];
    //am parcurs arrayul 
    for (let i = 0; i < arr.length; i++) {
        // am folosit functia Math.max() care alege numerele cele mai mari din array si am adaugat  in acelasi timp elementele gasite in finalArr
        finalArr.push(Math.max(...arr[i]))
    }
    return finalArr;
}
console.log(arrMax([[1, 2, 3], [8, 9, 5], [52, 42, 21, -7, 3]]));


/*
7. Implementati o functie care face reverse la un string 
*/

function reverseString(str) {

    // am declarat un string gol
    let revString = "";
    //am parcurs stringul initial in sens invers. 
    for (let i = str.length - 1; i >= 0; i--) {
        // am adaugat 'elemente' stringului creat pt fiecare iteratie 
        revString += str[i];
    }
    return revString;
}
console.log(reverseString('Amalia'));

/*
8. Implementati o functie care calculeaza factorialul unui numar
*/

function factorial(nr) {
    if (nr < 0) {
        return -1;
    } else if (nr === 0) {
        return 1;
    } else {
        return nr * factorial(nr - 1);
    }
}
console.log(factorial(5));

function factorialize(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
console.log(factorialize(7));

/*
9.Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma

*/

function compareStrings(str1, str2) {
    return str1.endsWith(str2);
}

console.log(compareStrings('kinetoterapie', 'terapie'));

/*
10. Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care trece testul specificat
*/

function firstIndex(arr, isTrue) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === isTrue) {
            return arr[i];
        }
    }
    return false;
}
console.log(firstIndex(['pix', 'creion', 'hartie'], 'hartie'));

/*
11. Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea string
*/

function containsAllTheLetters(str1, str2) {
    // am transformat stringurile in array
    var lettersFromStr1 = str1.split('');
    var lettersFromStr2 = str2.split('');
    //am parcurs arrayurile si am incercat sa ma folosesc de functia 'includes '
    for (var i = 0; i < lettersFromStr2.length; i++) {
        if (lettersFromStr1.includes(lettersFromStr2[i])) {
            return true;
        }
        return false;
    }
}
// si nu merge...
console.log(containsAllTheLetters('mere pere bla', 'mere cartof'));

/*
12. Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana cand intalneste elementul cu valoarea specificata

*/

function displayElements(arr, value) {
    //parcurg arrayul
    for (var i = 0; i < arr.length; i++) {
        //afisez elementele
        console.log(arr[i])
        //cand intalneste valoarea -> iese din functie;
        if (arr[i] === value) {
            return;
            //break;
        }
    }
}
displayElements([6, 7, 10, 9, 9, 0, 10], 9);

//13. Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN

function removeFalseValues(arr) {
    // parcurg arrayul
    for (var i = 0; i < arr.length; i++) {
        //verific valorile false si le sterg din array
        var invalid = arr[i] === false || arr[i] === null || arr[i] === 0 || arr[i] === "" || arr[i] === undefined || arr[i] === NaN;
        if (invalid) {
            delete arr[i];
        }
    }
    return arr;
}
//NaN-ul nu il sterge.
console.log(removeFalseValues([6, 9, null, 0, 8, undefined, 8, 7, NaN]));

