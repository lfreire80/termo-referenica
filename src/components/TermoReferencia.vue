<template>
<div class="content-box-inner">
  <div class="text-center">
    <h1>TERMO DE REFERÊNCIA Nº XXXX/2017</h1>
  </div>
  <div class="form-group row">
    <label for="projeto" class="col-3 col-form-label">Projeto:</label>
    <div class="col-5">
        <input class="form-control" type="text" id="projeto" :value="id">
    </div>
  </div>
   <div class="form-group row">
    <label for="projeto" class="col-3 col-form-label">Instituição Financeira:</label>
    <div class="col-5">
        <input class="form-control" type="text" id="instituicaofinanceira">
    </div>
  </div>
   <div class="form-group row">
    <label for="projeto" class="col-3 col-form-label">Processo FUJB:</label>
    <div class="col-5">
        <input class="form-control" type="text" id="processo">
    </div>
  </div>
  <app-termo-referencia-pessoa-fisica :termo="termo" v-if="termo.tipo === 1"></app-termo-referencia-pessoa-fisica>
  <app-termo-referencia-pessoa-juridica :termo="termo" v-else-if="termo.tipo === 2"></app-termo-referencia-pessoa-juridica>
  <app-termo-referencia-pessoa-bolsa :termo="termo" v-else-if="termo.tipo === 3"></app-termo-referencia-pessoa-bolsa>
  <app-termo-referencia-pessoa-importacao :termo="termo" v-else-if="termo.tipo === 4"></app-termo-referencia-pessoa-importacao>
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
        console.log(this.termo.modelo)
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
    input{
        border: none;
    }
}
</style>
