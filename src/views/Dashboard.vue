<template>

    <b-container fluid class="contentBox d-flex justify-content-center align-items-center p-0 gap-3">

        <b-row fluid no-gutters >
            <b-col cols="12" class="pathBox d-flex justify-content-start align-items-center gap-3">
                <img src="../assets/path/iconHomePath.png" alt="Icone de uma casinha">
                <img src="../assets/path/iconArrowPath.png" alt="Icone de uma seta">
                <p class="m-0">Reembolsos</p>
            </b-col>
        </b-row>

        <b-row no-gutters >
            <b-col cols="12" >
                
                <b-row no-gutters fluid>
                    <b-col cols="12" >
                        <h2>Sistema de Reembolsos</h2>
                        <p>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>
                    </b-col>
                </b-row>

                <b-row no-gutters fluid class="d-flex justify-content-center align-items-center">
                    <!-- Colunas que contêm os cartões de reembolso -->
                    <b-col 

                        class="d-flex justify-content-center align-items-center p-0 gap-5 cardsBox"
                        v-for="(card, index) in cards" :key="index"
                    >

                        <!-- Componente de cartão do BootstrapVue -->
                        <router-link :to="card.route" style="text-decoration: none;">
                            <b-card
                                
                                :title="card.title"
                                :img-src="card.img"
                                :img-alt="card.alt"
                                img-top
                                tag="article"
                                style=""
                                class="card mb-2 p-4"
                                @click=""
                            >
                            </b-card>
                        </router-link>

                    </b-col>
                </b-row>

                <b-row no-gutters fluid>

                    <b-col 
                        class="d-flex justify-content-around align-items-center indexBox">

                        <div v-for="(info, index) in indexes" :key="index">
                            <img :src="info.img" alt="Ícone de solicitação" :style="{backgroundColor: `var(--${info.background})`}">
                            <span>{{ info.value }}</span>
                            <p>{{ info.text }}</p>
                        </div>

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
// Import de Imagens dos Indices
import iconAnalise from '../assets/home/iconAnalise.png';
import iconAprovados from '../assets/home/iconAprovados.png';
import iconRejeitados from '../assets/home/iconRejeitados.png';
import iconSolicitacao from '../assets/home/iconSolicitacao.png';

// Importação do componente NavBar
import NavBar from '@/components/NavBar.vue';

export default {
    // Registro do componente NavBar
    components: { NavBar },

    data() {
        return {
            // Array de objetos que representam os cartões
            cards: [
                { img: cardSolicitacao, title: 'Solicitação de Reembolso', alt: 'Icone do card de Solicitações', route: '/solicitacoes' },
                { img: cardAnalises, title: 'Verificar Análises', alt: 'Icone do card de Análises', route: '/analises' },
                { img: cardHistorico, title: 'Histórico', alt: 'Icone do card de Historico', route: '/historico' },
            ],

            indexes: [
                { img:iconAnalise, value: 182, text: 'analisando', alt: 'icone de ', background: 'primary-light'},
                { img:iconAprovados, value: 182, text: 'aprovados', alt: 'icone de ', background: 'orange'},
                { img:iconRejeitados, value: 182, text: 'rejeitados', alt: 'icone de ', background: 'green'},
                { img:iconSolicitacao, value: 182, text: 'solicitados', alt: 'icone de ', background: 'accent'},
        ]
        }
    }
}
</script>

<style scoped lang="scss">

.contentBox {
    width: 100%;
    height: 100vh !important;
    padding-left: 5rem !important;
    gap: 3rem;
}

.pathBox{
    position: absolute;
    top:0;
    left: 8rem;
    padding: 1rem 0;
}

/* Estilos para os cartões */

.cardsBox:nth-child(even){
    margin: 0 1rem;
}

.card {
    width: 20rem; 
    height: 15rem;
    flex-direction: column;
    justify-content: center;
    align-items: center !important;
    gap: 1rem;
    border: 0.8px solid var(--secondary-dark) ;

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

// Estilos dos Status
.indexBox {
    width: 100%;
    height: 100%;
    padding: 1rem 0;
    border: 0.8px solid var(--secondary-dark);
    border-radius: 6px;
    flex-wrap: wrap;

    div {
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        img {
            padding: .8rem;
            border-radius: 6px;
        }

        span {
            font-weight: 700;
        }

        p {
            margin: 0;
        }
    }
}

@media (max-width: 768px){
    .contentBox{
        padding: 6rem 1rem 1rem 1rem !important;
        height: 100% !important;
    }

    .cardsBox:nth-child(even){
        margin: 0;
    }
}

</style>