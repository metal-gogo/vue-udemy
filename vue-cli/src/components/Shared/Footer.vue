<template>
    <div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>{{ summary }}</p>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                summary: 'All Servers are managed here'
            };
        }
    }
</script>