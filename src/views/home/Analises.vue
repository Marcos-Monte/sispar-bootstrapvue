<template>

    <b-container fluid class="contentBox flex-column justify-content-center align-items-center" >

        <b-row fluid no-gutters >
            <b-col cols="12" class="pathBox d-flex justify-content-start align-items-center gap-3">
                <img src="../../assets/path/iconHomePath.png" alt="Icone de uma casinha">
                <img src="../../assets/path/iconArrowPath.png" alt="Icone de uma seta">
                <p class="m-0">Analises</p>
            </b-col>
        </b-row>

        <b-container fluid class="d-flex flex-column justify-content-between align-items-center vh-100 box">

            

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

.contentBox {
    width: 100%;
    height: 100vh !important;
    padding-left: 5rem 0 0 0!important;
    gap: 3rem;

    h2 {
        font-weight: 700;
    }
}

.pathBox{
    position: absolute;
    top:0;
    left: 8rem;
    padding: 1rem 0;
}

.box{
    padding-top: 4rem !important;
}

</style>