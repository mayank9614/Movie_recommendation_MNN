const movies = [
    {
      title: "The Hangover",
      year: 2009,
      genre: "comedy",
      rating: 7.7,
      image: "https://www.themoviedb.org/t/p/w185_and_h278_bestv2/gHXn8eGg2mCQD6VvY6N5kDc78O6.jpg"
    },
    {
      title: "Bridesmaids",
      year: 2011,
      genre: "comedy",
      rating: 6.8,
      image: "https://www.themoviedb.org/t/p/w185_and_h278_bestv2/iVZ3JAcAjmguGPnRNfWFOtLHOuY.jpg"
    },
    {
      title: "Superbad",
      year: 2007,
      genre: "comedy",
      rating: 7.0,
      image: "https://www.themoviedb.org/t/p/w185_and_h278_bestv2/8fvPUWpDX1J9YpERFANf2yW1sNF.jpg"
    },
    // add more movies here
  ];
  
  const moviesContainer = document.querySelector("#movies ul");
  
  function generateMovieCard(movie) {
    const li = document.createElement("li");
    li.classList.add("movie-card");
  
    const image = document.createElement("img");
    image.src = movie.image;
    image.alt = movie.title;
    li.appendChild(image);
  
    const title = document.createElement("h3");
    title.textContent = movie.title;
    li.appendChild(title);
  
    const year = document.createElement("span");
    year.classList.add("year");
    year.textContent = movie.year;
    li.appendChild(year);
  
    const rating = document.createElement("span");
    rating.classList.add("rating");
    rating.textContent = movie.rating;
    li.appendChild(rating);
  
    return li;
  }
  
  function displayMoviesByGenre(genre) {
    moviesContainer.innerHTML = "";
    
    const genreMovies = movies.filter(movie => movie.genre === genre);
    
    genreMovies.forEach(movie => {
      const card = generateMovieCard(movie);
      moviesContainer.appendChild(card);
    });
  }
  
  const genreSelect = document.querySelector("#genre-select");
  
  genreSelect.addEventListener("change", () => {
    const selectedGenre = genreSelect.value;
    if (selectedGenre === "all") {
      moviesContainer.innerHTML = "";
      movies.forEach(movie => {
        const card = generateMovieCard(movie);
        moviesContainer.appendChild(card);
      });
    } else {
      displayMoviesByGenre(selectedGenre);
    }
  });
  
  displayMoviesByGenre("comedy");
  