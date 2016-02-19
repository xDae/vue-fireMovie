import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)

var store = new Vuex.Store({
    state: {
        counter: 0;
    },
    mutations: {
        INCREMENT (state) {
            state.counter ++;
        }
    }
});

export default store
