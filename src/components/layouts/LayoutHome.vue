<template>

    <b-container no-gutters fluid="xxl" class="vh-100 overflow-hidden position-relative">

        <NavBar />

        <b-container fluid>

            <router-view></router-view>

        </b-container>

    </b-container>

</template>

<script>

import NavBar from '@/components/NavBar.vue';

    export default {

        components: {NavBar},


    }

</script>

<style scoped lang="scss">


</style>