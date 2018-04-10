<template>
  <div id="app">
    <img src="../assets/logo.png">
    <h1 class="text1">{{ msg }}</h1>
    <h1 class="text3">{{ msg }}</h1>
    <div class="md-layout">
      <div class="md-layout-item md-size-75">
        <md-field>
          <label>컨텐츠 밸뉴</label>
          <md-input v-model="msg"></md-input>
        </md-field>
      </div>
    </div>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div>{{count}}</div>
    <md-button v-on:click="increment">+</md-button>
    <md-button v-on:click="decrement">-</md-button>
    <md-button v-on:click="reversMsg">reversMsg</md-button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome 나의 첫번째 Vue 프로젝트',
      }
    },
    created() {
    },
    mounted() {
    },
    updated() {
    },
    destroyed() {
    },
    computed: {
      count() {
        return this.$store.state.count
      },
      reversedMsg() {
        return this.msg.split('').reverse().join('');
      }
    },
    methods: {
      increment() {
        this.$store.commit('increment');
      },
      decrement() {
        this.$store.commit('decrement');
      },
      reversMsg() {
        this.msg = this.msg.split('').reverse().join('');
      }
    },
    watch: {
      reversedMsg(data) {
      },
    }
  }
</script>

<style>
  #app {
    /*
     font-family: 'nanum gothic', Roboto, Noto Sans, -apple-system, BlinkMacSystemFont, sans-serif;
      */
    font-family: Roboto, Noto Sans, -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #746aff;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  ul > li {
    color: #a8b9a8;
  }
</style>
