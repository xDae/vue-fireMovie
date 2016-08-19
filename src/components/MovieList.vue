<template>

  <div class="featured-movie">
    <img class="cover" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/backdrop_ggwxvq_1.jpg" alt="" class="cover" />
    <p class="corner-title">Staff pick</p>

    <div class="bottom-bar">
      <div class="title-container">
        <span class="fa fa-play-circle"></span>
        <b>Non-stop</b> Trailer #1
      </div>

      <div class="right">
        <div class="stars">
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star-half-o"></span>
          <span class="fa fa-star-o"></span>
        </div>
        <div class="share">
          <i class="fa fa-share-square"></i> Share
        </div>
      </div> <!-- right -->
    </div> <!-- bottom bar -->
  </div> <!-- featured -->

  <div class="movie-list">

    <div v-if="$loadingRouteData">Loading...</div>

    <!-- <ul v-if="!$loadingRouteData" class="list"> -->
      <movie-card v-for="movie of movies" track-by="tmdbID" :id="movie.tmdbID" :title="movie.title"></movie-card>
    <!-- </ul> -->

    <a href="#" class="load-more">Show more movies <span class="fa fa-plus"></span></a>

  </div> <!-- movie list -->
</template>

<script>
import getMovies from '../firebaseAPI/getMovies';
import MovieCard from './MovieCard';

export default {
  name: 'MovieList',
  route: {
    data: () => ({
      movies: getMovies()
    })
  },
  data () {
    return {
      movies: []
    };
  },
  components: {
    MovieCard
  },
  methods: {
    getMovies
  }
};
</script>

<style>

</style>
