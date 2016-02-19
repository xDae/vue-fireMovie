<template>
<form class="form-inline">
    <div class="form-group">
        <input type="text" class="form-control" id="exampleInputEmail2" placeholder="Search" v-model="movieTitle">
    </div>
    <select class="c-select">
        <option selected value="en" default>English</option>
        <option value="es">Español</option>
        <option value="fr">French</option>
        <option value="de">German</option>
    </select>
    <button type="submit" class="btn btn-primary" @click.prevent="getData">Search</button>
    <button v-if="hasResults" type="button" class="btn btn-danger" @click.prevent="deleteForm">Delete</button>
</form>

<div class="list-group" v-if="hasResults">
    <a href="#" class="list-group-item" v-for="film in resultList" @click.prevent="saveMovie(film)">{{film.title}}</a>
</div>
</template>

<script>
export default {
    name: 'SearchForm',
    ready: function () {
        this.$set('hasResults', false);
    },
    data () {
        return {
            movieTitle: '',
            hasResults: false,
            resultList: []
        };
    },
    watch: {
        'movieTitle': function (val) {
            if (val.length === 0) {
                this.deleteForm();
            }
        },
    },
    methods: {
        getData: function () {
            var api_key = 'fcc3e3e91b7cc38185ef902ca797ee11';

            // GET request
            this.$http({
                url: 'https://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&query=' + this.movieTitle + '&language=es&include_adult=false',
                method: 'GET'
            })
            .then(function (response) {
                // success callback
                this.$set('hasResults', true);
                this.$set('resultList', response.data.results);
                console.log(response.data.results);
            }, function (response) {
                // error callback
                console.warn(response);
            });
        },
        saveMovie: function (movie) {
            console.log(movie.title);

            const ref = new Firebase('https://vue-firemoviex.firebaseIO.com/movies');
            var movieRef = ref.child(movie.id);
            movieRef.set({
                tmdbID: movie.id,
                title: movie.title,
                dateAdded: Firebase.ServerValue.TIMESTAMP
            });
        },
        deleteForm: function () {
            this.movieTitle = '';
            this.resultList.length = 0;
            this.$set('hasResults', false);
        }
    }
};
</script>

<style>
</style>
