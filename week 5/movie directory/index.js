async function getMovieDetails(title) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=8d930264`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

function displayMovieDetails(movie) {
    const movieDetailsContainer = document.getElementById('movie-details');
    movieDetailsContainer.innerHTML = `<h2>${movie.Title}</h2>
     <img src="${movie.Poster}" alt="${movie.Title} poster">
     <p><strong>Year:</strong> ${movie.Year}</p>
    <p><strong>Genre:</strong> ${movie.Genre}</p>
    <p><strong>Director:</strong> ${movie.Director}</p>
    <p><strong>Actors:</strong> ${movie.Actors}</p>
    <p><strong>Plot:</strong> ${movie.Plot}</p>
    <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>`;
}

const form = document.getElementById('movie-form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = document.getElementById('movie-title').value;
    const movie = await getMovieDetails(title);
    displayMovieDetails(movie);
});