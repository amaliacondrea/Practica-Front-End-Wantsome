var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

//Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]

var Person = function() {};

Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
}

var Trainer = function(subject) {
  this.subject = subject;
  this.teach = function (){
    return `${this.name} is now teaching ${this.subject}`; 
  }
}

Trainer.prototype = new Person();

const trainer = new Trainer("matematica");
trainer.initialize("Cristina",30);
console.log(trainer.teach());
