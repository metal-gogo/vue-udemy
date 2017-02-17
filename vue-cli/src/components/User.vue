<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    :name="name"
                    :userAge="age">
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    :userAge="age">
                </app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    import { eventBus } from '../main';

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        data() {
            return {
                name: 'Metal Gogo',
                age: 28
            };
        },
        methods: {
            changeName() {
                this.name = 'Ale';
            },
            resetName() {
                this.name = 'Metal Gogo';
            },
            editAge() {
                this.age = 30;
            }
        },
        created() {
            eventBus.$on('nameWasReset', (data) => {
                this.name = data
            });
        }
    }
</script>

<style scoped lang="scss">
    div {
        background-color: lightblue;
    }
</style>
