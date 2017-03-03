<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUpperCase | toLowerCase}}</p>
        <hr>
        <button @click="fruits.push('berry')">Add new Fruit</button>
        <input v-model="filterText">
        <ul v-for="fruit in filteredFruits">
          <li>{{ fruit }}</li>
        </ul>
        <app-list />
      </div>
    </div>
  </div>
</template>

<script>
  import AppList from './List.vue';
  import { fruitMixin } from './FruitMixin.js';

  export default {
    components: {
      AppList,
    },
    mixins: [
      fruitMixin
    ],
    data() {
      return {
        text: 'Hello there!',
      };
    },
    filters: {
      toUpperCase(value) {
        return value.toUpperCase();
      },
    },
  }
</script>

<style>

</style>
