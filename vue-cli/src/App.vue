<template>
    <div class="container">
        <header-cmp></header-cmp>
        <dashboard></dashboard>
        <footer-cmp></footer-cmp>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Dashboard from './components/Server/Dashboard.vue';
    import Footer from './components/Shared/Footer.vue';
    
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
