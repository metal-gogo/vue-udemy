<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="index in serverAmount">
                Server #{{ index }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                serverAmount: 10
            };
        }
    }
</script>