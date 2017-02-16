<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{ disclaimer }}</p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                disclaimer: 'Server Details are currently not updated'
            };
        }
    }
</script>

<style scoped lang="scss">
    div {
        border: 1px solid red;
    }
</style>