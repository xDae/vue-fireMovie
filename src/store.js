import Vue from 'vue';
import Vuex from 'vuex';

// Make vue aware of Vuex
Vue.use(Vuex);

const state = {
  movies: [],
};

// Create an object storing various mutations. We will write the mutation
const mutations = {
  // TODO: set up our mutations
};

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations,
});
