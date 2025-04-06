<template>

    <b-container fluid class="contentBox flex-column justify-content-center align-items-center" >

        <b-row fluid no-gutters >
            <b-col cols="12" class="pathBox d-flex justify-content-start align-items-center gap-3">
                <img src="../../assets/path/iconHomePath.png" alt="Icone de uma casinha">
                <img src="../../assets/path/iconArrowPath.png" alt="Icone de uma seta">
                <p class="m-0">Histórico</p>
            </b-col>
        </b-row>

        <b-container fluid class="d-flex flex-column justify-content-between align-items-center vh-100 box">

            <div class="row w-100 vh-100 d-flex flex-column justify-content-start align-items-center">
                
                <template v-if="(registers.length > 0)">
                    
                    <div class="tableBox">
                        <b-overlay :show="loading">
                            <div class="overlay__inner mt-5">
                                <div class="overlay__content overlayClass">
                                    <span class="spinner"></span>
                                </div>
                            </div>
                        </b-overlay>

                        

                        <b-table
                            caption-top
                            reponsive
                            :items="registers"
                            :fields="fields"
                            :per-page="10"
                            :current-page="currentPage"
                            sort-icon-left
                            no-sort-reset
                            aria-controls="my-table"
                        >

                        <template #table-caption>
                            <p style="text-transform: capitalize;">
                                histórico de solicitações de {{ user.name }}
                            </p>
                        </template>

                        </b-table>
                    
                        <b-pagination
                            v-if="registers.length > 10"
                            first-number
                            align="fill"
                            v-model="currentPage"
                            :total-rows="rows"
                            :per-page="10"
                            aria-controls="my-table"
                        ></b-pagination>

                    </div>

                </template>

                <template v-else>
                    <div class="tableBox" style="justify-content: center !important;">
                        <h3 class="text-center">Não há registros!</h3>
                    </div>
                </template>

            </div>

        </b-container>


    </b-container>

</template>

<script>
import NavBar from '@/components/navbar/NavBar.vue';
import http from '@/config';

    export default {

        components: {NavBar},

        data(){
            return {
                registers: [],
                loading: false,
                currentPage: 1,

                fields: [
                    { key: 'date', label: 'Data', formatter: (value) => {
                        return new Date(value).toLocaleDateString('pt-BR', {timeZone: 'UTC'})
                    }},
                    { key: 'name', label: 'Colaborador', formatter: (value) => value.toUpperCase()},
                    { key: 'position', label: 'Cargo', formatter: (value) => value.toUpperCase()},
                    { key: 'enterprise', label: 'Cliente', formatter: (value) => value.toUpperCase()},
                    { key: 'expenseType', label: 'Tipo de Despesa', formatter: (value) => value.toUpperCase()},
                    { key: 'description', label: 'Motivo do Reembolso', formatter: (value) => {
                        return value !== '' ? value.toUpperCase() : value = 'Sem Registro'
                    }},
                    { key: 'expenseValue', label: 'Valor da Despesa', formatter: (value) => `R$ ${parseFloat(value.replace('.', ',')).toFixed(2)}`},
                    { key: 'status', label: 'Status', formatter: (value) => value.toUpperCase(), sortable: true},
                ],

                user: [],
            }
        },

        methods: {
            async loadRegisters(){
                this.loading = true
                try {
                    const response = await http.get('/')
                    this.registers = response.data

                    this.loading = false
                } catch(error){
                    console.error('Não foi possível carregar os dados: ', error)
                }
            }
        },

        mounted(){
            this.loadRegisters()
            const user = JSON.parse(localStorage.getItem('user'))
            this.user =  user
        },

        computed: {
            rows(){
                return this.registers.length
            },
        }

    }

</script>

<style scoped lang="scss">

.contentBox {
    width: 100%;
    min-height: 100vh !important; // Alterado de height para min-height
    overflow-y: auto; // Garante o scroll quando necessário
    padding-left: 8rem !important;
    gap: 3rem;

    h2 {
        font-weight: 700;
    }
}

.pathBox{
    position: absolute;
    top:0;
    left: 8rem;
    padding: 1rem 0;
}

.box{
    padding-top: 5rem !important;
    min-height: 100vh !important; // Permite o crescimento da altura conforme o conteúdo
}

.tableBox{
    //min-height: 50%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: solid .8px var(--secondary);
    border-radius: 6px;

    .btn-delete{
        width: 100%;
        background-color: transparent;
        border: none;

        &:hover {
            background-color: var(--accent);
        }
    }
}

</style>