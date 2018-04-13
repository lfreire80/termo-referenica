<template>
   <div>
       <div class="form-group">

            <app-documento-field
                 titulo = "1. OBJETO"
                 :somenteLeitura = "somenteLeitura"
                 :showTooltip = "tooltips.showObjeto"
                 :tooltipMsg = "termo.modelo.objeto"
                 v-model = "termo.documento.objeto"
                 :comentarios = "getComentarios('objeto')"
                 @addComentario="addComentario('objeto')"
                 @updated="termo.documento.objeto = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

           <app-documento-field
                 titulo = "2. MOTIVAÇÃO / JUSTIFICATIVA"
                 :somenteLeitura = "somenteLeitura"
                 :showTooltip = "tooltips.showJustificativa"
                 :tooltipMsg = "termo.modelo.justificativa"
                 v-model = "termo.documento.justificativa"
                 :comentarios = "getComentarios('justificativa')"
                 @addComentario="addComentario('justificativa')"
                 @updated="termo.documento.justificativa = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

           <app-documento-field
                 titulo = "3. ESPECIFICAÇÕES TÉCNICAS DO PRODUTO/SERVIÇO E INDICAÇÃO DA META E ETAPA"
                 :somenteLeitura = "somenteLeitura"
                 :showTooltip = "tooltips.showEspecificacao"
                 :tooltipMsg = "termo.modelo.especificacao"
                 v-model = "termo.documento.especificacao"
                 :comentarios = "getComentarios('especificacao')"
                 @addComentario="addComentario('especificacao')"
                 @updated="termo.documento.especificacao = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>


           <app-documento-field
                 titulo = "4. PRAZO, LOCAL E CONDIÇÕES DE ENTREGA OU EXECUÇÃO."
                 :somenteLeitura = "somenteLeitura"
                 :showTooltip = "tooltips.showPrazo"
                 :tooltipMsg = "termo.modelo.prazo"
                 v-model = "termo.documento.prazo"
                 :comentarios = "getComentarios('prazo')"
                 @addComentario="addComentario('prazo')"
                 @updated="termo.documento.prazo = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

            <app-documento-field
                 titulo = "5. CONDIÇÕES E PRAZOS DE PAGAMENTO"
                 :somenteLeitura = "somenteLeitura"
                 :showTooltip = "tooltips.showCondicoes"
                 :tooltipMsg = "termo.modelo.condicoes"
                 v-model = "termo.documento.condicoes"
                 :comentarios = "getComentarios('condicoes')"
                 @addComentario="addComentario('condicoes')"
                 @updated="termo.documento.condicoes = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

            <app-documento-field
                 titulo = "6. CONDIÇÕES DE GARANTIA"
                 :somenteLeitura = "somenteLeitura"
                 :showTooltip = "tooltips.showCondicoesDeGarantia"
                 :tooltipMsg = "termo.modelo.condicoesDeGarantia"
                 v-model = "termo.documento.condicoesDeGarantia"
                 :comentarios = "getComentarios('condicoesDeGarantia')"
                 @addComentario="addComentario('condicoesDeGarantia')"
                 @updated="termo.documento.condicoesDeGarantia = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

            <app-documento-field
                 titulo = "7. RESPONSÁVEL TÉCNICO PELO RECEBIMENTO E APROVAÇÃO DAS MEDIÇÕES"
                 :somenteLeitura = "somenteLeitura"
                 :showTooltip = "tooltips.showResponsavel"
                 :tooltipMsg = "termo.modelo.responsavel"
                 v-model = "termo.documento.responsavel"
                 :comentarios = "getComentarios('responsavel')"
                 @addComentario="addComentario('responsavel')"
                 @updated="termo.documento.responsavel = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

            <app-documento-field
                 titulo = "8. QUALIFICAÇÃO TÉCNICA"
                 :somenteLeitura = "somenteLeitura"
                 :showTooltip = "tooltips.showQualificacao"
                 :tooltipMsg = "termo.modelo.qualificacao"
                 v-model = "termo.documento.qualificacao"
                 :comentarios = "getComentarios('qualificacao')"
                 @addComentario="addComentario('qualificacao')"
                 @updated="termo.documento.qualificacao = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

            <app-documento-field
                 titulo = "9. CRITÉRIOS DE AVALIAÇÃO DAS PROPOSTAS"
                 :somenteLeitura = "somenteLeitura"
                 :showTooltip = "tooltips.showCriterio"
                 :tooltipMsg = "termo.modelo.criterio"
                 v-model = "termo.documento.criterio"
                 :comentarios = "getComentarios('criterio')"
                 @addComentario="addComentario('criterio')"
                 @updated="termo.documento.criterio = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

       </div>
   </div>
</template>
<script>

    
    import DocumentoField from './shared/DocumentoField.vue'
    import {mapState} from 'vuex'

    export default{
        data() {
            return {
                tooltips: {
                    showObjeto: false,
                    showJustificativa: false,
                    showEspecificacao: false,
                    showPrazo: false,
                    showCondicoes: false,
                    showCondicoesDeGarantia: false,
                    showResponsavel: false,
                    showQualificacao: false
                }
            }
        },
        props: [
            'somenteLeitura'
        ],
        computed: {
            ...mapState([
                'termo'
            ])
        },
        methods: {
            getComentarios(campo){
                let comentarios = []
                if(this.termo.revisoes || this.termo.revisoes.length !== 0){
                    this.termo.revisoes.forEach(item => {
                        if(item.documento && campo in item.documento) {
                            comentarios.push({ revisor: item.revisor, data: item.data, comentario: item.documento[campo]})
                        }
                    })  
                }
                return comentarios
            },
            addComentario(campo){
                this.$emit("addComentario", campo);
            }
        },
        components:{
            appDocumentoField: DocumentoField
        }

    }
</script>

