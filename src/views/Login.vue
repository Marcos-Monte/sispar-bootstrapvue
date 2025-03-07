<template>
    <!-- Container principal que ocupa toda a altura da tela e oculta overflow -->
    <b-container fluid class="vh-100 overflow-hidden">
        
        <!-- Linha que ocupa toda a altura da tela sem espaçamento entre colunas -->
        <b-row no-gutters class="h-100">
            
            <!-- Coluna que ocupa 6 colunas no md e 8 colunas no lg, com uma imagem de fundo -->
            <b-col md="6" lg="8" class="backgroundImage"></b-col>
                
            <!-- Coluna que ocupa 12 colunas no xs, 6 colunas no md e 4 colunas no lg, centralizada -->
            <b-col cols="12" md="6" lg="4" class="h-100 d-flex justify-content-center align-items-center">
                
                <!-- Formulário de login com evento de submit -->
                <b-form class="formLogin" @submit.prevent="handleLogin">
                    
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
                    <router-link class="link" to="/home">Esqueci minha senha</router-link>
                    
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
                        <b-col cols="5" xl="5" class="p-0">
                            <b-button class="w-100 btn-primary-dark" type="submit">Entrar</b-button>
                        </b-col>
                        
                        <!-- Botão para criar conta -->
                        <b-col cols="5" xl="5" class="p-0">
                            <b-button class="w-100 btn-primary-light" tag="router-link" to="/novasenha">Criar conta</b-button>
                        </b-col>
                    </b-row>
                    
                </b-form>
                
            </b-col>
            
        </b-row>
        
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            user: { email: '', senha: '' }, // Dados do usuário
            login: { email: 'marcos@gmail.com', senha: '123' }, // Dados de login para validação
            erro: 'Senha ou email inválidos', // Mensagem de erro
            showError: false // Controle de exibição do erro
        }
    },
    methods: {
        handleLogin() {
            // Verifica se o email e senha correspondem aos dados de login
            if (this.login.email === this.user.email && this.login.senha === this.user.senha) {
                this.$router.push('/home'); // Redireciona para a página inicial
            } else {
                this.showError = true; // Exibe mensagem de erro
                setTimeout(() => {
                    this.showError = false; // Oculta mensagem de erro após 3 segundos
                }, 3000)
            }
        }
    }
}
</script>

<style scoped lang="scss">
/* Estilo para a imagem de fundo */
.backgroundImage {
    background-image: url('../assets/login/imageBackground.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100%;
}

/* Estilo para o formulário de login */
.formLogin {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 1rem;
}

/* Oculta a imagem de fundo em telas menores */
@media (max-width: 768px) {
    .backgroundImage {
        display: none;
    }
}

/* Ajusta a largura do formulário em telas maiores */
@media (min-width: 1200px) {
    .formLogin {
        width: 70%; /* Ajuste a largura conforme necessário */
    }
}
</style>