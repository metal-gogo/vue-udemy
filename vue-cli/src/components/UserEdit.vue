<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Use Age: {{ userAge }}</p>
        <button @click="editAge()">Edit Age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props: {
            userAge: Number
        },
        methods: {
            editAge() {
                this.userAge = 30;
                // eventBus.$emit('ageWasEdited', this.userAge);
                eventBus.changeAge(this.userAge);
            }
        }
    }
</script>

<style scoped lang="scss">
    div {
        background-color: lightgreen;
    }
</style>
