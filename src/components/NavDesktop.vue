<template>

    <!-- Container principal da barra de navegação -->
    <div class="d-flex flex-column justify-content-between bar" :class="open? 'visible': 'hidden'">
        
        <!-- Botão para abrir/fechar a barra de navegação -->
        <b-button class="btn-icon-primary"  @click="handleOpen">
            <img src="../assets/navbar/iconOpen.png" alt="Icone do Botão que abre a barra de navegação">
        </b-button>

        <!-- Navegação principal -->
        <b-navbar-nav>

            <!-- Item de navegação para a página inicial -->
            <b-nav-item>
                <b-button class="btn-icon-primary" tag="router-link" to="/home" @click="() => open = false">
                    <img src="../assets/navbar/iconHome.png" alt="Icone do Botão de Inicio">
                </b-button>
                <p>Início</p>
            </b-nav-item>
            
            <!-- Item de navegação para a página de solicitações -->
            <b-nav-item >
                <b-button class="btn-icon-primary" tag="router-link" to="/solicitacoes" @click="() => open = false">
                    <img src="../assets/navbar/iconReembolso.png" alt="Icone do Botão de Solicitação de Reembolsos">
                </b-button>
                <p>Reembolsos</p>
            </b-nav-item>
            
            <!-- Item de navegação para a página de análises -->
            <b-nav-item>
                <b-button class="btn-icon-primary" tag="router-link" to="/analises" @click="() => open = false">
                    <img src="../assets/navbar/iconAnalises.png" alt="Icone do Botão de Análises">
                </b-button>
                <p>Análises</p>
            </b-nav-item>
            
            <!-- Item de navegação para a página de histórico -->
            <b-nav-item>
                <b-button class="btn-icon-primary" tag="router-link" to="/historico" @click="() => open = false">
                    <img src="../assets/navbar/iconHistorico.png" alt="Icone do Botão de Entrar nos Historicos">
                </b-button>
                <p>Histórico</p>
            </b-nav-item>
            
        </b-navbar-nav>

        <!-- Botão para sair/navegar para a página inicial -->
        <b-button class="btn-icon-secondary" tag="router-link" to="/">
            <img src="../assets/navbar/iconExit.png" alt="Icone do Botão que abre a barra de navegação">
        </b-button>

    </div>

</template>

<script>

    export default {

        data(){
            return {
                open: false, // Estado que controla se a barra de navegação está aberta ou fechada
            }
        },

        methods: {
            // Método para alternar o estado da barra de navegação
            handleOpen(){
                return this.open = !this.open;
            }
        }
    }

</script>

<style scoped lang="scss">

    .bar {
        height: 100% !important;
        padding: .3rem;

        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;

        transition: opacity 0.8s ease-in-out;
        transition: width 0.2s ease-in-out;
        background-color: #fff;
    }

    .visible {
        width: 200px !important;
        box-shadow: 0px 10px 10px 0 var(--secondary-dark);
        transition: opacity 0.8s ease-in-out;
        transition: width 0.2s ease-in-out;
    }

    .hidden {
        width: 6% !important;
        align-items: flex-start !important;
        transition: opacity 0.8s ease-in-out;
        transition: width 0.2s ease-in-out;

        .navbar-nav p {
            display: none !important;
        }
    }

    .nav-link{ 
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: .5rem;

        p {
            margin: 0 !important;
        }
    }

</style>