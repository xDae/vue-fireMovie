<template>
  <div class="detail" :class="{ 'ready': !$loadingRouteData}">
    <svg v-link="{name: 'home'}" class="close">
      <use xlink:href="#close"></use>
    </svg>

    <div class="movie">
      <img :src="poster" class="poster" />
      <div class="title">{{title}}</div>
      <div class="info">
        <span class="length">{{runtime}} min</span>
        <span class="year">{{release_date}}</span>
      </div>
      <div class="desc">{{overview}}</div>

      <button class="play">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 232.153 232.153" style="enable-background:new 0 0 232.153 232.153;" xml:space="preserve" width="10px" height="10px">
          <g id="Play">
            <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M203.791,99.628L49.307,2.294c-4.567-2.719-10.238-2.266-14.521-2.266   c-17.132,0-17.056,13.227-17.056,16.578v198.94c0,2.833-0.075,16.579,17.056,16.579c4.283,0,9.955,0.451,14.521-2.267   l154.483-97.333c12.68-7.545,10.489-16.449,10.489-16.449S216.471,107.172,203.791,99.628z" fill="#FFFFFF"/>
          </g>
        </svg> play movie
      </button>
    </div>
  </div>

  <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:none;">
    <symbol id="close" viewBox="0 0 212.982 212.982">
      <g>
        <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312   c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312   l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937   c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z" fill="#525661"/>
      </g>
    </symbol>
    <symbol id="ico-search">
      <path fill-rule="evenodd" clip-rule="evenodd" fill="#363a47" d="M14.769,14.769c-0.342,0.342-0.896,0.342-1.237,0l-3.756-3.756
      c-2.399,1.793-5.801,1.623-7.981-0.557c-2.392-2.392-2.392-6.271,0-8.663s6.271-2.392,8.662,0c2.18,2.181,2.35,5.583,0.557,7.981
      l3.756,3.756C15.11,13.873,15.11,14.427,14.769,14.769z M9.219,3.032c-1.709-1.709-4.479-1.709-6.188,0
      c-1.708,1.708-1.708,4.479,0,6.188c1.709,1.708,4.479,1.708,6.188,0C10.927,7.51,10.927,4.74,9.219,3.032z"/>
    </symbol>
  </svg>
</template>

<script>
import {getMovieDetails, getMovieImages} from './../helpers/getMovieInfo';

export default {
  name: 'MovieDetails',
  route: {
    data ({to: {params: { id }}}) {
      return Promise.all([
        getMovieDetails(id)
        // getMovieImages(id)
      ])
        .then(data => {
          return {
            title: data[0].title,
            tagline: data[0].tagline,
            overview: data[0].overview,
            runtime: data[0].runtime,
            vote_average: data[0].vote_average,
            release_date: data[0].release_date,
            // background: data[1].background,
            poster_path: data[0].poster_path
          };
        });
    }
  },
  ready () {
  },
  computed: {
    poster () {
      return `http://image.tmdb.org/t/p/w300/${this.poster_path}`;
    }
  },
  data () {
    return {
      title: '',
      tagline: '',
      overview: '',
      runtime: '',
      vote_average: '',
      release_date: '',
      background: '',
      poster_path: ''
    };
  },
  methods: {
    getMovieDetails,
    getMovieImages
  }
};
</script>

<style lang="scss" scoped>
.detail {
  min-height: 390px;
  z-index: 10;
  padding: 37px 30px 30px 255px;

  &::before {
    content: '';
    background: #fff;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    opacity: 0;
    transition: all .4s cubic-bezier(.67,.13,.1,.81);
  }

  .close {
    position: absolute;
    top: 21px;
    right: 22px;
    width: 12px;
    height: 12px;
    cursor: pointer;
    border: 6px solid #FFF;
    box-sizing: content-box;
    z-index: 10;
  }

  .poster {
    position: absolute;
    top: -10%;
    left: -6%;
    width: 266px;
    height: 400px;
    z-index: 2;
    border-radius: 5px;
    box-shadow: 0 5px 30px rgba(0, 0, 0, .2);
    opacity: 0;
    transition: all .5s cubic-bezier(.67,.13,.1,.81);
  }


  .title,
  .info,
  .desc,
  .play,
  .close {
    transform: translateX(-50px);
    opacity: 0;
    transition: all .4s cubic-bezier(.67,.13,.1,.81);
  }

  .close {
    transform: translateX(10px);;
  }

  .title {
    font-size: 35px;
    font-weight: 300;
    color: #525661;
    margin-bottom: 5px;

  }

  .info {
    font-size: 11px;
    opacity: 0;
    margin-left: 2px;
  }

  .desc {
    margin-top: 30px;
    font-size: 14px;
    line-height: 1.6;
  }

  .play {
    background: linear-gradient(90deg, #E4761F, #FF8B32);
    border: none;
    border-radius: 20px;
    color: #fff;
    font-size: 12px;
    line-height: 1.5;
    padding: 8px 17px;
    margin: 30px 0 0 -2px;
    text-transform: uppercase;
    z-index: 10;
    outline: none !important;
    cursor: pointer;
    opacity: 0;

    svg {
      vertical-align: middle;
      position: relative;
      top: -2px;
      margin-right: 3px;
    }
  }
}

.detail.ready {

  &::before {
    opacity: 1;
  }

  .info {
    opacity: .8;
  }

  .poster {
    opacity: 1;
    transition-duration: .5s;
  }

  .title,
  .info,
  .desc,
  .play,
  .close {
    transform: translateX(0);
    opacity: 1;
    transition-delay: 0s;
    transition-duration: .5s;
  }

  .title {
    transition-delay: .2s;
  }

  .info {
    transition-delay: .3s;
  }

  .desc {
    transition-delay: .4s;
  }

  .play {
    transition-delay: .5s;
  }
}
</style>
