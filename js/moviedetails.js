// movie details

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGYzMGM1OTA4YjgzYzQ5ZDA4Yjg4MmIwYWRhZDljZSIsIm5iZiI6MTcxOTU3OTYxNS43Nzk4Niwic3ViIjoiNjY3ZDZkZTI1MTE3OWY0MWY5YjQ5NDc1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Ykd0nKWiKQG6x3sN9_wmHcSO6fml5pDqD21jzsl7J8o'
    }
  };
    let movieDetails = document.querySelector(".movie-container")

    let url = new URLSearchParams(window.location.search);
    let movieId = url.get("id")
    // let loader = document.querySelector(".loader2-container")
    // loader.classList.add("visible")
    // console.log(loader);

      fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        movieInfo(data)
      })
      .catch(err=> {
        console.log("error");
      })
    
      let imageUrl = "https://image.tmdb.org/t/p/w500";
      let backdropUrl = "https://image.tmdb.org/t/p/w500";

      function movieInfo(data) {
          console.log(data);
          const {title,poster_path,overview,release_date,vote_average,popularity,vote_count} = data;
          let  movieCreatElement = document.createElement("div");
          movieCreatElement.classList.add('movieInfo')
          movieCreatElement.innerHTML = `
            <a href="#" class="movie-content-body">
              <div class="movie-image-section">
                <div class="movie-content-image">
                  <img src="${imageUrl+poster_path}" class="img">
                </div>
              </div>
              <div class="movie-content-section">
                <div class="movie-content-title">
                  <h5>Title</h5>
                  -
                  <p>${title}</p>
                </div>
      
                <div class="movie-content-date">
                  <h5>Released Date - <span>${release_date}</span></h5>
                </div>
      
                <div class="movie-content-overview">
                  <h5>Overview</h5>
                  <p>${overview}</p>
                </div>

                <div class="vote-average">
                  <p>Vote Average</p>
                  <div class="getcolor">
                    <svg xmlns="http://www.w3.org/2000/svg" class="half-star-icon" height="20px" viewBox="0 -960 960 960" width="24px" fill="#4285f4"><path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="star-icon" height="20px" viewBox="0 -960 960 960" width="24px" fill="rgb(149, 247, 134)"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
                    ${vote_average}
                  </div>
                </div>

                <div class="popularity">
                  <p>popularity</p>
                  -
                  <h5>${popularity}</h5>
                </div>

                <div class="popularity">
                  <p>Vote Count</p>
                   -
                  <h5>${vote_count}</h5>
              </div>
                
              </div>
            </a>
          `
          movieDetails.appendChild(movieCreatElement)


          let getcolor = document.querySelector(".getcolor")
          let starIcon = document.querySelector(".star-icon")
          let halfStarIcon = document.querySelector(".half-star-icon")
          // let highColor = document.querySelector(".green")
          if (vote_average >=7) {
            getcolor.classList.add("green")
            starIcon.classList.add("visible")
          }else if(vote_average >=5){
            getcolor.classList.add("blue")
            halfStarIcon.classList.add("visible")
          }else{
            getcolor.classList.add("red")
          }
      }

     
      // function getcolor (vote){
      //   if(vote >= 8){
      //     return green
      //   }else if (vote >= 5){
      //     return "blue"
      //   }else{
      //     return "red"
      //   }
      // }
      // console.log(highColor);

    

      // movieInfo(data)
      
      
    // }
    // .catch(err => console.error(err));



   