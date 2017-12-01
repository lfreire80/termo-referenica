<template>
   <div>
       <div class="form-group">
          <app-documento-field
                titulo = "1. OBJETO"
                :showTooltip = "tooltips.showObjeto"
                :tooltipMsg = "termo.modelo.objeto"
                v-model = "termo.documento.objeto"
                :comentarios = "getComentarios('objeto')"
                @updated="termo.documento.objeto = $event; $store.dispatch('updateTermo', termo)"
                >
          </app-documento-field>

          <app-documento-field
                titulo = "2. JUSTIFICATIVA DA CONTRATAÇÃO"
                :showTooltip = "tooltips.showJustificativa"
                :tooltipMsg = "termo.modelo.justificativa"
                v-model = "termo.documento.justificativa"
                :comentarios = "getComentarios('justificativa')"
                @updated="termo.documento.justificativa = $event; $store.dispatch('updateTermo', termo)"
                >
          </app-documento-field>

            <app-documento-field
                titulo = "3. CRITÉRIO DE AVALIAÇÃO / MÉTODO DE SELEÇÃO"
                :showTooltip = "tooltips.showCriterio"
                :tooltipMsg = "termo.modelo.criterio"
                v-model = "termo.documento.criterio"
                :comentarios = "getComentarios('criterio')"
                @updated="termo.documento.criterio = $event; $store.dispatch('updateTermo', termo)"
                >
          </app-documento-field>

          <!-- 4. ESPECIFICAÇÕES TÉCNICAS -->

           <app-documento-field
                 titulo = "5. PRODUTO"
                 :showTooltip = "tooltips.showProduto"
                 :tooltipMsg = "termo.modelo.produto"
                 v-model = "termo.documento.produto"
                 :comentarios = "getComentarios('produto')"
                 @updated="termo.documento.produto = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

            <app-documento-field
                 titulo = "6. APRESENTAÇÃO E APROVAÇÃO DO SERVIÇO"
                 :showTooltip = "tooltips.showApresentacao"
                 :tooltipMsg = "termo.modelo.apresentacao"
                 v-model = "termo.documento.apresentacao"
                 :comentarios = "getComentarios('apresentacao')"
                 @updated="termo.documento.apresentacao = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

            <app-documento-field
                 titulo = "7. PRAZO, LOCAL E CONDIÇÕES DE EXECUÇÃO"
                 :showTooltip = "tooltips.showPrazo"
                 :tooltipMsg = "termo.modelo.prazo"
                 v-model = "termo.documento.prazo"
                 :comentarios = "getComentarios('prazo')"
                 @updated="termo.documento.prazo = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

            <!-- 8. ESTIMATIVA DE CUSTO DA CONTRATAÇÃO -->

            <!-- 9. CONDIÇÕESE PRAZOS DE PAGAMENTO -->
                     
            <app-documento-field
                 titulo = "10. OBRIGAÇÕES DO(A) PROFISSIONAL(ES) A SER CONTRATADO"
                 :showTooltip = "tooltips.showObrigacoes"
                 :tooltipMsg = "termo.modelo.obrigacoes"
                 v-model = "termo.documento.obrigacoes"
                 :comentarios = "getComentarios('obrigacoes')"
                 @updated="termo.documento.obrigacoes = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

            <app-unidade-execucao titulo="11. UNIDADE DE EXECUÇÃO TÉCNICA E FINANCEIRA:"/>

            <app-documento-field
                 titulo = "12. FONTE DE RECURSOS"
                 :showTooltip = "tooltips.showFonte"
                 :tooltipMsg = "termo.modelo.fonte"
                 v-model = "termo.documento.fonte"
                 :comentarios = "getComentarios('fonte')"
                 @updated="termo.documento.fonte = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>


       </div>
   </div>
</template>
<script>

    
    import UnidadeExecucao from './shared/UnidadeExecucao.vue'
    import DocumentoField from './shared/DocumentoField.vue'
    import {mapState} from 'vuex'

    export default{
        data() {
            return {
                tooltips: {
                    showObjeto: false,
                    showJustificativa: false,
                    showCriterio: false,
                    showEspecificacao: false,
                    showProduto: false,
                    showApresentacao: false,
                    showPrazo: false,
                    showObrigacoes: false,
                    showFonte: false

                }
            }
        },
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
            }
        },
        components:{
            appDocumentoField: DocumentoField,
            appUnidadeExecucao: UnidadeExecucao
        }

    }
</script>
<style scoped> 


@media print{
    textarea{
        border: none;
    }
}
</style>
