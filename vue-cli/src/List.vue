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
  import { fruitMixin } from './FruitMixin.js';

  export default {
    mixins: [
      fruitMixin
    ],
  }
</script>

<style>

</style>
