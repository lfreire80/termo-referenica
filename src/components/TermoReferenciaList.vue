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
                @click="$router.push(`/new`)"
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
    <div class="row">
        
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
            <th colspan="7" class="center-header">Ações</th>
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
                <a href="#" @click="visualizarTermo(termo.numero)" v-show="temPermissao('visualizar')"><img alt="Visualizar termo de referência" title="Visualizar termo de referência" src="../assets/search.svg" /></a>
            </td>
            <td :class="{ grid_color : key % 2 != 0}">
                <a href="#" @click="editarTermo(termo.numero)" v-show="(termo.status == 1 || termo.status == 3) && temPermissao('editar')"><img alt="Editar termo de referência" title="Editar termo de referência" src="../assets/book.svg" /></a>
            </td>
            <td :class="{ grid_color : key % 2 != 0}">
                <a href="#" @click="encaminha(termo.numero)" v-show="(termo.status == 1 || termo.status == 3) && temPermissao('encaminhar')"><img alt="Enviar termo de referência" title="Enviar termo de referência" src="../assets/arrow-up.svg" /></a>
            </td>
            <td :class="{ grid_color : key % 2 != 0}">
                <a href="#" @click="aprova(termo.numero)" v-show="termo.status == 2 && temPermissao('aprovar')"><img alt="Aprova termo de referência" title="Aprova termo de referência" src="../assets/thumbsup.svg" /></a>
            </td>
            <td :class="{ grid_color : key % 2 != 0}">
                <a href="#" @click="retorna(termo.numero)" v-show="(termo.status == 2 || termo.status == 4) && temPermissao('retornar')"><img alt="Encaminha termo de referência para revisão" title="Encaminha termo de referência para revisão" src="../assets/thumbsdown.svg" /></a>
            </td>
            <td :class="{ grid_color : key % 2 != 0}">
                <a href="#" @click="baixar(termo.numero)" v-show="termo.status == 4 && temPermissao('baixar')"><img alt="Baixar PDF" title="Baixar PDF" src="../assets/file-pdf.svg" /></a>
            </td>
            <td :class="{ grid_color : key % 2 != 0}">
                <a href="#" @click="del(termo.numero)" v-show="temPermissao('excluir')"><img alt="Excluir termo de referência" title="Excluir termo de referência" src="../assets/trashcan.svg" /></a>
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
    import { MessageBus } from '../message-bus.js'
    import { USER } from '../auth'
    export default{
        
        data(){
            return{
              Tipos: Tipos,
              Status: Status,
              filtroHabilitado: false,
              isLoading: false
            }
        }, 
        computed: {
            ...mapState([
                'termos',
                'usuario'
            ])
        },
        mounted(){
            this.setLoading(true)
            this.loadTermos()
                .then( () => this.setLoading(false))
                .catch(err => {
                    MessageBus.$emit('Error', 'Erro ao carregar informações', 100)
                    this.setLoading(false)
                })       
        },    
        methods: {
            temPermissao(val){
                if(USER){
                    const perfil = USER.perfil
                    const permissaoAdm = ['visualizar', 'aprovar', 'retornar']
                    const permissaoUsuario = ['visualizar', 'editar', 'encaminhar','baixar', 'excluir']
                    if(perfil === 6 && permissaoAdm.filter(c => c == val).length > 0)
                        return true
                    if (perfil === 1 && permissaoUsuario.filter(c => c == val).length > 0)
                        return true
                    return false
                }
                return false;
            },
            editarTermo(id){
                this.$router.push(`/edit/${id}`)
            },
            visualizarTermo(id){
                this.$router.push(`/view/${id}`)
            },
            async filtrarProcesso(processo){
                await this.loadTermos(processo)
            },
            encaminha(id){
                if(confirm("Deseja mesmo ENCAMINHAR este termo de refência!")){
                    this.setLoading(true)
                    this.encaminhaTermo(id).then(() => {
                        this.mudaStatusTermo(id, 2)
                        this.setLoading(false)
                        MessageBus.$emit('Success', 'Termo encaminhado para FUJB', 5)
                        
                    })
                }
            },
            aprova(id){
                if(confirm("Deseja mesmo APROVAR este termo de refência!")){
                    this.setLoading(true)
                    this.aprovaTermo(id).then(() => {
                        this.mudaStatusTermo(id, 4)
                        this.setLoading(false)
                        MessageBus.$emit('Success', 'Termo aprovado para FUJB', 5)
                    })
                }
            },
            retorna(id){
                if(confirm("Deseja mesmo RETORNAR este termo de refência para revisão!")){
                    this.setLoading(true)
                    this.encaminhaParaRevisaoTermo(id).then(() => {
                        this.mudaStatusTermo(id, 3)
                        this.setLoading(false)
                        MessageBus.$emit('Success', 'Termo retornou para o correção', 5)
                    })
                }
            },
            del(id){
                if(confirm("Deseja mesmo EXCLUIR este termo de refência!")){
                    this.setLoading(true)
                    this.deleteTermo(id).then(async ()=> {
                        await this.loadTermos()
                        this.setLoading(false)
                        MessageBus.$emit('Success', 'Termo excluido com sucesso', 5)
                    })
                }
            },
            baixar(id){
                this.baixaTermo(id);
            },
            mudaStatusTermo(id, status){
                this.termos.filter( c => c.numero == id)[0].status = status
            },
            ...mapActions([
                'loadTermos',
                'deleteTermo',
                'encaminhaTermo',
                'aprovaTermo',
                'encaminhaParaRevisaoTermo',
                'baixaTermo',
                'setLoading'
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

