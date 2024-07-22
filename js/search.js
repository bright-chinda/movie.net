// // const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://api.themoviedb.org/3/search/keyword?page=1')
// //   .then(response => response.json())
// //   .then(response => console.log(response))
// //   .catch(err => console.error(err));


//     // Function to fetch movie search results
//     async function fetchMovies(query) {
//     try {
//         const response = await fetch('https://api.themoviedb.org/3/search/movie?eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGYzMGM1OTA4YjgzYzQ5ZDA4Yjg4MmIwYWRhZDljZSIsIm5iZiI6MTcxOTQ5ODA3NC4yMTg0ODUsInN1YiI6IjY2N2Q2ZGUyNTExNzlmNDFmOWI0OTQ3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KTVAJhsFTofVBLb0J-lxPWQsHKZr5bURCakXiSXl9aQ');
        
//         if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         displayMovies(data.results);
//     } catch (error) {
//         console.error('An error occurred:', error.message);
//     }
//     }

//     let searchBtn = document.querySelector(".search-btn")
//     let searchInput = document.querySelector(".search-movie-body input")
//     searchInput.addEventListener("input", (e) => {
//     let query = e.target.value.trim();
//     if (query){
//         fetchMovies(query)
//     }
    // })