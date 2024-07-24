const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGYzMGM1OTA4YjgzYzQ5ZDA4Yjg4MmIwYWRhZDljZSIsIm5iZiI6MTcxOTQ5ODA3NC4yMTg0ODUsInN1YiI6IjY2N2Q2ZGUyNTExNzlmNDFmOWI0OTQ3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KTVAJhsFTofVBLb0J-lxPWQsHKZr5bURCakXiSXl9aQ'
    }
  };
  
  fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
    .then(response => response.json())
    .then((data) =>{
      movies(data.results)
      console.log(movies);
    })
  
    
    let container = document.querySelector(".container")
    let imageUrl = "https://image.tmdb.org/t/p/w500";

    function movies(data){
        
      data.forEach(movies => {
        const {poster_path,name,overview} = movies;
        let createMovie = document.createElement('div')
        createMovie.classList.add("movies");
        createMovie.innerHTML = `
            <div class="swiper-slide">
            <a href="" class="Tv-card">
            <div class="movie-card-image">
                <img src="${imageUrl+poster_path}" class="img">
            </div>
            <div class="movie-info">
                <div class="info-content">
                <h5>${name}</h5>
                <p>Release: <span></span></p>
                </div>
                <div class="overview-body">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640h-80v280l-100-60-100 60v-280H240v640Zm0 0v-640 640Zm200-360 100-60 100 60-100-60-100 60Z"/></svg>
                <div class="overview-hover-item">
                    <div class="overview-item custom-scrollbar">
                    ${overview}
                    </div>
                </div>
                </div>
            </div>
            </a>
        </div> 
        `
         container.appendChild(createMovie)
      });
    }