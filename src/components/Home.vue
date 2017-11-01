<template>
  <div class="content">
      <div class="row">
        <div class="content-box">
          <div class="content-box-header">
            <h1>Listagem dos Termos de Referência</h1>
          </div>
          <div class="content-box-inner">
            <app-termo-referencia-list :termos="termos"></app-termo-referencia-list>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    import TermoReferenciaList from './TermoReferenciaList.vue'
    import termoReferenciaService from '../services/termoReferenciaService'
    export default {
        components:{
            appTermoReferenciaList: TermoReferenciaList
        },
        data(){
            return{
                termos:[]
            }
        },
        async created(){
            this.termos = (await termoReferenciaService.GetAsync()).data
        },
    }
</script>