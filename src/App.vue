<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
    // MovieList,
  }
};
</script>

<style lang="scss">

@mixin center {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@import url(https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css);
@import url(http://fonts.googleapis.com/css?family=Open+Sans:600,300,100|Open+Sans+Condensed:300);
@import url(http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 0;
  background: radial-gradient(ellipse farthest-corner at center top, #41B883, #35495E);
  color: #8b9095;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
}

.app {
  position: relative;
  width: 640px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, .2);

  h2 {
    color: #525661;
    font-size: 17px;
    box-shadow: inset 0 1px 0px rgba(0, 0, 0, 0.1);
    padding: 20px 28px 0;
    margin: -6px 0 0 0;
  }
}
</style>
