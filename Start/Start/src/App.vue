<template>
    <div class="container">
        <header-cmp></header-cmp>
        <dashboard></dashboard>
        <footer-cmp></footer-cmp>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import Dashboard from './Dashboard.vue';
    import Footer from './Footer.vue';
    
    export default {
        components: {
            'header-cmp': Header,
            'dashboard': Dashboard,
            'footer-cmp': Footer
        }
    }
</script>

<style>

</style>
