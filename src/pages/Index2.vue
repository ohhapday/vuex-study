<template>
  <div class="elevation-demo">
    <md-content class="md-elevation-24" v-on:click="aclick">1</md-content>
    <md-content class="md-elevation-2">2</md-content>
    <md-content class="md-elevation-3">3</md-content>
    <md-content class="md-elevation-4">4</md-content>
    <md-content class="md-elevation-5">5</md-content>
    <md-content class="md-elevation-6">6</md-content>

    <md-button>Default</md-button>
    <md-button class="md-raised">Default</md-button>
    <md-button class="md-raised" :md-ripple="false">Ripple Off</md-button>
    <md-button class="md-raised md-primary">Primary</md-button>
    <md-button class="md-raised md-accent">Accent</md-button>
    <md-button class="md-raised" disabled>Disabled</md-button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted() {
      // console.log($('.md-content'));
    },
    methods: {
      aclick() {
        alert('test');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .elevation-demo {
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
  }

  .md-content {
    width: 100px;
    height: 100px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
