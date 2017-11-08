<template>
  <div class="container text-center wrapper">
    <app-header></app-header>
    <app-home></app-home>
  
  </div>
</template>

<script>
  import Header from './Header.vue'
  import Home from './components/Home.vue'
  export default {
      components:{
          appHeader: Header,
          appHome: Home
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
