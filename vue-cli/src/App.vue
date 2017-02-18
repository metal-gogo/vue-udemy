<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-quote>
                    <h2 slot="title">This is a quote title</h2>
                    <p>This is a quote content</p>
                </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';

    export default {
        components: {
            appQuote: Quote
        }
    }
</script>

<style>
</style>
