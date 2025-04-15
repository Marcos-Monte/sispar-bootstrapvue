<template>

    <component 
        :is="windowWidth < 768? 'NavMobile': 'NavDesktop'" 
        style="z-index: 10000000;"
        :userName="user.name"
        :userPosition="user.position"
        :userPhoto="user.photo"
    />
</template>

<script>
import NavDesktop from './NavDesktop.vue';
import NavMobile from './NavMobile.vue';
import { mapGetters } from 'vuex';

    export default {
        
        components: {NavDesktop, NavMobile},

        data(){
            return {
                windowWidth: window.innerWidth,
            }
        },

        methods: {

            handleResize(){
                this.windowWidth = window.innerWidth
            },

        },

        mounted(){
            window.addEventListener('resize', this.handleResize)

        },

        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize);
        },

        computed: mapGetters({
            // Antes o usuario era armazenado no 'localStorage', agora foi implementado o uso de Vuex para gerenciamento de estado
            user: 'usuario',
            photo: 'profilePicture'
        })

    }

</script>

<style scoped lang="scss">


</style>