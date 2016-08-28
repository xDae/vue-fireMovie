import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home';
import Search from './components/Search';
import MovieDetails from './components/MovieDetails';

Vue.use(VueRouter);

const router = new VueRouter({
  hashbang: false,
  history: true,
  transitionOnLoad: true
});

router.map({
  '/': {
    name: 'home',
    component: Home
  },
  '/movie/:id/:name/': {
    name: 'movie',
    component: MovieDetails
  },
  '/search/:name/': {
    name: 'search',
    component: Search
  }
});

export default router;
