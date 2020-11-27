<template>
  <div id="app">
    <Header name="Veggie Fish View Restaurant" />
    <Menu />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';

@Component({
  components: {
    Header,
    Menu,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  padding: 0;
  margin: 0;
  border: 0;
}
</style>
