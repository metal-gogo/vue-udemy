<template>
  <div>
    <h1>Filters & Mixins</h1>
    <hr>
    <input v-model="filterText">
    <ul v-for="fruit in filteredFruits">
      <li>{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
        text: 'Hello there!',
      };
    },
    computed: {
      filteredFruits() {
        return this.fruits.filter((element) => {
          return element.match(this.filterText);
        });
      }
    },
  }
</script>

<style>

</style>
