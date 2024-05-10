// console.log(process.env.SECRET_MESSAGE);

window.onload = function() {
  getMovies()
}

// window.onload = async () => {
//   await getMovies;
//   console.log("onload", comingSoon);
// };



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTAwMmVkNmMyYzFiZWU1ZmZjNWM2YTNkMGQ5NmY3NyIsInN1YiI6IjY2MzdjZmQxNjY1NjVhMDEyNjE1ZTVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VwIZck5xqeBI6MnuZDLD8_kcRc9wzTwGq6Z2XMEOMIA'
  }
};

let comingSoon = []

const getMovies = () => {
  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
  .then(response => response.json())
  .then(data => {
    console.log(data);           
    comingSoon = data.results;
    aTitle();   
    document.getElementById("next").addEventListener("click", function() {
      if (currentIndex < comingSoon.length - 1) {
        currentIndex++;
        aTitle();
      }
    });
    
    document.getElementById("previous").addEventListener("click", function() {
      if (currentIndex > 0) {
        currentIndex--;
        aTitle();
      }
    });
  })
  .catch(err => console.error(err)); 
};


  // const showMovie = () => {
  //   const movieOne = document.getElementById('aMovie');
  //   const poster = document.getElementById()
  //   movieOne.innerHTML = '';

  //   comingSoon.forEach
  // }


  let currentIndex = 0; 

  const aTitle = () => {
      
      

      if (currentIndex >= comingSoon.length) {
          currentIndex = 0;
      }
  
      const moviePoster = comingSoon[currentIndex];
      console.log(moviePoster);
      
  

      document.getElementById("poster").src = "https://image.tmdb.org/t/p/w1280" + moviePoster.poster_path;
      document.getElementById("poster").alt = moviePoster.title + " poster";
      document.getElementById("title").textContent = moviePoster.title;
      document.getElementById("date").textContent = moviePoster.release_date;
      document.getElementById("synopsis").textContent = moviePoster.overview;
      // document.getElementById("next").addEventListener("click", currentIndex++);
      // document.getElementById("previous").addEventListener("click", currentIndex--);


      //currentIndex++;
  }

  


//   let backIndex = currentIndex;

//   const backOne = () => {
      
      

//     if (backIndex >= comingSoon.length) {
//         backIndex = 0;
//     }

//     const moviePoster = comingSoon[backIndex];
//     console.log(moviePoster);
    


//     document.getElementById("poster").src = "https://image.tmdb.org/t/p/w1280" + moviePoster.poster_path;
//     document.getElementById("poster").alt = moviePoster.title + " poster";
//     document.getElementById("title").textContent = moviePoster.title;
//     document.getElementById("date").textContent = moviePoster.release_date;
//     document.getElementById("synopsis").textContent = moviePoster.overview;


//     backIndex--;
// }
  
  