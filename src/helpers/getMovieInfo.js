function getMovieDetails (movieId, lang = 'en') {
  var apiKey = 'fcc3e3e91b7cc38185ef902ca797ee11';

  return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=${lang}`)
    .then(response => response.json())
    .then(({ title, tagline, overview, runtime, vote_average, release_date }) => (
      { title, tagline, overview, runtime, vote_average, release_date }
    ))
    .catch(err => console.log('parsing failed', err));
}

function getMovieImages (movieId) {
  let apiKey = 'eb3b624d1526d41441b1cd8b608415d0';

  return fetch(`https://webservice.fanart.tv/v3/movies/${movieId}?api_key=${apiKey}`)
    .then(response => response.json())
    .then(json => {
      return {
        // background: json.hdmovieclearart[0].url,
        poster: json.movieposter[0].url
      };
    })
    .catch(err => console.log('parsing failed', err));
}

export {getMovieDetails, getMovieImages};
