<template>
    <div>
        <div>
            <img src="./assets/topo.gif">
        </div>  
        <div class='menu'>
            <ul class="nav">
	            <li class="top">
	                <a href="MenuPrincipal.aspx" class="top_link"><span>Início</span></a>
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
</style>
