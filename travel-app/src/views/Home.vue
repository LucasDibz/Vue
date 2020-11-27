<template>
  <div class="home"></div>
</template>

<script lang="ts">
import store from '@/store';
export default {
  name: 'home',
  components: {},
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>
