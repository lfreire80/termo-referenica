<template>
   <div>
    <div class="content-box-header">
        <h1>Listagem dos Termos de Referência 
            <button 
                @click="$router.push(`/termo/new`)"
                class="btn-sm btn btn-primary btn-novo" 
                    >Criar Novo Termo de Referêcia
            </button>
        </h1>
    </div>
    
    <div class="content-box-inner">
    <table v-if="termos.length > 0">
        <thead>
        <tr>
            <th>Numero</th>
            <th>Projeto</th>
            <th>Instituição Financeira</th>
            <th>Processo</th>
            <th>Data</th>
            <th>Tipo</th>
            <th>Status</th>
            <th colspan="4">Ações</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(termo,key) in termos" :key="termo.numero">
            <td :class="{ grid_color : key % 2 != 0}">{{ termo.numero }}</td>
            <td :class="{ grid_color : key % 2 != 0}">{{ termo.projeto }}</td>
            <td :class="{ grid_color : key % 2 != 0}">{{ termo.instituicaoFinanceira }}</td>
            <td :class="{ grid_color : key % 2 != 0}">{{ termo.processo }}</td>
            <td :class="{ grid_color : key % 2 != 0}">{{ new Date(termo.data).toLocaleDateString() }}</td>
            <td :class="{ grid_color : key % 2 != 0}">{{ Tipos[termo.tipo] }}</td>
            <td :class="{ grid_color : key % 2 != 0}">{{ Status[termo.status] }}</td>
            <td :class="{ grid_color : key % 2 != 0}">
                <a href="#" @click="visualizarTermo(termo.numero)"><img alt="Visualizar termo de referência" title="Visualizar termo de referência" src="../assets/search.svg" /></a>
            </td>
            <td :class="{ grid_color : key % 2 != 0}">
                <a href="#" @click="editarTermo(termo.numero)"><img alt="Editar termo de referência" title="Editar termo de referência" src="../assets/book.svg" /></a>
            </td>
            <td :class="{ grid_color : key % 2 != 0}">
                <a href="#"><img alt="Enviar termo de referência" title="Enviar termo de referência" src="../assets/arrow-up.svg" /></a>
            </td>
            <td :class="{ grid_color : key % 2 != 0}">
                <a href="#" @click="del(termo.numero)"><img alt="Excluir termo de referência" title="Excluir termo de referência" src="../assets/trashcan.svg" /></a>
            </td>
        </tr>
        </tbody>
    </table>
    </div>
   </div>
</template>

<script>
    import { Tipos } from '../models/Tipos'
    import { Status } from '../models/Status'
    import { mapState, mapActions } from 'vuex'
    export default{
        
        data(){
            return{
              Tipos: Tipos,
              Status: Status
            }
        }, 
        computed: {
            ...mapState([
                'termos',
                'usuario'
            ])
        },
        mounted(){
            this.loadTermos()
        },    
        methods: {
            editarTermo(id){
                this.$router.push(`/termo/edit/${id}`)
            },
            visualizarTermo(id){
                this.$router.push(`/termo/view/${id}`)
            },
            async del(id){
                console.log(id)
                if(confirm("Deseja mesmo excluir este termo de refência!")){
                    await this.deleteTermo(id)
                    await this.loadTermos()
                }
            },
            ...mapActions([
                'loadTermos',
                'deleteTermo'
            ]),
           
        }
        
    }
</script>

<style scoped>
    table{
        width:100%;
    }

    table tr th{
         background: linear-gradient(#84a7bd,#5d84a1) ;
         padding: 5px;
         font-size: 11px;
    }

    .grid_color{
        background-color: #9cc;
    }

    table tr td{
        padding: 5px;
        
    }

    .btn-novo{
        float:right;
        font-size:10px;
        cursor:pointer
    }
</style>

