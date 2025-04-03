<template>

    <b-container no-gutters fluid class="overflow-hidden position-relative p-0 d-flex justify-content-between flex-column">

        <NavBar />

        <!-- <b-container fluid class="contentBox d-flex flex-column justify-content-center align-items-center"> -->
            
            <router-view></router-view>

        <!-- </b-container> -->

    </b-container>

</template>

<script>

import NavBar from '@/components/navbar/NavDefault.vue';

    export default {

        components: {NavBar},

    }

</script>

<style scoped lang="scss">

</style>