<template>

    <!-- Formulário de login com evento de submit -->
    <b-form class="formLogin">
                    
        <!-- Logo da empresa -->
        <img src="../assets/login/logoSispar.png" alt="Logo da Wilson's Sons">
        
        <!-- Título e descrição do portal -->
        <h2 class="text-center w-80" style="font-weight: bold;">Boas Vindas ao Novo Portal SISPAR</h2>
        <p class="text-center" style="color: var(--primary); font-weight: bold;">Sistema de emissão de Boletos e Parcelamento</p>
        
        <!-- Campo de entrada para email -->
        <b-form-input
            class="input"
            type="email"
            placeholder="Email"
            required
            autocomplete="email"
            id="email"
            v-model="user.email"
        ></b-form-input>
        
        <!-- Campo de entrada para senha -->
        <b-form-input
            class="input"
            type="password"
            placeholder="Senha"
            required
            autocomplete="current-password"
            id="senha"
            v-model="user.senha"
        ></b-form-input>
        
        <!-- Link para recuperação de senha -->
        <router-link class="link" to="/novasenha">Esqueci minha senha</router-link>
        
        <!-- Alerta de erro de login -->
        <b-alert 
            class="alert-link w-100"
            variant="danger"
            :show="showError"
        >
            {{ erro }}
        </b-alert>
        
        <!-- Linha com botões de login e criação de conta -->
        <b-row no-gutters class="w-100 d-flex justify-content-between gap-1">
            
            <!-- Botão de login -->
            <b-col cols="5" class="p-0">
                <b-button class="w-100 btn-primary-dark" @click.prevent="handleLogin()">Entrar</b-button>
            </b-col>
            
            <!-- Botão para criar conta -->
            <b-col cols="5" class="p-0">
                <b-button class="w-100 btn-primary-light" tag="router-link" to="/cadastro">Criar conta</b-button>
            </b-col>
            
        </b-row>
        
    </b-form>

</template>

<script>
import users from '@/data/users';
    export default {

        data() {
            return {
                myUsers: [],
                user: { email: '', senha: '' }, // Dados do usuário
                //login: { email: 'marcos@gmail.com', senha: '123' }, // Dados de login para validação
                erro: '', // Mensagem de erro
                showError: false // Controle de exibição do erro
            }
        },
        methods: {
            handleLogin() {
                try {
                    if(!this.user.email || !this.user.senha) {
                        this.erro = 'Preencha todos os campos'; // Define mensagem de erro
                        this.showError = true; // Exibe mensagem de erro
                        setTimeout(() => {
                            this.showError = false; // Oculta mensagem de erro após 3 segundos
                        }, 3000)
                        return;
                    }

                    for(let user of this.myUsers){

                        if(this.user.email === user.username) {

                            if(this.user.senha === user.password){
                                console.loga(user.password)
                                this.$router.push('/home'); // Redireciona para a página inicial
                                
                            } else {
                                this.erro = 'Senha incorreta'; // Define mensagem de erro
                                this.showError = true; // Exibe mensagem de erro

                                setTimeout(() => {
                                    this.showError = false; // Oculta mensagem de erro após 3 segundos
                                }, 3000)
                                
                            }
                        } else {
                            this.erro = 'Email não cadastrado'; // Define mensagem de erro
                            this.showError = true; // Exibe mensagem de erro
                            setTimeout(() => {
                                this.showError = false; // Oculta mensagem de erro após 3 segundos
                            }, 3000)
                        }
                    }
                    // // Verifica se o email e senha correspondem aos dados de login
                    // if (this.login.email === this.user.email) {

                    //     if (this.login.senha === this.user.senha){
                    //         this.$router.push('/home'); // Redireciona para a página inicial
                    //     } else {
                    //         this.erro = 'Senha incorreta'; // Define mensagem de erro
                    //         this.showError = true; // Exibe mensagem de erro
                    //         setTimeout(() => {
                    //             this.showError = false; // Oculta mensagem de erro após 3 segundos
                    //         }, 3000)
                    //     }
                    // } else {
                    //     this.erro = 'Email não cadastrado'; // Define mensagem de erro
                    //     this.showError = true; // Exibe mensagem de erro
                    //     setTimeout(() => {
                    //         this.showError = false; // Oculta mensagem de erro após 3 segundos
                    //     }, 3000)
                    // }
                } catch (error) {
                    console.error('Erro: ',error); // Exibe erro no console
                }
            }
        },

        mounted(){
            this.myUsers = users
            console.log(this.myUsers)
        }

    }

</script>

<style scoped lang="scss">

    /* Estilo para o formulário de login */
    .formLogin {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 1rem;
    }

</style>