<template>
  <div id="app">
    <md-button>Default</md-button>
    <md-button :md-ripple="false">Ripple Off</md-button>
    <md-button class="md-primary">Primary</md-button>
    <md-button class="md-accent">Accent</md-button>
    <md-button disabled>Disabled</md-button>
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
  }
</script>
