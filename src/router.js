import Vue from 'vue';
import VueRouter from 'vue-router';

import MovieList from './components/MovieList';

Vue.use(VueRouter);

const router = new VueRouter({
  hashbang: false,
  history: true,
  transitionOnLoad: true,
});

router.map({
  '/': {
    name: 'Home',
    component: MovieList,
  },
});

export default router;
