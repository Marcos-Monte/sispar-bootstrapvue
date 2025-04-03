<template>

    <component 
        :is="windowWidth < 768? 'NavMobile': 'NavDesktop'" 
        style="z-index: 10000000;"
        :userName="name"
        :userPosition="position"
        :userPhoto="photo"
    />

</template>

<script>
import NavDesktop from './NavDesktop.vue';
import NavMobile from './NavMobile.vue';

    export default {
        
        components: {NavDesktop, NavMobile},

        data(){
            return {
                windowWidth: window.innerWidth,

                name: '',
                position: '',
                photo: '',
                
            }
        },

        methods: {

            handleResize(){
                this.windowWidth = window.innerWidth
            },

        },

        mounted(){
            window.addEventListener('resize', this.handleResize)
            const user = JSON.parse(localStorage.getItem('user'))
            if(!user){
                this.$router.push('/login')
                return
            }

            this.name = user.name
            this.position = user.position
            this.photo =  user.photo
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize);
            //barramento.$off('logged', this.getUserInfos); // Remove o evento ao desmontar
        }
    }

</script>

<style scoped lang="scss">


</style>