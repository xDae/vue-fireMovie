<template>
  <div class="movie-list">
    <div class="title-bar">
      <div class="left">
        <p class="bold">Popular Trailers</p>
        <p class="grey">Action / Adventure</p>
      </div> <!-- left -->
      <div class="right">
        <a class="blue" href="#">Rating <i class="fa fa-angle-down"></i></a>
        <a href="#">Newest</a>
        <a href="#">Oldest</a>
      </div> <!-- right -->
    </div> <!-- title-bar -->

    <div v-if="$loadingRouteData">Loading...</div>

    <ul v-if="!$loadingRouteData" class="list">
      <movie-card v-for="movie of movies" track-by="tmdbID" :title="movie.title"></movie-card>
    </ul>

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
      movies: getMovies(),
    }),
  },
  data() {
    return {
      movies: [],
    };
  },
  components: {
    MovieCard,
  },
  methods: {
    getMovies,
  },
};
</script>

<style>

</style>
