<template>
    <div class="row">
        <server-list></server-list>
        <server-details></server-details>
    </div>
</template>

<script>
    import ServerList from './ServerList.vue';
    import ServerDetails from './ServerDetails.vue';

    export default {
        components: {
            ServerList,
            ServerDetails
        }
    }
</script>