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


document.addEventListener('DOMContentLoaded', () => {
    
    const btn = document.getElementById("searchMovie");

    

})