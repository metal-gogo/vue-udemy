import Vue from 'vue';
import App from './App.vue';

Vue.filter('toLowerCase', (value) => {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    console.log("Global mixin. Added to all instances.");
  },
});

new Vue({
  el: '#app',
  render: h => h(App)
});
