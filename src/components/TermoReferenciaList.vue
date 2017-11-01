<template>
   <table v-if="termos.length > 0">
        <thead>
        <tr>
            <th>Numero</th>
            <th>Projeto</th>
            <th>Instituição Financeira</th>
            <th>Processo</th>
            <th>Data</th>
            <th>Tipo</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(termo,key) in termos" :key="termo.numero" @click="editarTermo(termo.numero)">
            <td :class="{ grid_color : key % 2 != 0}">{{termo.numero}}</td>
            <td :class="{ grid_color : key % 2 != 0}">{{termo.projeto}}</td>
            <td :class="{ grid_color : key % 2 != 0}">{{termo.instituicaoFinanceira}}</td>
            <td :class="{ grid_color : key % 2 != 0}">{{termo.processo}}</td>
            <td :class="{ grid_color : key % 2 != 0}">{{termo.data}}</td>
            <td :class="{ grid_color : key % 2 != 0}">{{termo.tipo}}</td>
        </tr>
        </tbody>
    </table>
  
</template>

<script>
    export default{
        props: ['termos'],
       
        methods: {
            editarTermo(id){
                alert(id)
            }
        }
    }
</script>

<style scoped>
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
        cursor: pointer;
        
    }
</style>

