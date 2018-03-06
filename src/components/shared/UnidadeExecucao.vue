<template>
    <div>
        <div class="label">
                <span>{{titulo}}</span>
        </div>
        <div class="row box">
            <table class="table" v-if="termo.documento.unidadeExecucao">
                <tr class="">
                    <td class="text-center"><b>Assunto administrativo e não técnico</b></td>
                    <td class="text-center"><b>Assunto técnicos e de conteúdo</b></td>
                </tr>
                <tr>
                    <td class="text-center">(Contrato e pagamentos)</td>
                    <td class="text-center">(Relatório)</td>
                </tr>
                <tr>
                    <td>
                        <label>Gerência Responsável: {{ termo.documento.unidadeExecucao.gerencia }}</label><br />
                        <label>Tel.: {{ termo.documento.unidadeExecucao.tel }}</label><br />
                        <label>E-mail: {{ termo.documento.unidadeExecucao.email }}</label><br />
                        <label>Endereço: <span v-html="termo.documento.unidadeExecucao.endereco"></span>
                            <br/>CEP: {{ termo.documento.unidadeExecucao.cep }}</label><br />
                    </td>
                    <td>
                        <label>{{termo.documento.unidadeExecucao.tecUnidade}}/UFRJ</label><br />
                        <label>{{termo.documento.unidadeExecucao.tecDepartamento}}</label><br />
                        <label>Telefone: {{termo.documento.unidadeExecucao.tecTelefone}}</label><br />
                        <label>E-mail: {{termo.documento.unidadeExecucao.tecEmail}}</label><br />
                        <label>Endereço completo: {{termo.documento.unidadeExecucao.tecEndereco}}</label><br />
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template> 

<script>
    import { mapState } from 'vuex'
    
    export default {
        props: ['titulo'],
        computed:{
            ...mapState(['termo'])
        }
    }
</script>

<style scoped>
    .label{
        background-color: #ccc;
        display: block;
        font-weight: bold;
        padding: 5px;
        height: 30px;
        margin-bottom: 3px;
    }

    .box{
        margin: 1px;
        padding: 1px;
    }

    table tr td{
        border: 1px solid black;
        padding: 2px;
    }
</style>
