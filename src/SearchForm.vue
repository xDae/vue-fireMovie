<template>
<form class="form-inline">
    <div class="form-group">
        <div class="dropdown">
            <input id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" type="text" class="form-control" id="exampleInputEmail2" placeholder="Search" v-model="movieTitle" debounce="500">

            <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <a v-if="!hasResults" class="dropdown-item" href="#">No Results</a>
                <a v-else="hasResults" class="dropdown-item" href="#" v-for="film in resultList | orderBy 'release_date' -1 | limitBy 10" @click.prevent="saveMovie(film)">{{film.title}} - <strong>{{film.release_date}}</strong></a>
            </div>

            <select v-model="userLang" class="c-select">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">French</option>
                <option value="de">German</option>
            </select>
        </div>
    </div>
</form>
</template>

<script>
export default {
    name: 'SearchForm',
    ready: function () {
        this.$set('hasResults', false);
    },
    props: {
        userLang: {
            type: String,
            default: 'en'
        }
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
            } else {
                this.getData();
            }
        }
    },
    methods: {
        getData: function () {
            var api_key = 'fcc3e3e91b7cc38185ef902ca797ee11';

            // GET request
            this.$http({
                url: 'https://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&query=' + this.movieTitle + '&language=' + this.userLang + '&include_adult=false',
                method: 'GET'
            })
            .then(function (response) {
                // success callback
                if (response.data.total_results > 0) {
                    this.$set('hasResults', true);
                    this.$set('resultList', response.data.results);
                } else {
                    this.$set('hasResults', false);
                }

            }, function (response) {
                // error callback
                this.$set('hasResults', false);
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
