<template>
    <div class="container">
        <h3>New Quote</h3>
        <button @click="counter++">Increase!</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 0
            };
        },
        deactivated() {
            console.log('Deactivated');
        },
        activated(){
            console.log('Activated');
        }
    }
</script>

<style>
</style>
