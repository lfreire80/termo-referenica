<template>
  <div class="content">
      <div class="row">
        <div class="content-box">
           <router-view></router-view>
       </div>
      </div>
    </div>
</template>
<script>

    import TermoReferenciaList from './TermoReferenciaList.vue'
    import TermoReferenciaPessoaFisica from './TermoReferenciaPessoaFisica.vue'
    import TermoReferenciaPessoaJuridica from './TermoReferenciaPessoaJuridica.vue'
    import TermoReferenciaBolsa from './TermoReferenciaBolsa.vue'
    import TermoReferenciaImportacao from './TermoReferenciaImportacao.vue'
    

    export default {
        components:{
            appTermoReferenciaList: TermoReferenciaList,
            appTermoReferenciaPessoaFisica : TermoReferenciaPessoaFisica,
            appTermoReferenciaPessoaJuridica : TermoReferenciaPessoaJuridica,
            appTermoReferenciaBolsa : TermoReferenciaBolsa,
            appTermoReferenciaImportacao : TermoReferenciaImportacao
        },
        data(){
            return{
                termo:''
            }
        }
      
    }
</script>

<style scoped>
    .my-btn{
        font-size: 12px; 
    }

    .my-close{
        font-size: 20px;
    }
</style>