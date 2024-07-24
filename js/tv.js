const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGYzMGM1OTA4YjgzYzQ5ZDA4Yjg4MmIwYWRhZDljZSIsIm5iZiI6MTcxOTQ5ODA3NC4yMTg0ODUsInN1YiI6IjY2N2Q2ZGUyNTExNzlmNDFmOWI0OTQ3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KTVAJhsFTofVBLb0J-lxPWQsHKZr5bURCakXiSXl9aQ'
    }
  };
  
  fetch('https://api.themoviedb.org/3/tv/changes?page=1', options)
    .then(response => response.json())
    .then((data) =>{
      Tv=(data.results)
      console.log(Tv);
    })
    // .then(data => console.log(Tv))
    // .catch(err => console.error(err));

    function Tv(data){

    }