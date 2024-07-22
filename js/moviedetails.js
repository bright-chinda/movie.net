// movie details

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGYzMGM1OTA4YjgzYzQ5ZDA4Yjg4MmIwYWRhZDljZSIsIm5iZiI6MTcxOTU3OTYxNS43Nzk4Niwic3ViIjoiNjY3ZDZkZTI1MTE3OWY0MWY5YjQ5NDc1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Ykd0nKWiKQG6x3sN9_wmHcSO6fml5pDqD21jzsl7J8o'
    }
  };
    let movieDetails = document.querySelector(".backdrop-img")

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
          const {title,poster_path,overview,release_date,backdrop_path} = data;
          let  movieCreatElement = document.createElement("div");
          movieCreatElement.classList.add('movieInfo')
          movieCreatElement.innerHTML = `
          <div class="backdrop-img">
            <img src="${backdropUrl+backdrop_path}" class="img">
          </div>
            <a href="#" class="movie-content-body">
              <div class="movie-image-section">
                <div class="movie-content-image">
                  <img src="${imageUrl+poster_path}" class="img">
                </div>
              </div>
              <div class="movie-content-section">
                <div class="movie-content-title">
                  ${title}
                </div>
      
                <div class="movie-content-date">
                  <h5>Released <span>${release_date}</span></h5>
                </div>
      
                <div class="movie-content-overview">
                  <h5>Overview</h5>
                  ${overview}
                </div>
              </div>
            </a>
          `
          movieDetails.appendChild(movieCreatElement)
      }

      // movieInfo(data)
      
      
    // }
    // .catch(err => console.error(err));



   