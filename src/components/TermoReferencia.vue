<template>
    <div class="content-box-inner">
        <div class="text-center">
            <h1>TERMO DE REFERÊNCIA Nº XXXX/2017</h1>
        </div>
        <div class="form-group row">
            <label for="projeto" class="col-3 col-form-label">TIPO:</label>
            <div class="col-5">
                <select id="tipo"
                     class="form-control"  
                     v-model="termo.tipo"
                     @change="changeTipo($event)"
                     :disabled="action == 'edit'">
                    <option v-for="(tipo, index) in tipos" :value="index" :key="index" :selected="termo.tipo == index">{{tipo}}</option>
                </select>
            </div>
        </div>
         <div class="form-group row">
            <label for="projeto" class="col-3 col-form-label">PROCESSO FUJB:</label>
            <div class="col-5">
                <input class="form-control" type="text" id="processo" v-model="termo.processo">
            </div>
        </div>
        <div class="form-group row">
            <label for="projeto" class="col-3 col-form-label">PROJETO:</label>
            <div class="col-5">
                <input class="form-control" type="text" id="projeto" v-model="termo.projeto" >
            </div>
        </div>
        <div class="form-group row">
            <label for="projeto" class="col-3 col-form-label">INSTITUIÇÃO FINANCEIRA:</label>
            <div class="col-5">
                <input class="form-control" type="text" id="instituicaoFinanceira" v-model="termo.instituicaoFinanceira" >
            </div>
        </div>
       
        <app-termo-referencia-pessoa-fisica
                @addComentario="addComentario(event)"
                :termo="termo"
                v-if="termo.tipo === 1">
        </app-termo-referencia-pessoa-fisica>

        <app-termo-referencia-pessoa-juridica
                 @addComentario="addComentario($event)"
                :termo="termo" 
                v-else-if="termo.tipo === 2">
        </app-termo-referencia-pessoa-juridica>

        <app-termo-referencia-bolsa
                 @addComentario="addComentario($event)"              
                :termo="termo"
                v-else-if="termo.tipo === 3">
        </app-termo-referencia-bolsa>

        <app-termo-referencia-importacao
                @addComentario="addComentario($event)"   
                @updated="update($event)"
                :termo="termo"
                v-else-if="termo.tipo === 4">
        </app-termo-referencia-importacao>

        <div class=text-right >
            <button type="button" class="btn btn-sm btn-primary" @click="save()">Salvar</button>
            <router-link class="btn btn-sm" tag="button" to="/"><span>Sair</span></router-link>
        </div>

      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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

    export default{
        data() {
            return {
                id: this.$route.params.id,
                action: this.$route.params.action,
                tipos: Tipos,
                selectedTipo: 1 //default
            }
        },
        computed: {
            ...mapState([
                'termo'
            ])
        },
        async mounted(){
            this.termos=[];
            switch(this.action){
                case 'new':
                    this.newTermo(this.selectedTipo)
                break;
                case 'edit':
                    this.loadTermo(this.id)
                break;
            }
            
        },
        destroyed(){
            this.clearTermo()
        },
        methods: {
            async save(){
                const res = await this.saveTermo();
                if(res.status === 200){
                    alert('Gravado com Sucesso')
                    this.$router.push('/')
                } else {
                    console.log('erro ao gravar')
                    alert('Erro ao gravar!')
                }

                
            },
            addComentario(e){
                $('#myModal').modal();
            },
            changeTipo(e){
                this.selectedTipo = e.target.value
                this.newTermo(this.selectedTipo)
            },
            ...mapActions([
                'loadTermo',
                'clearTermo',
                'newTermo',
                'saveTermo',
                'updateTermo'
            ])
        },
        components: {
            appTermoReferenciaPessoaFisica : TermoReferenciaPessoaFisica,
            appTermoReferenciaPessoaJuridica : TermoReferenciaPessoaJuridica,
            appTermoReferenciaBolsa : TermoReferenciaBolsa,
            appTermoReferenciaImportacao : TermoReferenciaImportacao
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

    .commentWindow{
        position: absolute;
        display: block;
        cursor:url(http://placehold.it/50x30) 25 15, auto;
    }

    @media print{
        input {
            border: none;
        }
    }
</style>
