<template>
    <div>
        <div class="row">
            <div class="col-xs-12">
                <header>
                    <h1>{{ heading }}</h1>
                </header>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                heading: 'Server Status'
            };
        }
    }
</script>