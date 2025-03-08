<template>

    <b-navbar toggleable>

        <b-navbar-toggle target="navbar-toggle-collapse-user" >

            <img src="../assets/navbar/iconPhoto.png" alt="Ícone que será substituído pela foto do usuário" class="rounded-circle" style="width: 40px; height: 40px; border: none">

        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse-user" is-nav>

            <b-navbar-nav class="ml-auto p-2 open" >

                <b-nav-item >
                    <p>Marcos Monte</p>
                </b-nav-item>
                <b-nav-item >
                    <p>Desenvolvedor Front-End</p>
                </b-nav-item>
            
            </b-navbar-nav>

        </b-collapse>

        <b-navbar-toggle target="navbar-toggle-collapse" class="btn-icon-primary">

            <template #default="{ expanded }">
                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>

        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>

            <b-navbar-nav class="ml-auto p-2 open" >

                <b-nav-item >

                    <b-button class="btn-icon-primary" tag="router-link" to="/reembolsos">
                        <img src="../assets/navbar/iconHome.png" alt="">
                    </b-button>

                    <p>Inicio</p>
                </b-nav-item>

                <b-nav-item href="#">

                    <b-button class="btn-icon-primary"  tag="router-link" to="/solicitacoes">
                        <img src="../assets/navbar/iconReembolso.png" alt="">
                    </b-button>

                    <p>Reembolsos</p>
                </b-nav-item>

                <b-nav-item href="#">

                    <b-button class="btn-icon-primary"  tag="router-link" to="/analises">
                        <img src="../assets/navbar/iconAnalises.png" alt="">
                    </b-button>

                    <p>Análises</p>
                </b-nav-item>

                <b-nav-item href="#">

                    <b-button class="btn-icon-primary"  tag="router-link" to="/historico">
                        <img src="../assets/navbar/iconHistorico.png" alt="">
                    </b-button>

                    <p>Historico</p>
                </b-nav-item>
                
            </b-navbar-nav>

        </b-collapse>

    </b-navbar>

</template>

<script>

    export default {



    }

</script>

<style scoped lan="scss">

    .nav-link {
        width: 100% !important;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;
        /* background-color: red; */

        p {
            margin: 0 !important;
        }
    }

    .open {
        /* background-color: red; */
        /* max-width: 150px !important; */
        box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1);
    }

    .dropdown-toggle {
        cursor: pointer;
    }

    #navbar-toggle-collapse-user {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;}

</style>