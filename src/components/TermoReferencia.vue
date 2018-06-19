<template>
    <div class="content-box-inner">
        <div class="text-center">
            <h1>TERMO DE REFERÊNCIA Nº {{termo.numero}}</h1>
        </div>
        <div class="form-group row">
            <label for="projeto" class="col-3 col-form-label">TIPO:</label>
            <div class="col-5">
                <select id="tipo"
                     class="form-control"  
                     v-model="termo.tipo"
                     @change="changeTipo($event)"
                     :disabled="action != 'new'">
                    <option v-for="(tipo, index) in tipos" :value="index" :key="index" :selected="termo.tipo == index">{{tipo}}</option>
                </select>
            </div>
        </div>
         <div class="form-group row">
            <label for="projeto" class="col-3 col-form-label">PROCESSO FUJB:</label>
            <div class="col-5">
                <input  class="form-control" type="text" id="processo" v-model="termo.processo" :disabled="action == 'view'" @blur="preencheDadosProcesso(termo.processo)">
            </div>
        </div>
        <div class="form-group row">
            <label for="projeto" class="col-3 col-form-label">PROJETO:</label>
            <div class="col-5">
                <input class="form-control" type="text" id="projeto" v-model="termo.projeto" :disabled="action == 'view'">
            </div>
        </div>
        <div class="form-group row">
            <label for="projeto" class="col-3 col-form-label">INSTITUIÇÃO FINANCEIRA:</label>
            <div class="col-5">
                <input class="form-control" type="text" id="instituicaoFinanceira" v-model="termo.instituicaoFinanceira" :disabled="action == 'view'" >
            </div>
        </div>
       
        <app-termo-referencia-pessoa-fisica
                @addComentario="addComentario($event)"
                @addProfissional="addProfissional()"
                :termo="termo"
                :somenteLeitura="(action == 'view')"
                v-if="termo.tipo === 1">
        </app-termo-referencia-pessoa-fisica>

        <app-termo-referencia-pessoa-juridica
                 @addComentario="addComentario($event)"
                :termo="termo" 
                :somenteLeitura="(action == 'view')"
                v-else-if="termo.tipo === 2">
        </app-termo-referencia-pessoa-juridica>

        <app-termo-referencia-bolsa
                 @addComentario="addComentario($event)"              
                :termo="termo"
                :somenteLeitura="(action == 'view')"
                v-else-if="termo.tipo === 3">
        </app-termo-referencia-bolsa>

        <app-termo-referencia-importacao
                @addComentario="addComentario($event)"   
                @updated="update($event)"
                :termo="termo"
                :somenteLeitura="(action == 'view')"
                v-else-if="termo.tipo === 4">
        </app-termo-referencia-importacao>

        <div class="text-right rodapeBotoes" >
            <button type="button" class="btn btn-sm btn-primary" @click="save()" :disabled="(action == 'view' && usuario.perfil != 6)">Salvar</button>
            <router-link class="btn btn-sm" tag="button" to="/"><span>Sair</span></router-link>
        </div>
 
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Digitar comentário</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <textarea-autosize 
                            id="comentarioForm"
                            class="form-control comentarioForm" 
                            v-model = "comentario">
                            <!-- @change.native="updated($event)" > -->
                        </textarea-autosize>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-sm btn-primary" @click="saveComentario()">Gravar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import TermoReferenciaPessoaFisica from './TermoReferenciaPessoaFisica.vue'
    import TermoReferenciaPessoaJuridica from './TermoReferenciaPessoaJuridica.vue'
    import TermoReferenciaBolsa from './TermoReferenciaBolsa.vue'
    import TermoReferenciaImportacao from './TermoReferenciaImportacao.vue'
    import { Tipos } from '../models/Tipos.js'
    import { mapState, mapActions } from 'vuex'
    import { MessageBus } from '../message-bus.js'

    export default{
        data() {
            return {
                id: this.$route.params.id,
                action: this.$route.params.action,
                tipos: Tipos,
                selectedTipo: 1, //default
                comentario: '',
                tipoComentario:''
            }
        },
        computed: {
            ...mapState([
                'termo',
                'usuario'
            ])
        },
        async mounted(){
            
            this.termos=[];
            switch(this.action){
                case 'new':
                    this.setLoading(true)
                    this.newTermo(this.selectedTipo).then(() => {
                        this.setLoading(false)
                    })
                break;
                case 'edit':
                    this.loadTermo(this.id).then(() => {
                        this.setLoading(false)
                    })
                break;
                case 'view':
                    this.loadTermo(this.id).then(() => {
                        this.setLoading(false)
                    })
                break;
            }
            
        },
        destroyed(){
            this.clearTermo()
        },
        methods: {
            async save(){
                if(this.validaProcesso()){
                    this.setLoading(true)
                    const res = await this.saveTermo();
                    if(res.status === 200){
                        this.setLoading(false)
                        MessageBus.$emit('Success', 'Gravado com sucesso', 5)
                        this.$router.push('/')
                    } else {
                        this.setLoading(false)
                        MessageBus.$emit('Error', 'Erro ao gravar', 5)
                    }
                } else {
                    this.setLoading(false)
                    MessageBus.$emit('Error', 'Você não possui autorização para este Processo FUJB', 5)
                }
            },
            validaProcesso(){
                // Verifica se usuario corrente tem autorização para emissão de termo para este processo...
                return (this.usuario.processos.filter(e => e.cod_processo.toString().trim() === this.termo.processo.toString().trim()).length > 0)
            },
            preencheDadosProcesso(){
                
                let dadosProcesso = this.usuario.processos.filter(e => e.cod_processo.toString().trim() === this.termo.processo.toString().trim())[0]
                if(dadosProcesso){
                    this.termo.projeto = dadosProcesso.titulo.split('\"').join(''); //remove \" indevidas
                    this.termo.instituicaoFinanceira = dadosProcesso.financiador
                    this.termo.documento.unidadeExecucao.gerencia = dadosProcesso.sigla_secao
                    this.termo.documento.unidadeExecucao.tel = dadosProcesso.tel
                    this.termo.documento.unidadeExecucao.email = dadosProcesso.sigla_secao + "@fujb.ufrj.br"
                    this.termo.documento.fonte = `Os recursos financeiros necessários aos pagamentos mencionados neste TR serão oriundos do Projeto ${dadosProcesso.titulo}, processo FUJB: ${this.termo.processo}, financiados pela ${dadosProcesso.financiador}.`
                    
                } else {
                    this.termo.projeto = ""
                    this.termo.instituicaoFinanceira = ""
                    this.termo.documento.unidadeExecucao.gerencia = ""
                    this.termo.documento.unidadeExecucao.tel = ""
                    this.termo.documento.unidadeExecucao.email = ""
                    if(this.termo.processo != ""){
                        MessageBus.$emit('Error', 'Você não possui autorização para este Processo FUJB', 5)
                    }
                    
                }
            },
            addComentario(e){
                this.tipoComentario = e;
                this.comentario = ''
                $('#comentarioForm').focus()
                $('#myModal').modal()
            },
            saveComentario(){
                if(this.comentario.trim().length > 0){
                    const revisao = {
                        revisor: '',
                        data: new Date().toLocaleString(),
                        documento: {}
                    }
                    revisao.documento[this.tipoComentario] = this.comentario
                    this.termo.revisoes.push(revisao)

                    this.setLoading(true)
                    this.updateTermo(this.termo)
                        .then(() => {
                            this.setLoading(false)
                            MessageBus.$emit('Success', 'Comentário criado com sucesso')
                        })
                        .catch(() => {
                            this.setLoading(false)
                            MessageBus.$emit('Error', 'Erro ao cadastrar um comentário')
                        })
                    $('#myModal').modal('hide')
                }
            },
            changeTipo(e){
                this.selectedTipo = e.target.value
                this.setLoading(true)
                this.newTermo(this.selectedTipo).then(() => this.setLoading(false))
            },
            ...mapActions([
                'loadTermo',
                'clearTermo',
                'newTermo',
                'saveTermo',
                'updateTermo',
                'setLoading'
            ])
        },
        components: {
            appTermoReferenciaPessoaFisica : TermoReferenciaPessoaFisica,
            appTermoReferenciaPessoaJuridica : TermoReferenciaPessoaJuridica,
            appTermoReferenciaBolsa : TermoReferenciaBolsa,
            appTermoReferenciaImportacao : TermoReferenciaImportacao,            
        }
    }
</script>

<style scoped>
    h1 {
        font-size: 15px;
        font-weight: bold;
        padding: 20px;
    }

    .document-header{
        padding: 30px;
    }
    label{
        font-weight: bold;
    }

    .comentarioForm{
        height: 50px;
        font-size:10px;
    }

    .modal-profissioal{
       
    }

    @media print{
        .rodapeBotoes{
            display: none;
        }
    }
</style>
