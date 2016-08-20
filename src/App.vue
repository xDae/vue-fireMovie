<template>

				<a v-link="{name: 'home'}" class="logo">Vue FireMovie</a>


      <router-view></router-view>

</template>

<script>
// import MovieList from './components/MovieList';

export default {
  components: {
    // MovieList,
  }
};
</script>

<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css);
@import url(http://fonts.googleapis.com/css?family=Open+Sans:600,300,100|Open+Sans+Condensed:300);
@import url(http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);

* {
  box-sizing: border-box;
}

/*body {
  background-color: #000;
  height: 100%;
  font-family: 'Lato', sans-serif;
}

body::before {
  height: 100%;
  background-image: url('http://assets.fanart.tv/fanart/movies/155/moviebackground/the-dark-knight-5055ef9dac977.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  content: '';
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-position: center;
  z-index: -2;

  filter: url('/media/blur.svg#blur');
  filter: blur(10px);
}

body::after {
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
  z-index: -1;
}*/

a {
  text-decoration: none;
  transition-duration: .3s;
}

img {
  max-width: 100%;
}

a:hover {
  transition-duration: .05s;
}
</style>
