

/* ---- EX 1 ----

1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si 
va raporta acest lucru in consola. (exemplu: “2 este numar par”);
 Scrieti functia in doua variante: while si for.

*/

// Am declarat o functie cu numele "iterateWithFor" fara parametri,
function iterateWithFor() {
    //parcurg cu un for loop numerele de la 0 la 20
    for (var i = 0; i <= 20; i++) {
        //verific daca i este par...
        if (i % 2 === 0) {
            //... si afisez mesajul in care se precizeaza acest lucru
            console.log(i + " este numar par.")
        } else {
            // verific celalalt caz ramas (i impar), si afisez mesajul corespunzator.
            console.log(i + " este numar impar.")
        }
    }
}
//appelez functia creata.
iterateWithFor();

// Am declarat o functie cu numele "iterateWithWhile" fara parametri,
function iterateWithWhile() {
    //declar variabila i si ii asignez valoarea 0,
    var i = 0;
    //pun conditia in care i poate sa ia valori pana la 20 inclusiv
    while (i <= 20) {
        //verific daca i este par si afisez acest lucru prin console.log
        if (i % 2 === 0) {
            console.log(i + " este numar par.")
            //verific daca i este impar si afisez prin mesajul corespunzator
        } else {
            console.log(i + " este numar impar.")
        }
        //il incrementez pe i
        i++;

    }
}
//apelez functia creata.
iterateWithWhile();

/*
Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa rezultatul. (exemplu: “3*9=27”).
Scrieti functia in doua variante: while si fo
*/

//declar functia multiplyBy9
function multiplyBy9() {
    //parcurg cu un for numerele de la 0 la 10
    for (var i = 0; i <= 10; i++) {
        //afisez produsul fiecarui numar cu 9
        console.log(i * 9)
    }

}
//apelez functia
multiplyBy9();

//varianta cu while
function multiplyBy9withWhile() {
    var i = 0;
    while (i <= 10) {
        console.log(i * 9);
        i++;
    }
}
multiplyBy9withWhile();

/*
Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii. (exemplu: 1 * 0 = 0
1 * 1= 1
...
1 * 10 = 10 )
Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”.
*/
// 
// declar functia multiplicationtable
function multiplicationTable() {
    //parcurg cu un for primul numar (factor) al tablei inmultirii
    for (var i = 1; i <= 10; i++) {
        // parcurg cu un al doilea for al doilea factor
        for (var j = 0; j <= 10; j++) {
            // afisez produsul celor doi 
            console.log(i + " * " + j + " = " + i * j + "\n");
        }
    }
}
//apelez functia
multiplicationTable();

/*

Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se poate 
obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, 
obtii calificativul B \n ...samd “). Atentie: Rezultatul calificativului trebuie sa fie obtinut prin utilizarea functiei dezvoltate la tema anterioara !
*/

var grades = function (points) {

    var validInput = points >= 1 && points <= 10;

    var calificative = ["E", "D", "B", "A", "A+"];


    if (validInput) {
        if (points >= 1 && points <= 3) {
            return "Calificativul corespunzator punctajului " + points + " este: " + calificative[0];
        }
        else if (points > 3 && points < 6) {
            return "Calificativul corespunzator punctajului " + points + " este: " + calificative[1];
        }
        else if (points >= 7 && points <= 8) {
            return "Calificativul corespunzator punctajului " + points + " este: " + calificative[2];
        }
        else if (points === 9) {
            return "Calificativul corespunzator punctajului " + points + " este: " + calificative[3];
        } else {
            return "Calificativul corespunzator punctajului " + points + " este: " + calificative[4];
        }
    }
}

console.log(grades(6));

function displayGrades() {
    for(var i=1; i<=10; i++){
       console.log(grades(i))
    }
}
displayGrades();
