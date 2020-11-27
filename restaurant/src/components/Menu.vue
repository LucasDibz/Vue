<template>
  <div class="container">
    <ul v-if="menu.length">
      <MenuItem v-for="item in menu" :key="item.id" :plate="item" />
    </ul>
  </div>
</template>

<script>
import MenuItem from './MenuItem';

let itemId = 1;

export default {
  components: { MenuItem },
  data() {
    return {
      menu: [
        {
          id: itemId++,
          name: 'Salmon',
          description:
            'Pesto Salmon and Italian Veggies in Foil - Cooking Classy Pesto Salmon and Italian Veggies in Foil',
        },
        {
          id: itemId++,
          name: 'Codfish',
          description:
            'The signature dish at the Cape Cod Room in Chicagos famed Drake Hotel',
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex: 1;
  align-content: center;
  justify-content: center;
}
</style>
