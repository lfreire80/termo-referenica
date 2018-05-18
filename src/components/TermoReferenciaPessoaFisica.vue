<template>
   <div>
        <div style="padding:20px; font-size:10px;">
            <center><button class="btn btn-primary btn-sm" style="cursor:ponter" @click="addProfissional()">Cadastrar Profissionais</button></center>
        </div>
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
                titulo = "2. JUSTIFICATIVA DA CONTRATAÇÃO"
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

            <app-profissional-atividades-field
                titulo = "4. ESPECIFICAÇÕES TÉCNICAS"
                :somenteLeitura = "somenteLeitura"
                :showTooltip = "tooltips.showEspecificacao"
                :tooltipMsg = "termo.modelo.especificacao"
                v-model = "termo.documento.especificacao"
                :comentarios = "getComentarios('especificacao')"
                @addComentario="addComentario('especificacao')"
                @updated="termo.documento.especificacao = $event; $store.dispatch('updateTermo', termo)"
                >
            </app-profissional-atividades-field>

            <app-profissional-produtos-field
                 titulo = "5. PRODUTO"
                 :somenteLeitura = "somenteLeitura"
                 :showTooltip = "tooltips.showProduto"
                 :tooltipMsg = "termo.modelo.produto"
                 v-model = "termo.documento.produto"
                 :comentarios = "getComentarios('produto')"
                 @addComentario="addComentario('produto')"
                 @updated="termo.documento.produto = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-profissional-produtos-field>

            <app-documento-field
                 titulo = "6. APRESENTAÇÃO E APROVAÇÃO DO SERVIÇO"
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

            <app-profissional-custo-field
                 titulo = "8. ESTIMATIVA DE CUSTO DA CONTRATAÇÃO"
                 :somenteLeitura = "somenteLeitura"
                 :showTooltip = "tooltips.showEstimativaCusto"
                 :tooltipMsg = "termo.modelo.estimativaCusto"
                 v-model = "termo.documento.estimativaCusto"
                 :comentarios = "getComentarios('estimativaCusto')"
                 @addComentario="addComentario('estimativaCusto')"
                 @updated="termo.documento.estimativaCusto = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-profissional-custo-field>

            <app-profissional-prazos-field
                 titulo = "9. CONDIÇÕES E PRAZOS DE PAGAMENTO"
                 :somenteLeitura = "somenteLeitura"
                 :showTooltip = "tooltips.showCondicoes"
                 :tooltipMsg = "termo.modelo.condicoes"
                 v-model = "termo.documento.condicoes"
                 :comentarios = "getComentarios('condicoes')"
                 @addComentario="addComentario('condicoes')"
                 @updated="termo.documento.condicoes = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-profissional-prazos-field>

            <app-documento-field
                 titulo = "10. OBRIGAÇÕES DO(A) PROFISSIONAL A SER CONTRATADO"
                 :somenteLeitura = "somenteLeitura"
                 :showTooltip = "tooltips.showObrigacoes"
                 :tooltipMsg = "termo.modelo.obrigacoes"
                 v-model = "termo.documento.obrigacoes"
                 :comentarios = "getComentarios('obrigacoes')"
                 @addComentario="addComentario('obrigacoes')"
                 @updated="termo.documento.obrigacoes = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

            <app-unidade-execucao titulo="11. UNIDADE DE EXECUÇÃO TÉCNICA E FINANCEIRA:"/>

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
    import ProfissionalAtividadesField from './shared/ProfissionalAtividadesField.vue'
    import ProfissionalProdutosField from './shared/ProfissionalProdutosField.vue'
    import ProfissionalCustoField from './shared/ProfissionalCustoField.vue'
    import ProfissionalPrazosField from './shared/ProfissionalPrazosField.vue'
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
                    showEstimativaCusto: false,
                    showCondicoes: false,
                    showObrigacoes: false,
                    showFonte: false
                },
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
            },
            addProfissional(){
                this.$emit('addProfissional')
            }
        },
        components:{
            appDocumentoField: DocumentoField,
            appUnidadeExecucao: UnidadeExecucao,
            appProfissionalAtividadesField: ProfissionalAtividadesField,
            appProfissionalProdutosField: ProfissionalProdutosField,
            appProfissionalCustoField: ProfissionalCustoField,
            appProfissionalPrazosField: ProfissionalPrazosField
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
    textarea{
        width:100%;
        padding: 5px;
        margin-bottom: 5px;
        font-size:12px;
    }
</style>

