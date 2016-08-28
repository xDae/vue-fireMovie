<template>
  <app-header></app-header>

  <h2>Most Popular Movies</h2>

  <section  class="movies">
    <ul>
      <li v-for="movie of movies">
        {{movie.title}}
        <img :src="postertUrl" alt="" />
      </li>
    </ul>
  </section>
</template>

<script>
import movieSearch from '../helpers/movieSearch';

import Header from './Header';

export default {
  name: 'Search',
  route: {
    data: (transition) => ({
      movies: movieSearch(transition.to.params.name)
    })
  },
  data () {
    return {
      movies: []
    };
  },
  components: {
    AppHeader: Header
    // MovieCard
  },
  methods: {
    movieSearch
  }
};
</script>

<style lang="scss" scoped>
.movies {
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  height: 70vh;
  padding: 8px 18px;
}
</style>
