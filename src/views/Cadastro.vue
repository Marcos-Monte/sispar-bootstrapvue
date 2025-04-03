<template>

    <b-container fluid  class="d-flex justify-content-center align-items-center" style="min-height: 80vh;">
        <!-- Formulário de login com evento de submit -->
        <b-form class="formCreateUser w-100 h-100" >

            <b-overlay :show="loading">
                <div class="overlay__inner">
                    <div class="overlay__content overlayClass">
                        <span class="spinner"></span>
                    </div>
                </div>
            </b-overlay>

            <h2 class="text-center w-80" style="font-weight: bold;">Crie seu usuário no Portal SISPAR</h2>
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

            <!-- Campo de entrada para email -->
            <b-form-input
                class="input"
                type="email"
                placeholder="Confirme seu Email"
                required
                autocomplete="email"
                id="email"
                v-model="user.emailConfirm"
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
            
            
            <!-- Campo de entrada para senha -->
            <b-form-input
                class="input"
                type="password"
                placeholder="Confirme sua Senha"
                required
                autocomplete="current-password"
                id="senha"
                v-model="user.senhaConfirm"
            ></b-form-input>

            <!-- Linha com botões de login e criação de conta -->
            <b-row no-gutters class="w-100 d-flex justify-content-center gap-1">
                
                <!-- Botão de login -->
                <b-col cols="5" class="p-0">
                    <b-button class="w-100 btn-primary-dark" @click.prevent="submitNewUser()">Criar</b-button>
                </b-col>
                
            </b-row>
            
            <!-- Alerta de erro de login -->
            <b-alert 
                class="alert-link w-100"
                :variant="type"
                :show="message"
            >
                {{ erro }}
            </b-alert>
        </b-form>

    </b-container>


</template>

<script>

    export default {
        data(){
            return {
                user: {
                    email: '',
                    emailConfirm: '',
                    senha: '',
                    senhaConfirm: '',
                },
                loading: false,
                message: false, // Controle de exibição do erro
                type: '',
                erro: '',
            }
        },

        methods: {
            clearForm(){
                this.user = {}
            },
            submitNewUser(){
                this.loading = true


                try {

                    if(!this.user.email || !this.user.emailConfirm || !this.user.senha || !this.user.senhaConfirm){
                        this.erro = 'Favor, preencher todos os campos!'
                        this.message = true;
                        this.type= 'danger'
                        setTimeout(() => (this.message = false), 3000)
                        return 
                    } 

                    if(this.user.email !== this.user.emailConfirm){
                        this.erro = 'Os campos de email, devem ser iguais!'
                        this.message = true;
                        this.type= 'danger'
                        setTimeout(() => (this.message = false), 3000)
                        return 
                    }

                    if(this.user.senha !== this.user.senhaConfirm){
                        this.erro = 'Os campos de senha, devem ser iguais!'
                        this.message = true;
                        this.type= 'danger'
                        setTimeout(() => (this.message = false), 3000)
                        return 
                    }
                    
                    localStorage.setItem('temporaryUser', JSON.stringify({
                        username: this.user.email,
                        password: this.user.senha
                    }))

                    this.erro = 'Usuário cadatrado com sucesso!'
                    this.message = true;
                    this.type= 'success'
                    this.clearForm()
                    setTimeout(() => {
                        this.message = false
                        this.$router.push('/')
                    }, 3000)

                } catch (error){
                    console.error('Não foi possível submeter o formulário: ', error)
                } finally {
                    this.loading = false
                }
            }
        }
    }

</script>

<style scoped lang="scss">

.formCreateUser {
    background-color: var(--primary-light);
    max-height: 800px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 6px;
}

</style>