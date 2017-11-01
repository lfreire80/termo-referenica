<template>
  <div class="container text-center wrapper">
    <div>
      <app-header></app-header>
    </div>
    <div class="content">
      <div class="row">
        <div class="content-box">
          <div class="content-box-header">
            <h1>Listagem dos Termos de Referência</h1>
          </div>
          <div class="content-box-inner">
            <app-termo-referencia-list></app-termo-referencia-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from './Header.vue'
import TermoReferenciaList from './components/TermoReferenciaList.vue'
export default {
  components:{
    appHeader: Header,
    appTermoReferenciaList: TermoReferenciaList
  }
}
</script>

<style>
.wrapper {
  max-width: 830px;
}

body{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 11px;
}

.content{
  background-color: #9cc;
  padding: 10px;
}

.content-box{
  background-color: #97baba;
  box-shadow: 2px 2px 10px 2px #888;
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
  margin: 10px;
  width: 100%;
  
}

.content-box-header h1{
  font-size: 18px;
  font-weight: bold;
  text-align: left;
} 

.content-box-inner{
  background-color: white;
  text-align: left;
  padding: 5px;  
  font-size: 12px;
  
}
</style>
