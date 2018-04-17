<template>
   <div>
    <div class="content-box-header">
        <h1>Listagem dos Termos de Referência 
            <button 
                @click="filtroHabilitado=!filtroHabilitado"
                class="btn-sm btn btn-warning btn-novo" 
                    >Filtros
            </button>
            <button 
                @click="$router.push(`/termo/new`)"
                class="btn-sm btn btn-primary btn-novo" 
                    >Criar Novo Termo de Referêcia
            </button>
        </h1>
      
    </div>
    
    <div class="content-box-inner">
    <div class="filtro" v-if="filtroHabilitado">
        <label>Processo FUJB:</label>
        <input v-model="processo" />
        <a @click="filtrarProcesso(processo)"><img src="../assets/filter-icon.png"/></a>
    </div>
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
            <th colspan="7">Ações</th>
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
                <a href="#" @click="editarTermo(termo.numero)" v-show="termo.status == 1 || termo.status == 3"><img alt="Editar termo de referência" title="Editar termo de referência" src="../assets/book.svg" /></a>
            </td>
            <td :class="{ grid_color : key % 2 != 0}">
                <a href="#" @click="encaminha(termo.numero)" v-show="termo.status == 1 || termo.status == 3"><img alt="Enviar termo de referência" title="Enviar termo de referência" src="../assets/arrow-up.svg" /></a>
            </td>
            <td :class="{ grid_color : key % 2 != 0}">
                <a href="#" @click="aprova(termo.numero)" v-show="termo.status == 2"><img alt="Aprova termo de referência" title="Aprova termo de referência" src="../assets/thumbsup.svg" /></a>
            </td>
            <td :class="{ grid_color : key % 2 != 0}">
                <a href="#" @click="retorna(termo.numero)" v-show="termo.status == 2 || termo.status == 4"><img alt="Encaminha termo de referência para revisão" title="Encaminha termo de referência para revisão" src="../assets/thumbsdown.svg" /></a>
            </td>
            <td :class="{ grid_color : key % 2 != 0}">
                <a href="#" @click="baixar(termo.numero)" v-show="termo.status == 4"><img alt="Baixar PDF" title="Baixar PDF" src="../assets/file-pdf.svg" /></a>
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
              Status: Status,
              filtroHabilitado: false,
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
            async filtrarProcesso(processo){
                await this.loadTermos(processo)
            },
            async encaminha(id){
                if(confirm("Deseja mesmo ENCAMINHAR este termo de refência!")){
                    await this.encaminhaTermo(id)
                    await this.loadTermos()
                }
            },
            async aprova(id){
                if(confirm("Deseja mesmo APROVAR este termo de refência!")){
                    await this.aprovaTermo(id)
                    await this.loadTermos()
                }
            },
            async retorna(id){
                if(confirm("Deseja mesmo RETORNAR este termo de refência para revisão!")){
                    await this.encaminhaParaRevisaoTermo(id)
                    await this.loadTermos()
                }
            },
            async del(id){
                if(confirm("Deseja mesmo EXCLUIR este termo de refência!")){
                    await this.deleteTermo(id)
                    await this.loadTermos()
                }
            },
            async baixar(id){
                await this.baixaTermo(id);
            },
            ...mapActions([
                'loadTermos',
                'deleteTermo',
                'encaminhaTermo',
                'aprovaTermo',
                'encaminhaParaRevisaoTermo',
                'baixaTermo'
            ]),
           
        }
        
    }
</script>

<style scoped>

    .filtro{
         font-size: 11px; 
    }

    .filtro img{
        width:25px;
        height:25px;
    }

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
        cursor:pointer;
        margin-left:10px
    }

</style>

