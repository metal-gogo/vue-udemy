<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 1000})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 25, duration: 100})">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import * as types from '../store/types';

export default {
  methods: {
    ...mapActions({
      asyncIncrement: types.COUNTER_INCREMENT_ASYNC,
      asyncDecrement: types.COUNTER_DECREMENT_ASYNC
    }),
  }
}
</script>
