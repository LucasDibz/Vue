<template>
  <div class="container">
    <img src="../assets/logo.png" alt="Restaurant" />
    <h1>{{ name }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() private name!: string;
}
</script>

<style scoped>
.container {
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  height: 15rem;
}

.container img {
  margin-left: 5rem;
  height: 15rem;
}

.container h1 {
  color: #42b983;
  margin-left: 5rem;
}
</style>
