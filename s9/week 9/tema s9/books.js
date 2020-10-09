const books = [
    {
        title: 'The Power of Habit',
        author: 'Charles Duhigg',
        read: true,
        image:"https://d1v1e13ebw3o15.cloudfront.net/data/41281/pool_and_spa_master/..jpg"
        
    },
    {
        title: 'Mindset: The New Psychology of Success',
        author: 'Carol S. Dweck',
        read: false
    }];

// Creati o pagina web care are un h1 cu "Book List"
// adugati un script style unde sa tinem js-ul
//Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si faceti append in pagina noastra
//BONUS: folositi ul si li pentru a face display la carti
//BONUS: adaugati o proprietate pentru fiecare carte cu URL de la coverul cartii si adaugati un element img pentru fiecare (nu uitati sa adaugati img-ul si pe obiectul cartii - acolo va fi si poza)
//BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.





for (let i = 0; i < books.length; i++) {
    const book = document.createElement('p')
    book.textContent = books[i].title + " , " + books[i].author;
    document.body.appendChild(book)

}

const ul = document.createElement('ul')
document.body.appendChild(ul)

for (let i = 0; i < books.length; i++) {
    const li = document.createElement('li');
    li.textContent = books[i].author + ", " + books[i].title + books[i].read;
    console.log(li);
    ul.appendChild(li);  

}


