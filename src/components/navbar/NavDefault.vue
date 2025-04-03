<template>

    <b-navbar toggleable="sm">
        <b-navbar-brand to="/">
            <img src="@/assets/navbar/logoSispar.png" alt="Logo Sispar">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav  class="d-flex justify-content-end align-items-center w-100">
                <b-nav-item tag="router-link" to="/admin/novasenha">Nova Senha</b-nav-item>
                <b-nav-item tag="router-link" to="/admin/cadastro">Cadastrar Usuário</b-nav-item>
                <b-nav-item tag="router-link" to="/">Login</b-nav-item>
            </b-navbar-nav>
            
        </b-collapse>
    </b-navbar>

</template>

<script>

    export default {
        props: ['userName', 'userPosition', 'userPhoto']
    }

</script>

<style scoped lang="scss">

.nav-link {
    color: var(--primary-dark);

    &:hover{
        color: var(--primary)
    }
}

</style>