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
            <li><a href="https://twitter.com/xDae">Follow on Twitter</a></li>
            <li><a href="https://github.com/xDae">Follow me on GitHub</a></li>
            <li><a href="https://github.com/xDae/vue-fireMovie">Contribute on GitHub</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="navbar navbar-static-top navbar-dark bg-inverse">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-header">
          &#9776;
        </button>
        <a href="#" class="navbar-brand">Vue FireMovie</a>
      </div>
    </div>

    <section class="jumbotron text-xs-center">
      <div class="container">
        <h1 class="jumbotron-heading">Yet Another Movie Search</h1>
        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
        <p>
          <a href="#" class="btn btn-primary" data-toggle="collapse" data-target="#navbar-header">More Info</a>
          <a href="https://github.com/xDae/vue-fireMovie" class="btn btn-secondary"><span class="glyphicon glyphicon-menu-up"></span> See in GitHub</a>
        </p>
        <p>
            <search-form :user-lang="userLang"></search-form>
        </p>
      </div>
    </section>

    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4" v-for="movie in movieList | orderBy 'dateAdded' -1">
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
        this.$set('userLang', navigator.language || navigator.userLanguage);
        this.getData();
    },
    data () {
        return {
            movieList: [],
            modalOpen: false,
            modalID: null,
            userLang: 'en'
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
            ref.orderByChild('dateAdded').on('value', function(snapshot) {
                console.log(snapshot.val());

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

body {
  min-height: 75rem; /* Can be removed; just added for demo purposes */
}

.navbar {
  margin-bottom: 0;
}

.navbar-collapse .container-fluid {
  padding: 2rem 2.5rem;
  border-bottom: 1px solid #55595c;
}

.navbar-collapse h4 {
  color: #818a91;
}

.navbar-collapse .text-muted {
  color: #818a91;
}

.about {
  float: left;
  max-width: 30rem;
  margin-right: 3rem;
}

.social a {
  font-weight: 500;
  color: #eceeef;
}
.social a:hover {
  color: #fff;
}

.jumbotron {
  padding-top: 6rem;
  padding-bottom: 6rem;
  background-color: #fff;
}

.jumbotron p:last-child {
  margin-bottom: 0;
}

.jumbotron-heading {
  font-weight: 300;
}

.jumbotron .container {
  max-width: 40rem;
}

footer {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

footer p {
  margin-bottom: .25rem;
}
</style>
