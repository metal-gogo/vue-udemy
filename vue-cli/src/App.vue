<template>
    <div class="container">
        <app-header></app-header>
        <dashboard></dashboard>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppHeader from './components/Shared/Header.vue';
    import Dashboard from './components/Server/Dashboard.vue';
    import AppFooter from './components/Shared/Footer.vue';
    
    export default {
        components: {
            AppHeader,
            Dashboard,
            AppFooter
        }
    }
</script>

<style>

</style>
