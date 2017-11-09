<template>
<div class="content-box-inner">
  <div class="text-center">
    <h1>TERMO DE REFERÊNCIA Nº XXXX/2017</h1>
  </div>
  <div class="form-group row">
    <label for="projeto" class="col-3 col-form-label">PROJETO:</label>
    <div class="col-5">
        <input class="form-control" type="text" id="projeto" :value="id">
    </div>
  </div>
   <div class="form-group row">
    <label for="projeto" class="col-3 col-form-label">INSTITUIÇÃO FINANCEIRA:</label>
    <div class="col-5">
        <input class="form-control" type="text" id="instituicaofinanceira">
    </div>
  </div>
   <div class="form-group row">
    <label for="projeto" class="col-3 col-form-label">PROCESSO FUJB:</label>
    <div class="col-5">
        <input class="form-control" type="text" id="processo">
    </div>
  </div>
  
  <app-termo-referencia-pessoa-fisica 
        @updated="update($event)"
        :termo="termo" 
        v-if="termo.tipo === 1">
  </app-termo-referencia-pessoa-fisica>
  
  <app-termo-referencia-pessoa-juridica 
        @updated="update($event)" 
        :termo="termo" v-else-if="termo.tipo === 2">
  </app-termo-referencia-pessoa-juridica>
  
  <app-termo-referencia-pessoa-bolsa 
        @updated="update($event)"
        :termo="termo" 
        v-else-if="termo.tipo === 3">
  </app-termo-referencia-pessoa-bolsa>
  
  <app-termo-referencia-pessoa-importacao 
        @updated="update($event)"
        :termo="termo" 
        v-else-if="termo.tipo === 4">
  </app-termo-referencia-pessoa-importacao>

  <div class=text-right >
    <button type="button" class="btn btn-sm btn-primary">  Salvar  </button>
    <router-link class="btn btn-sm" tag="button" to="/"><span>Sair</span></router-link>
  </div>
</div>
</template>
<script>
  import TermoReferenciaPessoaFisica from './TermoReferenciaPessoaFisica.vue'
  import TermoReferenciaPessoaJuridica from './TermoReferenciaPessoaJuridica.vue'
  import TermoReferenciaBolsa from './TermoReferenciaBolsa.vue'
  import TermoReferenciaImportacao from './TermoReferenciaImportacao.vue'
  import termoReferenciaService from '../services/termoReferenciaService'
  export default{
    data() {
      return {
         termo: {},
         id: this.$route.params.id
      }
    },
    async created(){
        this.termo = (await termoReferenciaService.GetByIdAsync(this.id)).data
        this.termo.revisoes[0].usuario = "Leoanrdo Frere"
        this.termo.revisoes[0].data = "09/11/2017"
        this.termo.revisoes[0].documento = { objeto: 'leonardo'}
        this.termo.revisoes[2].documento = { objeto: 'ismael'}
    },   
    methods: {
      update(e){
        this.termo.documento = e.documento
      }
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

  @media print{
      input {
        border: none;
      }
  }
</style>
