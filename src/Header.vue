<template>
    <div class="header">
        <div>
            <img src="./assets/topo.gif">
        </div>  
        <div class='menu'>
            <ul class="nav">
	            <li class="top">
	                <router-link name="router" to="/" class="top_link"><span>Início</span></router-link>
	            </li>
	            <li class="top_right">
                    <a href="#"><span>Sair</span></a>
	            </li>
     
            </ul>             
        </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
.menu{
    background: linear-gradient(#789ebc,#333b55) ;
}
.nav{
    list-style-type:none;
    
    color:white;
}
.nav li{
    display: inline;
    padding: 10px;
}
.top_right{
    float:right;
}
a{
    color:white;
    font-weight: bold;
}
a:hover{
    font-style: none;
}

@media print {
    .header{
        display: none;
    }
}
</style>
