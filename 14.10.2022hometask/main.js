function Film(name, IMDB, janr, director, image) {
    this.name = name;
    this.imdb = IMDB;
    this.image = image;
    this.director = director;
    this.janr = janr;
}
Film.prototype.toString = function() {
    return this.name + "" + this.image
}

let Avengers = new Film("Avengers", "IMDB: 8.4", "Adventure", "Director: Todd Anthony Russo", "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810")
let Interstellar = new Film("Interstellar", "IMDB: 8.6","Sci-Fi", "Director: Christopher Nolan", "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg")
let Joker = new Film("Joker", "IMDB: 8.4", "Crime", "Director: Todd Phillips", "https://i0.wp.com/bunker158.com/wp-content/uploads/2020/05/the-joker-2019-arthur-fleck-prime1-blitzway-bunker158-statue-1.jpg?fit=1060%2C1500&ssl=1")


let films = [Avengers, Interstellar, Joker];
let box = document.getElementById("box");
getFilms();
function getFilms(){
    box.innerHTML = "";
    for (const film of films) {
        box.innerHTML +=
        `<div class="col-md-2 card height-card mt-5">
                    <img src="${film.image}" class="w-100 height">
        </div>
        <div class="col-md-2">
                    <h1 class="fs-3 mt-5 h1-1">${film.name}</h1>
                    <h3 class="fs-5 mt-3 mb-4 h3-1">${film.director}</h3>
                    <button class="btn-color2 text-light mb-2 mt-5">${film.janr}</button><br>
                    <button class="btn-color text-light">${film.imdb}</button>
        </div>`
    }
}
let idName = document.getElementById("Name");
let idimgUrl = document.getElementById("imgUrl");
function CreateFilms(){
    idName.innerHTML = "";
    idimgUrl.innerHTML = "";
    films.push(new Film(idName.value, "IMDB: 7.7", "Adventure", "Director: Christopher Nolan", idimgUrl.value))
    getFilms();
}