// 1. Scrieti o functie sub forma named function care accepta ca argument un CNP 
// si verifica sexul unei persoane. In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".



//---ex 1---//
/*
Am creat o functie "gender", care primeste ca parametru un cnp.
Am transformat numarul(cnp) in string, si am extras prima cifra,
In functie de valoarea primei cifre din CNP, am tratat urmatoarele 3 cazuri:
   1) daca prima cifra este "1", atunci sexul persoanei verificate va fi M,
   2) daca prima cifra este  "2", atunci sexul persoanei verificate va fi F,
   3) am adaugat si al treilea caz pentru restul cazurilor. 


*/
function gender(cnp) {

    var firstDigit = cnp.toString()[0];

    if (firstDigit === '1') {
        return "Persoana verificata este de sexul M."
    } else if (firstDigit === '2') {
        return "Persoana verificata este de sexul F."
    } else {
        return "Invalid input."
    }

}

console.log(gender(289101690798));


// 2. Scrieti o functie sub forma function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si decide calificativul punctajului. Criteriile sunt urmatoarele:
// - 1-3 = E
// - 3-6 = D
// - 7-8 = B
// - 9 = A
// - 10 = A+
// Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]"


/*
Am creat o functie-expresie care primeste un parametru "points",  am declarat variabila "validInput" care sa accepte ca input numai numere de la 1 la 10;
Am creat si un array de stringuri, in care am stocat toate calificativele corespunzatoare punctelor, iar apoi am tratat fiecare caz in parte, astfel incat functia 
sa returneze calificativul corespunzator fiecarui puunct.

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

console.log(grades(8));

// 3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma: 
// "Marca [marca] se produce in [tara]". Trebuie sa aveti macar 6 cazuri. In cazul in care functia nu recunoaste marca, 
// va returna "Marca este necunoscuta. " Scrieti codul in 3 variante diferite. In declararea functiei trebuie sa se regaseasca o functie anonima. 
// Una dintre implementari trebuie sa fie bazata pe Object Literals 
// ( read:  https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals )



//--------Varianta 1--------------//

var cars0 = function (brandName) {
    var car = {
        'Audi': 'Germania',
        'Mini Cooper': 'Anglia',
        'Honda': 'Japonia',
        'Dacia': 'Romania',
        'Nissan': 'Mexic',
        'Renault': 'Franta',
        'default': 'Marca necunoscuta',
    };

    return "Marca " + brandName + " se produce in " + car[brandName] || car['default'];

}
console.log(cars0('mnn'));


//----------Varianta 2---------------//

var cars1 = function (brandName) {
    switch (brandName) {
        case 'Audi': {
            return "Marca " + brandName + " se produce in Germania";

        }
            break;
        case 'Mini Cooper': {
            return "Marca " + brandName + " se produce in Anglia";
        }
            break;
        case 'Honda': {
            return 'Marca ' + brandName + ' se produce in Japonia';
        }
            break;
        case 'Dacia': {
            return 'Marca ' + brandName + ' se produce in Romania';
        }
            break;
        case 'Nissan': {
            return 'Marca ' + brandName + ' se produce in Mexic';
        }
            break;
        case 'Renault': {
            return 'Marca ' + brandName + ' se produce in Franta';
        }
            break;
        default: {
            return 'Marca necunoscuta';
        }

    }

}
console.log(cars1('Mini Cooper'));


//--------------Varianta 3---------------//


var cars2 = function (brandName) {
    if (brandName === 'Audi') {
        return "Marca " + brandName + " se produce in Germania";
    } else if (brandName === 'Mini Cooper') {
        return "Marca " + brandName + " se produce in Anglia";
    } else if (brandName === 'Honda') {
        return 'Marca ' + brandName + ' se produce in Japonia';
    } else if (brandName === 'Dacia') {
        return 'Marca ' + brandName + ' se produce in Romania';
    } else if (brandName === 'Nissan') {
        return 'Marca ' + brandName + ' se produce in Mexic';
    } else if (brandName === 'Renault') {
        return 'Marca ' + brandName + ' se produce in Franta';
    } else {
        return 'Marca necunoscuta';
    }
}
console.log(cars2('Dacia'));

// 4. Scrieti o functie de tip IIFE care:
// - sorteaza urmatorul array in functie de proprietatea "salary" a fiecarui obiect continut:
// var cars = [
//   {name: "John",  salary: 20000 },
//   { name: "Danny", salary: 30500 },
//   { name: "Bekker", salary: 15000 }
// ];
// - afiseaza in consola array-ul sortat


/*
In corpul unei functii  de tip IIFE am creat declarat variabila "cars", careia i-am asignat un array de 3 obiecte.
Am declarat o a doua variabila "sortedArr", care va stoca array-ul de obiecte sortat, in functie de proprietatea "salary", utilizand  functia sort().

*/

(function () {
    var cars = [
        { name: "John", salary: 20000 },
        { name: "Danny", salary: 30500 },
        { name: "Bekker", salary: 15000 }
    ];
    var sortedArr = cars.sort(function (a, b) {
        return a.salary - b.salary;
    })

    console.log(sortedArr);

})();