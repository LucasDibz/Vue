<template>
  <div class="container">
    <h1>{{ plate.name }}</h1>
    <p>{{ plate.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    plate: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #f6f6f6;
  margin: 1rem;
}

.container h1 {
  margin: 1rem 0;
  font-style: italic;
}

.container p {
  margin: 1rem 2rem;
}
</style>
