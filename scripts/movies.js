// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page




let movies = document.querySelector("#movies");
let array;

async function searcMOvie() {
    try {
        const query = document.querySelector("#que").value;
        const res = await fetch("https://www.omdbapi.com/?apikey=5cfd6243&s=${movie}");
        const data = await res.json();

        const movie = data.Search;
        return movie;
    } catch (err) {
        console.log("err:", err);
    }
}


function apppendMovie(data) {
    movies.innerText = null;

    data.forEach(function(e) {
        let search = document.createElement("p");
        search.innerText = e.Title;

        search.setAttribute("id", "searchName")
        movies.apppend(search);

        search.addEventListener("click", function() {
            let navbar = document.getElementById("wallet");
            navbar.innerHTML = null;


            let div = document.createElement("div")


            let image = document.createElement("img");

            image.src = e.Poster;

            let line1 = document.createElement("h3")
            line1.innerText = e.Title;
            let line2 = document.createElement("h3")
            line2.innerText = e.Year;

            div.append(div);
        });

    });
}