function Movie(name, director, actor, length, description, watched) {
    this.name = name,
    this.director = director,
    this.actor = actor,
    this.length = length,
    this.description = description,
    this.watched = watched
    this.info = function() {
        console.log(`Movie name: ${this.name}, directed by ${this.director}, main actor: ${this.actor}, runtime: ${this.length}, description: ${this.description}}`)
    }
}

Movie.prototype.toggleWatched = function() {
    this.watched = !this.watched;
}

function toggleWatche(index) {
    movieLibrary[index].toggleWatched();
    render();
}

const movieLibrary = [];

document.addEventListener('DOMContentLoaded', () => {
    const newForm = document.getElementById("newForm");
    const searchBtn = document.getElementById("searchMovie");
    const newMovieBtn = document.getElementById("newMovieBtn");
    const movieName = document.getElementById("movie_name");
    const director = document.getElementById("director");
    const actor = document.getElementById("actor");
    const movieLength = document.getElementById("movLength");
    const description = document.getElementById("description");
    const newMovieForm = document.querySelector(".newMovie");
    

    newForm.addEventListener("click", () => {
        newMovieForm.style.display = "block";
    });
    
    newMovieBtn.addEventListener('click', createNewEntry);
    
    function createNewEntry() {
        if(movieName.value === "" || director.value === "" || actor.value === "" || movieLength.value === "" || description.value === "") {
                alert("fill all fields")
            } else {
                const movieNameValue = movieName.value;
                const directorValue = director.value;
                const actorValue = actor.value;
                const movieLengthValue = movieLength.value;
                const descriptionValue = description.value;
                const watchedValue = watched.checked
                
                const newMovie = new Movie(movieNameValue, directorValue, actorValue, movieLengthValue, descriptionValue, watchedValue);
                
                movieLibrary.push(newMovie)
    
/*              const relevantName = movieNameValue.toLowerCase();

                movieLibrary[relevantName] = newMovie; */
            
                movieName.value = "";
                director.value = "";
                actor.value = "";
                movieLength.value = "";
                description.value = "";
                
                console.log('new movie entry created')
                render();
                /* newMovieForm.style.display = "none"; */
                
            }
        }
})

    function render() {
        let movieList = document.querySelector(".movieList");
        movieList.innerHTML = "";
        for(let i = 0; i < movieLibrary.length; i++) {
            let movie = movieLibrary[i];
            let movieEl = document.createElement("div")
            movieEl.innerHTML = `<div class="card">
                                    <div class="card-header">
                                        <h2>${movie.name}</h2>
                                    </div>
                                    <div class="card-body">
                                        <h3>Directed By ${movie.director}</h3>
                                        <h3>Main Actors: ${movie.actor}</h3>
                                        <h3>Length: ${movie.length}</h3>
                                        <h3>Summary: ${movie.description}</h3>
                                        <p class="watched-status">${movie.watched ? "Watched" : "Not Watched"}</p>
                                        <button id="toggle-watched" onclick="toggleWatche(${i})"> Toggle Watched </button>
                                        <button id="delete-card" onclick="deleteCard(${i})"> Remove </button>
                                    </div>
                                </div>`;
            movieList.appendChild(movieEl);
        }
    }
        
        function deleteCard(index) {
            movieLibrary.splice(index, 1);
            render();
        }