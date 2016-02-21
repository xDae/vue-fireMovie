<template>
    <div class="card">
        <div class="front-card">
            <img v-if="moviethumb" class="card-img-top" v-bind:src="moviethumb" alt="Card image cap">
            <div class="card-block">
                <h4 class="card-title">{{ movie.title }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: Object
    },
    ready: function () {
        this.getImages();
    },
    data () {
        return {
            moviethumb: ''
        };
    },
    methods: {
        getImages: function () {
            var fanArtApiKey = 'eb3b624d1526d41441b1cd8b608415d0';

            // GET request
            this.$http({
                url: 'https://webservice.fanart.tv/v3/movies/' + this.movie.tmdbID + '?api_key=eb3b624d1526d41441b1cd8b608415d0',
                method: 'GET'
            })
            .then(function (response) {
                // success callback
                this.$set('moviethumb', response.data.moviebanner[0].url)
            }, function (response) {
                // error callback
                // console.warn(response);
            });

        }
    }
};
</script>

<style>
.card {
    cursor: pointer;
}

.card img {
    max-width: 100%;
}

</style>
