<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Use Name: {{ switchName() }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            'name': String,
            required: true,
            //default: 'Daniel'
        },
        methods: {
            switchName() {
                return this.name.split("").reverse().join("");
            }
        }
    }
</script>

<style scoped lang="scss">
    div {
        background-color: lightcoral;
    }
</style>
