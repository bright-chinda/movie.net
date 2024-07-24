

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGYzMGM1OTA4YjgzYzQ5ZDA4Yjg4MmIwYWRhZDljZSIsIm5iZiI6MTcxOTQ5ODA3NC4yMTg0ODUsInN1YiI6IjY2N2Q2ZGUyNTExNzlmNDFmOWI0OTQ3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KTVAJhsFTofVBLb0J-lxPWQsHKZr5bURCakXiSXl9aQ'
    }
  };

  

  
  let throwError = document.querySelector(".movie-error")

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then((res) => res.json())
    .then((value) => {
      movies(value.results)
      console.log(value);
    })
    .catch(err => {
      throwError.style.display ="block"
    })
    

    let main = document.querySelector(".main")
    let imageUrl = "https://image.tmdb.org/t/p/w500";
    // let backdropUrl = "https://image.tmdb.org/t/p/w500";

     function movies(data) {
      main.innerHTML ="";
      data.forEach(movies => {
        const {title,poster_path,overview,release_date} =  movies;
        let moviElement = document.createElement("div");
        moviElement.classList.add('movies')
        let movieLink = document.createElement("a");
        movieLink.href = `movie-datails.html?id=${movies.id}`;
        movieLink.target = "_blank";
        moviElement.dataset.movieId = movies.id;
        moviElement.innerHTML = `
          <div class="swiper-slide">
            <a href="movie-details.html?id=${movies.id}" class="movie-card">
              <div class="movie-card-image">
                 <img src="${imageUrl+poster_path}" class="img">
              </div>
              <div class="movie-info">
                <div class="info-content">
                  <h5>${title}</h5>
                  <p>Release: <span>${release_date}</span></p>
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
        main.appendChild(moviElement)
        
        // moviElement.addEventListener("click", () =>{
        //   window.location.href = `movie-details.html?id=${movies.id}`;
        // })

      });
    }

    // let searchBtn = document.querySelector(".search-btn")
    let searchInput = document.querySelector("#search-input")
    let loader = document.querySelector(".loader-container")
    let pageText = document.querySelector("h4")

      function searchBtn (){
        loader.classList.add("visible")
        fetch(`https://api.themoviedb.org/3/search/movie?query=${searchInput.value}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
  
        .then(data => {
          movies(data.results)
          console.log(data);
          setTimeout(()=>{
            loader.classList.remove("visible")
        }, 4000)
          pageText.innerHTML = "Results for " + `${searchInput.value}`;
          searchInput.value = "";

        })
        .catch(err => {
          loader.classList.remove("visible")
        })
        

      }

      let lightModeIcon = document.querySelector(".light-mode-icon")
      let darkModeIcon = document.querySelector(".dark-mode-icon")
      let colorModeButton = document.querySelector(".color-mode-button")
      let colorBody = document.querySelector(".movie-container")
      let colorModeTextContent = document.querySelector(".color-mode-text")

      // colorBody.innerHTML=localStorage.getItem("black")


      colorModeButton.addEventListener("click",()=> {
        colorBody.style.backgroundColor = "black";
        darkModeIcon.classList.toggle("visible")
        if (darkModeIcon.classList.contains("visible")) {
          lightModeIcon.style.display = "none";
          // colorModeTextContent.textContent = "Dark Mode"
          // localStorage.setItem("black")
          // colorBody.innerHTML=localStorage.getItem("black")
        }else if (!darkModeIcon.classList.contains("visible")){
          lightModeIcon.style.display = "block";
          colorBody.style.backgroundColor = "white";
          colorModeTextContent.textContent = "Light Mode"
        }
      })




  


      // function getpost (){
      //   let output = "";
      //   posts.forEach(element => {
      //     output = `<div>${posts.title}</div>`
      //   });
      //   document.body.innerHTML = output;
      // console.log(posts);
      // }
      // getpost ()


   

    // searchBtn.addEventListener("click", (e)=>{
    //   if (searchInput.value.trim()){
    //     moviesArray = moviesArray.filter(movie =>
    //       movie.title.toLowerCase().includes(searchInput.value) || movie.overview.includes(searchInput.value)
    //     )
    //     console.log(moviesArray);

    //   }else{
    //     main.innerHTML = "";
    //     // movies(moviesArray)
    //   }

    //   movies(moviesArray)
    // });
    
 

    