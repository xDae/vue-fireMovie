<template>

    <div class="navbar-collapse collapse inverse" id="navbar-header">
      <div class="container-fluid">
        <div class="about">
          <h4>About</h4>
          <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
        </div>
        <div class="social">
          <h4>Contact</h4>
          <ul class="list-unstyled">
            <li><a href="#">Follow on Twitter</a></li>
            <li><a href="#">Like on Facebook</a></li>
            <li><a href="#">Email me</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="navbar navbar-static-top navbar-dark bg-inverse">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-header">
          &#9776;
        </button>
        <a href="#" class="navbar-brand">Album</a>
      </div>
    </div>

    <section class="jumbotron text-xs-center">
      <div class="container">
        <h1 class="jumbotron-heading">Album example</h1>
        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
        <p>
          <a href="#" class="btn btn-primary">Main call to action</a>
          <a href="#" class="btn btn-secondary"><span class="glyphicon glyphicon-menu-up"></span> See in GitHub</a>
        </p>
        <p>
            <search-form></search-form>
        </p>
      </div>
    </section>

    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4" v-for="movie in movieList">
                <movie-card :movie="movie" data-toggle="modal" data-target="#myModal" @click.prevent="openModal(movie.tmdbID)"></movie-card>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <movie-modal v-if="modalOpen" :movie="modalID"></movie-modal>
    </div>
</template>

<script>
import SearchForm from './SearchForm.vue';
import MovieCard from './MovieCard.vue';
import MovieModal from './MovieModal.vue';

export default {
    name: 'App',
    ready: function () {
        this.getData();
    },
    data () {
        return {
            movieList: [],
            modalOpen: false,
            modalID: null
        };
    },
    components: {
        SearchForm: SearchForm,
        MovieCard: MovieCard,
        MovieModal: MovieModal
    },
    methods: {
        getData: function () {
            var data = this;

            const ref = new Firebase('https://vue-firemoviex.firebaseIO.com/movies');
            ref.on("value", function(snapshot) {
                // console.log(snapshot.val());

                data.$set('movieList', snapshot.val());
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        },
        openModal: function (movieID) {
            this.$set('modalID', movieID);
            this.$set('modalOpen', true);
        }
    }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);

body {
    background: #e2e2e2;
    /*width: 98%;
    height: 100vh;*/
}
</style>
