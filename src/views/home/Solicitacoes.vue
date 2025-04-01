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
                            <input type="text" class="form-control" aria-label="name" required v-model="form.name"  style="text-transform: uppercase;">
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
                            <textarea class="form-control" id="description" rows="3" placeholder="Descreva o motivo do reembolso..." v-model="form.description" style="text-transform: uppercase;"></textarea>
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

            <div class="row w-100 vh-100 d-flex flex-column justify-content-start align-items-center">

                <template v-if="registers.length > 0">

                    <div class="tableBox">

                        <b-table
                            reponsive
                            :items="registers"
                            :fields="fields"
                            :per-page="10"
                            :current-page="currentPage"
                            sort-icon-left
                            no-sort-reset
                            aria-controls="my-table"
                        >
                            <!-- Template para a coluna de ações -->
                            <template #cell(actions)="data">
                                <b-button @click="deleteRegister(data.item)" size="sm" class="btn-delete">
                                    <img src="../../assets/reembolsos/lixoIcon.png" alt="Ícone para apagar registro da lista de registros ">
                                </b-button>
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

            <div class="container-fluid">
                <div class="row d-flex justify-content-end alig-items-center py-2 gap-3" >

                    <div class="col-sm-12 col-md-3">
                        <label for="name" class="form-label">Total Despesa</label>
                        <input type="text" class="form-control" aria-label="name" required v-model="expenseSum"  disabled style="text-transform: uppercase;" />
                    </div>

                    <div class="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-end gap-2">
                        <b-button class="btn-primary-dark">
                            <img src="../../assets/reembolsos/confirmIcon.png" alt="Ícone de confirmação de envio de solicitação para análises">
                            Enviar para Análise
                        </b-button>
                        <b-button class="btn-accent">
                            <img src="../../assets/reembolsos/cancelIcon.png" alt="Ícone de confirmação de envio de solicitação para análises">
                            Cancelar Solicitação
                        </b-button>
                    </div>
                </div>
            </div>

        </b-container>


    </b-container>

</template>

<script>
import NavBar from '@/components/navbar/NavBar.vue';
import http from '@/config';
import { v4 as uuidv4 } from 'uuid';

    export default {

        components: {NavBar},

        data(){
            return {
                form: {
                    id: uuidv4(),
                    name: '',
                    enterprise: '',
                    description: '',
                    date: '',
                    expenseType: '',
                    currency: '',
                    expenseValue: ''
                },

                registers: [],

                fields: [
                    { key: "actions", label: "" }, // Adicionando coluna de ações
                    { key: 'date', label: 'Data', formatter: (value) => {
                        return new Date(value).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                    }},
                    { key: 'name', formatter: (value) => value.toUpperCase(), label: 'Nome'},
                { key: 'enterprise', formatter: (value) => value.toUpperCase(), label: 'Cliente'},
                    { key: 'expenseValue', formatter: (value) => `R$${parseFloat(value.replace('.', ',')).toFixed(2)}`, label: 'Valor'},
                    
                ],

                currentPage: 1,

                solicitation: {
                    id: uuidv4(),
                    expenseTotal: 0,
                }
            }
        },

        methods: {
            clearForm(){
                this.form = {
                    name: '',
                    enterprise: '',
                    description: '',
                    date: '',
                    expenseType: 'Selecione',
                    currency: 'Selecione',
                    expenseValue: ''
                }
            },

            async postRegister(){

                try{
                    await http.post('/', {
                        id: uuidv4(),
                        name: this.form.name,
                        enterprise: this.form.enterprise,
                        description: this.form.description,
                        date: this.form.date,
                        expenseType: this.form.expenseType,
                        currency: this.form.currency,
                        expenseValue: this.form.expenseValue
                    })

                    this.loadRegisters()

                    this.form = {};

                } catch(error){
                    console.error('Erro ao registrar, tente novamente!', error)
                }
            },

            async deleteRegister(item){
                // Possíveis Parametros: Item, Index e Event
                
                try {
                    const id = item.id;

                    if (!id) {
                        throw new Error("ID do item não encontrado.");
                    }

                    await http.delete(`/?column=id&value=${id}`)

                    this.loadRegisters()

                } catch(error){
                    console.error('Não foi posssível deletar o item selecionado: ', error)
                }

            },

            async loadRegisters(){
                try {

                    const response = await http.get('/')
                    
                    this.registers = response.data

                } catch(error){
                    console.error('Erro ao carregar Registros!', error)
                }
            }, 

        },

        mounted(){
            this.loadRegisters(); // Carrega registros salvos ao iniciar a aplicação
        },

        computed: {

            rows(){
                return this.registers.length
            },

            expenseSum(){
                const total = this.registers.reduce( 
                    (expenseTotal ,register) => parseFloat(expenseTotal) + parseFloat(register.expenseValue), 0
                )
                console.log(total)
                this.expenseTotal = total
                return  `$ ${total.toFixed(2)}`;
            }
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

.formBox {
    // padding-left: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
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


@media (max-width: 768px){
    .contentBox{
        padding-left: 0 !important;
    }
}

</style>