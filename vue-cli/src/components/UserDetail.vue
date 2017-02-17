<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Use Name: {{ switchName() }}</p>
        <p>Use Age: {{ userAge }}</p>
        <button @click="resetName()">Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props: {
            name: { 
                type: String,
                required: true
            },
            userAge: Number
        },
        methods: {
            switchName() {
                return this.name.split("").reverse().join("");
            },
            resetName() {
                this.name = 'Metal Gogo';
                eventBus.$emit('nameWasReset', this.name);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (data) => {
                this.userAge = data
            });
        }
    }
</script>

<style scoped lang="scss">
    div {
        background-color: lightcoral;
    }
</style>
