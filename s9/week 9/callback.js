//exemplu 1
function one(){
    console.log('one');
}

function two(){
    console.log('two');
}

one();
two();

//exemplu 2

function first(){
    console.log('first');
}
function second(){
    console.log('second');
}

function third(){
    console.log('third');
    first();
    second();
}

third();

//exemplu 3
function ana(){
    console.log('ana');
}

function are(){
    setTimeout(()=>console.log('are'),500);
   // var user = getUser();

}

function mere(){
    console.log('mere');
}

const altaFunctie =()=>{
    const name ='adrian';
    console.log(`this is ES6, ${name}`);
}
ana();
are();
mere();

altaFunctie('Adrian');

const subject = 'matematica';
const subject2= 'istorie';
const doHomework =(subject, callback)=>{
    console.log(`am inceput tema la ${subject}`);
    callback();
}
const callback = ()=>{
    console.log (`am terminat tema la matematica`);
}
doHomework(subject, callback);
doHomework(subject, callback);