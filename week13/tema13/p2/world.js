
//Obiectul de mai jos il puneti intr-un fisier separat "world.json"
//faceti fech intr-un fisier separat de index.js
//importati fetch-ul in index.js
// stocati tot raspunsul in localStorage - hint - stringify
// Folosindu-va de html css si JS afisati autorul si tilul iar dedesubt video-ul sa putem da play(folositi media)
// in functie de rating afisati atatea stele cat are ratingul de exemplu daca ratingul e 3 afisam sub video * * *

// [
//     {"youtubeVideo": "https://www.youtube.com/watch?v=CBwKJfrm5-U",
//       "title": "Bali Travel Guide - How to travel Bali",
//       "author": "Allan Su",
//       "rating": 4
//     },
//     {"youtubeVideo": "https://www.youtube.com/watch?v=oSexfR0Ubzw",
//       "title": "Rome in 4k",
//       "author": "Around The World 4k",
//       "rating": 5
//     },
//     {"youtubeVideo": "https://www.youtube.com/watch?v=k7ZqiSKIB9g",
//       "title": "Glasgow Vacation Travel Guid",
//       "author": "Expedia",
//       "rating": 3
//     },
//     {"youtubeVideo": "https://www.youtube.com/watch?v=xl3QM22kWV0",
//       "title": "Around Malaysia",
//       "author": "Drone Around The world",
//       "rating": 2
//     }
//   ]


const items = fetch("./world.json")
    .then(res => res.json())
    .then(res => {
        let infoToStore = JSON.stringify(res);
        localStorage.setItem('info', infoToStore);
    })
    .catch(err => console.error(err));

const data = JSON.parse(localStorage.getItem('info'))
console.log(data)



let displayVideo = function (array) {
    array.forEach(element => {
        let container = document.createElement("div");

        let title = document.createElement("h1");
        title.innerText = element.title;
        container.appendChild(title);

        let author = document.createElement("h3");
        author.innerText = element.author;
        container.appendChild(author);

        let video = document.createElement("video");
        video.setAttribute("type", "video/mp4")
        video.controls = true;
        container.appendChild(video);

        let source = document.createElement("source");
        source.src = element.youtubeVideo;
        
        video.appendChild(source);


        let stars = document.createElement("p")

        let counter = "";
        for (i = 0; i < element.rating; i++) {
            counter += "*";
        }
        stars.innerText = counter;
        container.appendChild(stars);

        document.body.appendChild(container);
    });




}
displayVideo(data);


