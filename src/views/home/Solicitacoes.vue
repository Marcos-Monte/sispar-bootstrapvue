<template>

    <b-container fluid class="contentBox flex-column justify-content-start align-items-center" >

        <b-row fluid no-gutters >
            <b-col cols="12" class="pathBox d-flex justify-content-start align-items-center gap-3">
                <img src="../../assets/path/iconHomePath.png" alt="Icone de uma casinha">
                <img src="../../assets/path/iconArrowPath.png" alt="Icone de uma seta">
                <p class="m-0">Solicitações de Reembolsos</p>
            </b-col>
        </b-row>

        <b-container fluid class="d-flex flex-column justify-content-between align-items-center vh-100 box">

            <div class="row formBox">
                <!-- Form 1 -->
                <div class="col col-sm-12 col-lg-6">
                    <div class="row gap-2">

                        <div class="col">
                            <label for="name" class="form-label">Nome Completo</label>
                            <input type="text" class="form-control" aria-label="name" required v-model="form.name">
                        </div>

                        <div class="col col-12 col-md-4">
                            <label for="enterprise" class="form-label">Empresa</label>
                            <select class="form-select" aria-label="enterprise" required v-model="form.enterprise">
                                <option selected value="">Selecione</option>
                                <option value="A">Empresa A</option>
                                <option value="B">Empresa B</option>
                                <option value="C">Empresa C</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>

                        <div class="col-12">
                            <label for="description" class="form-label">Motivo do Reembolso</label>
                            <textarea class="form-control" id="description" rows="3" placeholder="Descreva o motivo do reembolso..." v-model="form.description"></textarea>
                        </div>
                    </div>
                </div>

                
                <!-- Form 2 -->
                <div class="col col-12 col-lg-6 my-3">

                    <div class="row gap-2">

                        <div class="col col-12 col-lg-4">
                            <label for="date" class="form-label">Data</label>
                            <input type="date" class="form-control"  aria-label="date" required v-model="form.date">
                        </div>

                        <div class="col col-12 col-lg-4">
                            <label for="expenseType" class="form-label">Tipo de Despesa</label>
                            <select class="form-select" aria-label="expenseType" required v-model="form.expenseType">
                                <option selected value="">Selecione</option>
                                <option value="alimentacao">Alimentação</option>
                                <option value="conducao">Condução</option>
                                <option value="combustível">Combustível</option>
                                <option value="estacionamento">Estacionamento</option>
                                <option value="pedagio">Pedágio</option>
                                <option value="outro">Outros</option>
                            </select>
                        </div>

                        <div class="col col-12 col-lg-3">
                                <label for="currency" class="form-label">Moeda</label>
                                <select class="form-select" aria-label="currency" required v-model="form.currency">
                                    <option selected value="">Selecione</option>
                                    <option value="brl">BRL</option>
                                    <option value="usd">USD</option>
                                    <option value="aur">EUR</option>
                                    <option value="cny">CNY</option>
                                    <option value="outro">Outro</option>
                                </select>
                            </div>
                        
                        <div class="col-12">
                            <label for="expenseValue" class="form-label">Total Despesa</label>
                            <input type="number" class="form-control" id="expenseValue" placeholder="Insirerir o valor da despesa" v-model="form.expenseValue"></input>
                        </div>
                        
                        <b-col cols="12" class="p-0 d-flex justify-content-end align-items-center gap-2">
                            <!-- Botão de login -->
                            <b-button class="btn-primary-dark d-flex justify-content-center align-items-center gap-2"
                                @click="postRegister"
                            >
                                <img src="../../assets/reembolsos/iconSalvar.png" alt="Ícone de salvamento de Registro">
                                Salvar
                            </b-button>
                        
                            <!-- Botão para criar conta -->
                            <b-button class="btn-primary-light" @click="clearForm">
                                <img src="../../assets/reembolsos/iconApagar.png" alt="Ícone de apagar Registro">
                            </b-button>
                        </b-col>

                    </div>
                </div>

                
            </div>

            <div class="row w-100 h-100 d-flex flex-column justify-content-start align-items-center tableBox">

                <template v-if="computedRegisters.length > 0">
                    <b-table
                        reponsive
                        :items="computedRegisters"
                        :per-page="10"
                        :current-page="currentPage"
                        aria-controls="my-table"
                    ></b-table>

                    <b-pagination
                        v-if="computedRegisters.length > 10"
                        first-number
                        align="fill"
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="10"
                        aria-controls="my-table"
                    ></b-pagination>
                </template>

                <template v-else>
                    <h3 class="text-center">Não há registros!</h3>
                </template>

            </div>

            <b-row >
                Footer
            </b-row>

        </b-container>


    </b-container>

</template>

<script>

import NavBar from '@/components/NavBar.vue';

    export default {

        components: {NavBar},

        data(){
            return {
                form: {
                    name: '',
                    enterprise: '',
                    description: '',
                    date: '',
                    expenseType: '',
                    currency: '',
                    expenseValue: ''
                },

                registers: [],

                currentPage: 1,
            }
        },

        methods: {
            postRegister(){

                try{
                
                    this.registers.push({...this.form});

                    localStorage.setItem('registers', JSON.stringify(this.registers));

                    this.form = {};


                } catch(error){
                    console.error('Erro ao registrar, tente novamente!', error)
                }
            },

            loadRegisters(){
                try {
                    const savedRegisters = localStorage.getItem('registers');

                    if (savedRegisters){
                        this.registers = JSON.parse(savedRegisters)
                    }

                    console.log('Registros: ', this.registers)

                } catch(error){
                    console.error('Erro ao carregar Registros!', error)
                }
            }, 

            clearForm(){
                this.form = {
                    name: '',
                    enterprise: 'Selecione',
                    description: '',
                    date: '',
                    expenseType: 'Selecione',
                    currency: 'Selecione',
                    expenseValue: ''
                }
            }
        },

        mounted(){
            this.loadRegisters(); // Carrega registros salvos ao iniciar a aplicação
        },

        computed: {
            computedRegisters(){
                return this.registers
            },

            rows(){
                return this.registers.length
            }
        }

    }

</script>

<style scoped lang="scss">

.contentBox {
    width: 100%;
    height: 100vh !important;
    padding-left: 5rem 0 0 0!important;
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
}

.formBox {
    padding-left: 5rem;
    display: flex;
    align-items: center;

}

.tableBox{
    padding-left: 8rem;
}

@media (max-width: 768px){
    .formBox, .tableBox{
        padding-left: 0;
    }
}

</style>