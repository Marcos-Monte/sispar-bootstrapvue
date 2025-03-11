<template>

    <!-- Linha que centraliza o conteúdo vertical e horizontalmente -->
    <b-row class="justify-content-center align-items-center vh-100 text-center" >

        <!-- Coluna que contém o título e a descrição do sistema -->
        <b-col cols="12">
            <h2>Sistema de Reembolsos</h2>
            <p>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>
        </b-col>

        <!-- Colunas que contêm os cartões de reembolso -->
        <b-col cols="8" md="3" lg="2"
            class="cardCol"
            v-for="(card, index) in cards"
        >

            <!-- Componente de cartão do BootstrapVue -->
            <b-card
                :key="index"
                :title="card.title"
                :img-src="card.img"
                :img-alt="card.alt"
                img-top
                tag="article"
                style=""
                class="card mb-2 p-4"
            >
            </b-card>

        </b-col>

    </b-row>

</template>

<script>
// Importação das imagens dos cartões
import cardAnalises from '../assets/home/cardAnalises.png';
import cardHistorico from '../assets/home/cardHistorico.png';
import cardSolicitacao from '../assets/home/cardSolicitacoes.png';

// Importação do componente NavBar
import NavBar from '@/components/NavBar.vue';

export default {
    // Registro do componente NavBar
    components: { NavBar },

    data() {
        return {
            // Array de objetos que representam os cartões
            cards: [
                { img: cardSolicitacao, title: 'Solicitação de Reembolso', alt: 'Icone do card de Solicitações' },
                { img: cardAnalises, title: 'Verificar Análises', alt: 'Icone do card de Análises' },
                { img: cardHistorico, title: 'Histórico', alt: 'Icone do card de Historico' },
            ]
        }
    }
}
</script>

<style scoped lang="scss">

/* Estilos para a coluna dos cartões */
.cardCol {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Estilos para os cartões */
.card {
    width: 20rem; 
    height: 15rem;
    flex-direction: column;
    justify-content: center;
    align-items: center !important;
    gap: 1rem;

    img {
        width: 2.5rem;
    }

    .card-body {
        height: auto !important;
        flex: none;
    }

    &:hover {
        background-color: var(--background);
        box-shadow: 0px 10px 10px 0 var(--secondary-dark);
    }
}

</style>