<template>
   <div>
       <div class="form-group">
            <label for="objeto">1. OBJETO</label>
            <textarea-autosize class="form-control" :placeholder="termo.modelo.objeto"></textarea-autosize>
            <label for="objeto">2. MOTIVAÇÃO / JUSTIFICATIVA</label>
            <textarea-autosize class="form-control"  :placeholder="termo.modelo.justificativa"></textarea-autosize>
            <label for="objeto">3. ESPECIFICAÇÕES TÉCNICAS DO PRODUTO/SERVIÇO E INDICAÇÃO DA META E ETAPA </label>
            <textarea-autosize class="form-control" :placeholder="termo.modelo.especificacao"></textarea-autosize>
            <label for="objeto">4. PRAZO, LOCAL E CONDIÇÕES DE ENTREGA OU EXECUÇÃO.</label>
            <textarea-autosize class="form-control" :placeholder="termo.modelo.prazo"></textarea-autosize>
            <label for="objeto">5. CONDIÇÕES E PRAZOS DE PAGAMENTO</label>
            <textarea-autosize class="form-control"  :placeholder="termo.modelo.condicoes"></textarea-autosize>
            <label for="objeto">6. CONDIÇÕES DE GARANTIA</label>
            <textarea-autosize class="form-control"  :placeholder="termo.modelo.condicoesDeGarantia"></textarea-autosize>
            <label for="objeto">7. RESPONSÁVEL TÉCNICO PELO RECEBIMENTO E APROVAÇÃO DAS MEDIÇÕES: NOME, TELEFONE E E-MAIL.</label>
            <textarea-autosize class="form-control" :placeholder="termo.modelo.responsavel"></textarea-autosize>
            <label for="objeto">8. QUALIFICAÇÃO TÉCNICA</label>
            <textarea-autosize class="form-control"  :placeholder="termo.modelo.qualificacao"></textarea-autosize>
            <label for="objeto">9. CRITÉRIOS DE AVALIAÇÃO DAS PROPOSTAS</label>
            <textarea-autosize class="form-control"></textarea-autosize>
       </div>
   </div>
</template>
<script>
    export default{
        props: ["termo"]
    }
</script>
<style scoped>
label{
    background-color: #ccc;
    display: block;
    font-weight: bold;
    padding: 5px;
}

textarea{
    width:100%;
    padding: 5px;
    margin-bottom: 5px;
}

@media print{
    textarea{
        border: none;
    }
}
</style>
