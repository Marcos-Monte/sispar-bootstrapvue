<template>

    <b-container fluid class="contentBox d-flex justify-content-center align-items-center p-0">

        <b-row no-gutters>
            <b-col cols="12" class="pathBox d-flex justify-content-start align-items-center gap-3">
                <img src="../assets/path/iconHomePath.png" alt="Icone de uma casinha">
                <img src="../assets/path/iconArrowPath.png" alt="Icone de uma seta">
                <p class="m-0">Reembolsos</p>
            </b-col>
        </b-row>

        <b-row  no-gutters >
            <b-col cols="12">
                
                <b-row no-gutters fluid>
                    <b-col cols="12">
                        <h2>Sistema de Reembolsos</h2>
                        <p>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>
                    </b-col>
                </b-row>

                <b-row no-gutters fluid class=" d-flex justify-content-center align-items-center">
                    <!-- Colunas que contêm os cartões de reembolso -->
                    <b-col 
                        class="d-flex justify-content-center align-items-center"
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


            </b-col>
        </b-row>

    </b-container>

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

.contentBox {
    width: 100%;
    height: 100%;
    padding-left: 5rem !important;
}

.pathBox{
    position: absolute;
    top:0;
    left: 8rem;
    padding: 1rem 0;
}

/* Estilos para os cartões */
.card {
    width: 20rem; 
    height: 15rem;
    flex-direction: column;
    justify-content: center;
    align-items: center !important;
    gap: 1rem;

    .card-title {
        font-size: 1.2rem;
    }

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