<template>

    <!-- Navbar principal que é toggleable em larguras grandes (lg) -->
    <b-navbar toggleable>

        Desktop

    </b-navbar>

</template>

<script>

    export default {
        // Dados do componente
        data(){
            return {
                // Armazena a largura da janela
                windowWidth: window.innerWidth,
            }
        },

        // Métodos do componente
        methods: {
            // Método para atualizar a largura da janela
            handleResize(){
                return this.windowWidth = window.innerWidth;
            }
        }, 

        // Hook do ciclo de vida do Vue que é chamado quando o componente é montado
        mounted(){
            // Adiciona um listener para o evento de redimensionamento da janela
            window.addEventListener('resize', this.handleResize);
        },

    }

</script>

<style scoped lang="scss">

    /* Estilos para os links de navegação */
    .nav-link {
        width: 100% !important;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        /* background-color: red; */

        p {
            margin: 0 !important;
        }
    }

    /* Estilos para a classe 'open' */
    .openUser {
        position: absolute;
        top: 66px;
        left: 0;
        
        // box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1);
    }
    /* Estilos para a classe 'open' */
    .openItems {
        position: absolute;
        top: 66px;
        right: 0;
        
        //box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1);
    }

    /* Estilos para o toggle do dropdown */
    .dropdown-toggle {
        cursor: pointer;
    }

</style>