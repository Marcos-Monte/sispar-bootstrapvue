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
        <router-link class="link" to="/admin/novasenha">Esqueci minha senha</router-link>
        
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
                <b-button class="w-100 btn-primary-light" tag="router-link" to="/admin/cadastro">Criar conta</b-button>
            </b-col>
            
        </b-row>
        
    </b-form>

</template>

<script>
import barramento from '@/data/eventBus';
import users from '@/data/users';

    export default {

        data() {
            return {
                myUsers: [],
                user: { email: '', senha: '' }, // Dados do usuário
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

                    const user = this.myUsers.find(u => u.username === this.user.email)

                    if(!user){
                        this.erro = 'Email não cadastrado'
                    } else if (user.password !== this.user.senha){
                        this.erro = 'Senha Incorreta'
                    } else {
                        const userInfos = {
                            username: user.username,
                            password: user.password,
                            name: user.name,
                            position: user.position,
                            photo: user.photo
                        }
                        barramento.$emit('logged', userInfos)
                        localStorage.setItem('user', JSON.stringify(userInfos))
                        localStorage.setItem('registersStorage', JSON.stringify([]))

                        this.$router.push('/home')
                        return
                    }

                    this.showError = true;
                    setTimeout(() => (this.showError = false), 3000)

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