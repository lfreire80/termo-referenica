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
                titulo = "3. CRITÉRIO DE AVALIAÇÃO / MÉTODO DE SELEÇÃO"
                :somenteLeitura = "somenteLeitura"
                :showTooltip = "tooltips.showCriterio"
                :tooltipMsg = "termo.modelo.criterio"
                v-model = "termo.documento.criterio"
                :comentarios = "getComentarios('criterio')"
                @addComentario="addComentario('criterio')"
                @updated="termo.documento.criterio = $event; $store.dispatch('updateTermo', termo)"
                >
          </app-documento-field>

          <app-documento-field
                titulo = "4. ESPECIFICAÇÕES DAS ATIVIDADES E INDICAÇÃO DA META E ETAPA"
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
                 titulo = "5. PRODUTO"
                 :somenteLeitura = "somenteLeitura"
                 :showTooltip = "tooltips.showProduto"
                 :tooltipMsg = "termo.modelo.produto"
                 v-model = "termo.documento.produto"
                 :comentarios = "getComentarios('produto')"
                 @addComentario="addComentario('produto')"
                 @updated="termo.documento.produto = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

            <app-documento-field
                 titulo = "6. APRESENTAÇÃO E APROVAÇÃO DO PRODUTO"
                 :somenteLeitura = "somenteLeitura"
                 :showTooltip = "tooltips.showApresentacao"
                 :tooltipMsg = "termo.modelo.apresentacao"
                 v-model = "termo.documento.apresentacao"
                 :comentarios = "getComentarios('apresentacao')"
                 @addComentario="addComentario('apresentacao')"
                 @updated="termo.documento.apresentacao = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

            <app-documento-field
                 titulo = "7. PRAZO, LOCAL E CONDIÇÕES DE EXECUÇÃO"
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
                 titulo = "8. RESPONSABILIDADE PELA SUPERVISÃO DAS ATIVIDADES"
                 :somenteLeitura = "somenteLeitura"
                 :showTooltip = "tooltips.showResponsabilidade"
                 :tooltipMsg = "termo.modelo.responsabilidade"
                 v-model = "termo.documento.responsabilidade"
                 :comentarios = "getComentarios('responsabilidade')"
                 @addComentario="addComentario('responsabilidade')"
                 @updated="termo.documento.responsabilidade = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

            <app-documento-field
                 titulo = "9. VALOR DA BOLSA E FORMAS DE CONCESSAO"
                 :somenteLeitura = "somenteLeitura"
                 :showTooltip = "tooltips.showValor"
                 :tooltipMsg = "termo.modelo.valor"
                 v-model = "termo.documento.valor"
                 :comentarios = "getComentarios('valor')"
                 @addComentario="addComentario('valor')"
                 @updated="termo.documento.valor = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

            <app-documento-field
                 titulo = "10. OBRIGAÇÕES DO CONCEDENTE"
                 :somenteLeitura = "somenteLeitura"
                 :showTooltip = "tooltips.showObrigacoesConcendente"
                 :tooltipMsg = "termo.modelo.obrigacoesConcedente"
                 v-model = "termo.documento.obrigacoesConcedente"
                 :comentarios = "getComentarios('obrigacoesConcedente')"
                 @addComentario="addComentario('obrigacoesConcedente')"
                 @updated="termo.documento.obrigacoesConcedente = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>
            
            <app-documento-field
                 titulo = "11. OBRIGAÇÕES DO(A) BOLSISTA/PESQUISADOR"
                 :somenteLeitura = "somenteLeitura"
                 :showTooltip = "tooltips.showObrigacoes"
                 :tooltipMsg = "termo.modelo.obrigacoesBolsista"
                 v-model = "termo.documento.obrigacoesBolsista"
                 :comentarios = "getComentarios('obrigacoesBolsista')"
                 @addComentario="addComentario('obrigacoesBolsista')"
                 @updated="termo.documento.obrigacoesBolsista = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

            <app-unidade-execucao :somenteLeitura="somenteLeitura" titulo="12. UNIDADE DE EXECUÇÃO TÉCNICA E FINANCEIRA:"/>

             <div class="label">
                <span>12. FONTE DE RECURSO</span>
            </div>
            <textarea class="form-control" v-model="termo.documento.fonte"></textarea>


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
                    showResponsabilidade: false,
                    showValor: false,
                    showObrigacoesConcedente: false,
                    showObrigacoesBolsista: false,
                    showFonte: false

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
            appDocumentoField: DocumentoField,
            appUnidadeExecucao: UnidadeExecucao
        }

    }
</script>

