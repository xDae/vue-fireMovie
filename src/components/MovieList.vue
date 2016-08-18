<template>
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
