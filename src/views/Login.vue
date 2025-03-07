<template>
    <!-- Container principal que ocupa toda a altura da tela e oculta overflow -->
    <b-container fluid class="vh-100 overflow-hidden">
        
        <!-- Linha que ocupa toda a altura da tela sem espaçamento entre colunas -->
        <b-row no-gutters class="h-100">
            
            <!-- Coluna que ocupa 6 colunas no md e 8 colunas no lg, com uma imagem de fundo -->
            <b-col md="6" lg="8" class="backgroundImage"></b-col>
                
            <!-- Coluna que ocupa 12 colunas no xs, 6 colunas no md e 4 colunas no lg, centralizada -->
            <b-col cols="12" md="6" lg="4" class="h-100 d-flex justify-content-center align-items-center">
                
                <Form />
                
            </b-col>
            
        </b-row>
        
    </b-container>
</template>

<script>
// Import de Componentes
import Form from '@/components/Form.vue';

export default {
    // Registro dos componentes
    components: {Form}
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