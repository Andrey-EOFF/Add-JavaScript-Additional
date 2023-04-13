const searchForm = document.querySelector("form");
const searchInput = document.querySelector('input[type="text"]');
const searchButton = document.querySelector("button");

searchForm.addEventListener("submit", searchMovies);

async function searchMovies(event) {
  event.preventDefault();
  const searchText = searchInput.value;
  const apiKey = "6bc047b88f669d1fb86574f06381005d93d3517a"; // Replace with your API key
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // Process the movie search results here
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
