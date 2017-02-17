<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Use Name: {{ switchName() }}</p>
        <p>Use Age: {{ userAge }}</p>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
    export default {
        props: {
            name: { 
                type: String,
                required: true
            },
            resetFn: Function,
            userAge: Number
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
