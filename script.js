function Movie(name, director, actor, length, description) {
    this.name = name,
    this.director = director,
    this.actor = actor,
    this.length = length,
    this.description = description,
    this.info = function() {
        console.log(`Movie name: ${this.name}, directed by ${this.director}, main actor: ${this.actor}, runtime: ${this.length}, description: ${this.description}}`)
    }
}

const movieLibrary = [];

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById("searchMovie");
    const newMovieBtn = document.getElementById("newMovieBtn");
    const movieName = document.getElementById("movie_name");
    const director = document.getElementById("director");
    const actor = document.getElementById("actor");
    const movieLength = document.getElementById("movLength");
    const description = document.getElementById("description");

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
    
                const newMovie = new Movie(movieNameValue, directorValue, actorValue, movieLengthValue, descriptionValue);
    
                const relevantName = movieNameValue.toLowerCase();

                movieLibrary[relevantName] = newMovie;
            
                movieName.value = "";
                director.value = "";
                actor.value = "";
                movieLength.value = "";
                description.value = "";
    
                console.log('new movie entry created')
            }
        }
   

})