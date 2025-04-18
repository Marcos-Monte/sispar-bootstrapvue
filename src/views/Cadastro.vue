<template>

    <b-container fluid  class="d-flex justify-content-center align-items-center" style="min-height: 80vh;">
        <!-- Formulário de login com evento de submit -->
        <b-form class="formCreateUser w-100 h-100" >

            <b-overlay :show="loading">
                <div class="overlay__inner">
                    <div class="overlay__content ">
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

            <caption>Informações Pessoais</caption>

            <!-- Input de foto do usuário -->
            <input type="file" @change="onFileChange" accept="image/*" required />

            <!-- Campo de entrada para nome -->
            <b-form-input
                class="input"
                type="text"
                placeholder="Nome"
                required
                autocomplete="name"
                id="name"
                v-model="user.name"
            ></b-form-input>
            
            <!-- Campo de entrada para cargo -->
            <b-form-input
                class="input"
                type="text"
                placeholder="Cargo"
                required
                autocomplete="position "
                id="position"
                v-model="user.position"
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
import {mapGetters, mapActions} from 'vuex'

    export default {
        data(){
            return {
                user: {
                    email: '',
                    emailConfirm: '',
                    senha: '',
                    senhaConfirm: '',
                    name: '',
                    position: '',
                    picture: null,
                },
                loading: false,
                message: false, // Controle de exibição do erro
                type: '',
                erro: '',
            }
        },
        

        methods: {
            ...mapActions(['criarNovoUsuario', 'saveProfilePicture']), // Mapeando actions do Vuex

            clearForm(){
                this.user = {}
            },
            
            onFileChange(e) {
                const file = e.target.files[0];
                if (file) {
                    this.picture = file;
                }
            },

            submitNewUser(){
                this.loading = true
                // Cria uma nova instância de FileReader para ler a imagem como base64
                const reader = new FileReader();

                try {
                     // Validação: Verifica se todos os campos obrigatórios de email e senha estão preenchidos
                    if(!this.user.email || !this.user.emailConfirm || !this.user.senha || !this.user.senhaConfirm){
                        this.erro = 'Favor, preencher todos os campos!'
                        this.message = true;
                        this.type= 'danger'
                        setTimeout(() => (this.message = false), 3000)
                        return 
                    } 

                    // Validação: Confere se os dois campos de email são iguais
                    if(this.user.email !== this.user.emailConfirm){
                        this.erro = 'Os campos de email, devem ser iguais!'
                        this.message = true;
                        this.type= 'danger'
                        setTimeout(() => (this.message = false), 3000)
                        return 
                    }

                    // Validação: Confere se os dois campos de senha são iguais
                    if(this.user.senha !== this.user.senhaConfirm){
                        this.erro = 'Os campos de senha, devem ser iguais!'
                        this.message = true;
                        this.type= 'danger'
                        setTimeout(() => (this.message = false), 3000)
                        return 
                    }

                     // Define a função que será executada após o FileReader terminar de ler o arquivo
                    reader.onload = (e) => {
                         // Extrai o resultado da leitura do arquivo como base64
                        const pictureDataUrl = e.target.result;

                        // Monta o objeto `user` com os dados do formulário
                        const user = {
                            username: this.user.email,
                            password: this.user.senha,
                            name: this.user.name,
                            position: this.user.position,
                            photo: pictureDataUrl, // adiciona a foto convertida
                        }

                        // Dispara a action Vuex para criar o novo usuário
                        this.criarNovoUsuario(user)
                        console.log(user)

                        // Mensagem de sucesso e redirecionamento
                        this.erro = 'Usuário cadatrado com sucesso!'
                        this.message = true;
                        this.type= 'success'

                        // Limpa os dados do formulário
                        this.clearForm()

                         // Após 3 segundos, esconde a mensagem e redireciona para a página de Login
                        setTimeout(() => {
                            this.message = false
                            this.$router.push('/')
                        }, 3000)
                    }

                } catch (error){
                    console.error('Não foi possível submeter o formulário: ', error)
                } finally {
                     // Encerra o estado de carregamento
                    this.loading = false
                     // Inicia a leitura do arquivo de imagem em base64 (isso dispara o reader.onload
                    reader.readAsDataURL(this.picture); 
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