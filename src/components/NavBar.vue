<template>

    <component :is="windowWidth < 576? 'NavMobile': 'NavDesktop'" />

</template>

<script>
import NavDesktop from './NavDesktop.vue';
import NavMobile from './NavMobile.vue';

    export default {
        
        components: {NavDesktop, NavMobile},

        data(){
            return {
                windowWidth: window.innerWidth,
            }
        },

        methods: {

            handleResize(){
                return this.windowWidth = window.innerWidth
            }

        },

        mounted(){
            window.addEventListener('resize', this.handleResize)
        },

        beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    }
    }

</script>

<style scoped lang="scss">


</style>