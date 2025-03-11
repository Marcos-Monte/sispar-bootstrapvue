<template>

    <!-- Navbar principal que é toggleable em larguras grandes (lg) -->
    <b-navbar toggleable sticky>

        <!-- Botão de toggle para o colapso do usuário -->
        <b-navbar-toggle target="navbar-toggle-collapse-user" >
            <!-- Imagem do ícone do usuário -->
            <img src="../assets/navbar/iconPhoto.png" alt="Ícone que será substituído pela foto do usuário" class="rounded-circle" style="width: 40px; height: 40px; border: none">
        </b-navbar-toggle>

        <!-- Botão de toggle para o colapso principal -->
        <b-navbar-toggle target="navbar-toggle-collapse" class="btn-icon-primary">
            <!-- Template para ícone de toggle -->
            <template #default="{ expanded }">
                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
        </b-navbar-toggle>

        <!-- Colapso do navbar principal -->
        <b-collapse id="navbar-toggle-collapse" is-nav>
            <!-- Navbar nav com classe condicional baseada na largura da janela -->
            <b-navbar-nav class="ml-auto p-2">
                <!-- Item de navegação para a página de início -->
                <b-nav-item >
                    <p>Inicio</p>
                    <b-button class="btn-icon-primary" tag="router-link" to="/home">
                        <img src="../assets/navbar/iconHome.png" alt="">
                    </b-button>
                </b-nav-item>
                <!-- Item de navegação para a página de reembolsos -->
                <b-nav-item>
                    <p>Reembolsos</p>
                    <b-button class="btn-icon-primary"  tag="router-link" to="/solicitacoes">
                        <img src="../assets/navbar/iconReembolso.png" alt="">
                    </b-button>
                </b-nav-item>
                <!-- Item de navegação para a página de análises -->
                <b-nav-item>
                    <p>Análises</p>
                    <b-button class="btn-icon-primary"  tag="router-link" to="/analises">
                        <img src="../assets/navbar/iconAnalises.png" alt="">
                    </b-button>
                </b-nav-item>
                <!-- Item de navegação para a página de histórico -->
                <b-nav-item>
                    <p>Historico</p>
                    <b-button class="btn-icon-primary"  tag="router-link" to="/historico">
                        <img src="../assets/navbar/iconHistorico.png" alt="">
                    </b-button>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>

        <!-- Colapso do navbar para o usuário -->
        <b-collapse id="navbar-toggle-collapse-user" is-nav>
            <!-- Navbar nav com classe condicional baseada na largura da janela -->
            <b-navbar-nav class="ml-auto p-2">
                <!-- Item de navegação com nome do usuário -->
                <b-nav-item >
                    <p>Marcos Monte</p>
                </b-nav-item>
                <!-- Item de navegação com cargo do usuário -->
                <b-nav-item >
                    <p>Desenvolvedor Front-End</p>
                </b-nav-item>
                <!-- Item de navegação para a página de login -->
                <b-nav-item>
                    <b-button class="btn-icon-secondary"  tag="router-link" to="/">
                        <img src="../assets/navbar/iconExit.png" alt="">
                    </b-button>
                    <p>Exit</p>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>

    </b-navbar>

</template>

<script>

    export default {

    }

</script>

<style scoped lang="scss">

    /* Estilos para os links de navegação */
    .nav-link {
        width: 100% !important;
        display: flex;
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

        .nav-link {
            justify-content: flex-end;
        }
        
        //box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1);
    }

    /* Estilos para o toggle do dropdown */
    .dropdown-toggle {
        cursor: pointer;
    }

</style>