//1. creati o clasa Account care sa aiba location si name la constructor
//2. creati o clasa Transaction care sa iba sender, bank, amount si reference la constructor
//2.1 - clasa Transaction sa aiba un getter finalSum() care sa scada din amount 10;
//3. creati o clasa Table care sa aiba in cunstructor un array gol transactions
//3.1 Clasa Table sa aiba o metoda addTransaction unde sa putem adauga tranzactiile pe care o sa le creem mai tarziu


// const bankAccount = ...;
// const transaction1 = ...;
// const transaction2 = ...;
// const table = ...;
// table.addTransaction(...)
// console.log(table)

class Account {
    constructor(location, name) {
        this.location = location;
        this.name = name;
    }
}

class Transaction {
    constructor(sender, bank, amount, reference) {
        this.sender = sender;
        this.bank = bank;
        this.amount = amount;
        this.reference = reference;
    }

    get finalSum() {
        return this.amount - 10;
    }
}

class Table{
    constructor(){
       this.transactions=[];
    }
    addTransactions(val){
       return  this.transactions.push(val);
    }
}

const bankAccount= new Account("Iasi","Bruna");
const transaction1= new Transaction("Oana","ING", 400, "08876444");
const transaction2= new Transaction("Ema","BNP-Paribas", 800, "907544");
const table = new Table();
table.addTransactions(transaction1);
table.addTransactions(transaction2);
console.log(table);