<template>

    <b-container fluid class="vh-100 overflow-hidden">

        <b-row no-gutters class="h-100">
            
            <b-col md="6" lg="8" class="backgroundImage"></b-col>
                
            <b-col cols="12" md="6" lg="4" class="h-100 d-flex justify-content-center align-items-center">

                <b-form class="formLogin" @submit.prevent="handleLogin">

                    <img src="../assets/login/logoSispar.png" alt="Logo da Wilson's Sons">

                    <h2 class="text-center w-80" style="font-weight: bold;">Boas Vindas ao Novo Portal SISPAR</h2>
                    <p class="text-center" style="color: var(--primary); font-weight: bold;">Sistema de emissão de Boletos e Parcelamento</p>

                    <b-form-input
                        class="input"
                        type="email"
                        placeholder="Email"
                        required
                        autocomplete="email"

                        id="email"
                        v-model="user.email"
                    ></b-form-input>

                    <b-form-input
                        class="input"
                        type="password"
                        placeholder="Senha"
                        required
                        autocomplete="current-password"

                        id="senha"
                        v-model="user.senha"
                    ></b-form-input>

                    <router-link class="link" to="/home">Esqueci minha senha</router-link>

                    <b-alert 
                        class="alert-link w-100"
                        variant="danger"
                        
                        :show="showError"
                    >
                        {{ erro }}
                    </b-alert>

                    <b-row no-gutters class="w-100 d-flex justify-content-between gap-1">
                        
                        <b-col cols="5"  xl="5" class="p-0">
                            <b-button class="w-100 btn-primary-dark" type="submit">Entrar</b-button>
                        </b-col>

                        <b-col cols="5"  xl="5" class="p-0">
                            <b-button class="w-100 btn-primary-light"tag="router-link" to="/novasenha">Criar conta</b-button>
                        </b-col>
                    </b-row>

                </b-form>

            </b-col>

        </b-row>

    </b-container>

</template>

<script>


    export default{

        data(){
            return{
                user: {email: '', senha: ''},

                login: {
                    email: 'marcos@gmail.com',
                    senha: '123'
                },

                erro: 'Senha ou email inválidos',
                showError: false
                
            }
        },

        methods: {
            handleLogin() {
                if (this.login.email === this.user.email && this.login.senha === this.user.senha) {
                    this.$router.push('/home');
                } else {
                    this.showError = true;
                    setTimeout(() => {
                        this.showError = false;
                    }, 3000)
                }
            }
        }
    }

</script>

<style scoped lang="scss">


    .backgroundImage{
        background-image: url('../assets/login/imageBackground.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 100%;
    }

    .formLogin{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 1rem;
    }

    @media (max-width: 768px) {
        .backgroundImage{
            display: none;
        }
    }

    @media (min-width: 1200px) {
        .formLogin{
            width: 70%; /* Ajuste a largura conforme necessário */
        }
    }

</style>