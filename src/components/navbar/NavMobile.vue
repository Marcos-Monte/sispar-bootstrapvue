<template>

    <!-- Navbar principal que é toggleable em larguras grandes (lg) -->
    <b-navbar toggleable class="navbarBox">

        <router-link to="/home">
            <img src="../../assets/login/logoSispar.png" alt="" >
        </router-link>

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
            <b-navbar-nav class="ml-auto p-2" style="background-color: #fff; border-radius: 6px 6px 6px 6px; box-shadow: 0px 10px 10px 0px var(--background);">
                <!-- Imagem do ícone do usuário -->
                
                <!-- Item de navegação com nome do usuário -->
                <b-nav-item>
                    <img src="../../assets/navbar/cartoon.webp" alt="Ícone que será substituído pela foto do usuário" class="rounded-circle" style="width: 40px; height: 40px; border: none">
                    <p class="name">Marcos Monte</p>
                </b-nav-item>
                <!-- Item de navegação com cargo do usuário -->
                <b-nav-item >
                    <p class="job">Desenvolvedor Web</p>
                </b-nav-item>
                <!-- Item de navegação para a página de início -->
                <b-nav-item >
                    <p>Inicio</p>
                    <b-button class="btn-icon-primary" tag="router-link" to="/home">
                        <img src="../../assets/navbar/iconHome.png" alt="">
                    </b-button>
                </b-nav-item>
                <!-- Item de navegação para a página de reembolsos -->
                <b-nav-item>
                    <p>Reembolsos</p>
                    <b-button class="btn-icon-primary"  tag="router-link" to="/solicitacoes">
                        <img src="../../assets/navbar/iconReembolso.png" alt="">
                    </b-button>
                </b-nav-item>
                <!-- Item de navegação para a página de análises -->
                <b-nav-item>
                    <p>Análises</p>
                    <b-button class="btn-icon-primary"  tag="router-link" to="/analises">
                        <img src="../../assets/navbar/iconAnalises.png" alt="">
                    </b-button>
                </b-nav-item>
                <!-- Item de navegação para a página de histórico -->
                <b-nav-item>
                    <p>Historico</p>
                    <b-button class="btn-icon-primary"  tag="router-link" to="/historico">
                        <img src="../../assets/navbar/iconHistorico.png" alt="">
                    </b-button>
                </b-nav-item>
                <!-- Item de navegação para a página de login -->
                <b-nav-item>
                    <p>Exit</p>
                    <b-button class="btn-icon-secondary"  tag="router-link" to="/">
                        <img src="../../assets/navbar/iconExit.png" alt="">
                    </b-button>
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

    .navbarBox {
        width: 100%;
        padding:  1rem;
        justify-content: space-between;
        position: fixed;
        background-color: #fff;
    }

    /* Estilos para os links de navegação */
    .nav-link {
        width: 100% !important;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1rem;

        p {
            margin: 0 !important;
        }

        .name, .job {
            font-weight: 700;
        }

        .job {
            color: var(--primary)
        }
    }

    /* Estilos para o toggle do dropdown */
    .dropdown-toggle {
        cursor: pointer;
    }

</style>