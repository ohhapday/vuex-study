<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    watch: {}
  }
</script>

<style lang="scss">
  /*
  @import "~vue-material/dist/theme/engine"; // Import the theme engine

  @include md-register-theme("default", (
    primary: md-get-palette-color(green, A200),
    accent: md-get-palette-color(pink, A200),
  ));

  @import "~vue-material/dist/theme/all"; // Apply the theme
  */
</style>
