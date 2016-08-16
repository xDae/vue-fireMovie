<template>
  <li>
    <img :src="img" alt="" class="cover" />
    <p class="title">{{title}}</p>
    <p class="genre">{{genre}}</p>
  </li>
</template>

<script>
export default {
  data() {
    return {
      title: 'Sin City: A Dame To Kill For',
      genre: ['Action', 'Crime'],
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/2014-03-08_140412_oavbye_1.png',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
