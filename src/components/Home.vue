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
   

    export default {
        components:{
            appTermoReferenciaList: TermoReferenciaList
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