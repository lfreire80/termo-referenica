<template>
   <div>
    <div class="content-box-header">
        <h1>Listagem dos Termos de Referência</h1>
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
        </tr>
        </thead>
        <tbody>
        <tr v-for="(termo,key) in termos" :key="termo.numero" @click="editarTermo(termo.numero)">
            <td :class="{ grid_color : key % 2 != 0}">{{ termo.numero }}</td>
            <td :class="{ grid_color : key % 2 != 0}">{{ termo.projeto }}</td>
            <td :class="{ grid_color : key % 2 != 0}">{{ termo.instituicaoFinanceira }}</td>
            <td :class="{ grid_color : key % 2 != 0}">{{ termo.processo }}</td>
            <td :class="{ grid_color : key % 2 != 0}">{{ new Date(termo.data).toLocaleDateString() }}</td>
            <td :class="{ grid_color : key % 2 != 0}">{{ Tipos[termo.tipo] }}</td>
            <td :class="{ grid_color : key % 2 != 0}">{{ Status[termo.status] }}</td>
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
                'termos'
            ])
        },
        mounted(){
            this.loadTermos()
        },    
        methods: {
            editarTermo(id){
                this.$router.push(`/termo/edit/${id}`)
            },
            ...mapActions([
                'loadTermos'
            ])
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
        cursor: pointer;
        
    }
</style>

