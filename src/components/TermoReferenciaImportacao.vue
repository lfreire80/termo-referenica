<template>
   <div>
       <div class="form-group">
          <app-documento-field
                titulo = "1. OBJETIVO DA AQUISIÇÃO / IMPORTAÇÃO"
                :showTooltip = "tooltips.showObjeto"
                :tooltipMsg = "termo.modelo.objeto"
                v-model = "termo.documento.objeto"
                :comentarios = "getComentarios('objeto')"
                @addComentario="addComentario('objeto')"
                @updated="termo.documento.objeto = $event; $store.dispatch('updateTermo', termo)"
                >
          </app-documento-field>

          <app-documento-field
                titulo = "2. CONTEXTUALIZAÇÃO / JUSTIFICATIVA TÉCNICA"
                :showTooltip = "tooltips.showContextualizcao"
                :tooltipMsg = "termo.modelo.contextualizacao"
                v-model = "termo.documento.contextualizacao"
                :comentarios = "getComentarios('contextualizacao')"
                @addComentario="addComentario('contextualizacao')"
                @updated="termo.documento.contextualizacao = $event; $store.dispatch('updateTermo', termo)"
                >
          </app-documento-field>

            <app-documento-field
                titulo = "3. DETALHAMENTO DO MATERIAL / EQUIPAMENTO"
                :showTooltip = "tooltips.showMaterial"
                :tooltipMsg = "termo.modelo.material"
                v-model = "termo.documento.material"
                :comentarios = "getComentarios('material')"
                @addComentario="addComentario('material')"
                @updated="termo.documento.material = $event; $store.dispatch('updateTermo', termo)"
                >
          </app-documento-field>

          <app-documento-field
                titulo = "4. LOCAL DE ENTREGA DO MATERIAL / EQUIPAMENTO"
                :showTooltip = "tooltips.showLocal"
                :tooltipMsg = "termo.modelo.local"
                v-model = "termo.documento.local"
                :comentarios = "getComentarios('local')"
                @addComentario="addComentario('local')"
                @updated="termo.documento.local = $event; $store.dispatch('updateTermo', termo)"
                >
          </app-documento-field>

           <app-documento-field
                 titulo = "5. JUNTA DE DOCUMENTOS"
                 :showTooltip = "tooltips.showJuntadaDocumento"
                 :tooltipMsg = "termo.modelo.juntadaDocumento"
                 v-model = "termo.documento.juntadaDocumento"
                 :comentarios = "getComentarios('juntadaDocumento')"
                 @addComentario="addComentario('juntadaDocumento')"
                 @updated="termo.documento.juntadaDocumento = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

            <app-documento-field
                 titulo = "6. FONTE DE RECURSOS"
                 :showTooltip = "tooltips.showFonte"
                 :tooltipMsg = "termo.modelo.fonte"
                 v-model = "termo.documento.fonte"
                 :comentarios = "getComentarios('fonte')"
                 @addComentario="addComentario('fonte')"
                 @updated="termo.documento.fonte = $event; $store.dispatch('updateTermo', termo)"
                 >
            </app-documento-field>

            <app-documento-field
                 titulo = "7. JUSTIFICATIVA DE VALOR E BEM À SER IMPORTADO"
                 :showTooltip = "tooltips.showJustificativa"
                 :tooltipMsg = "termo.modelo.justificativa"
                 v-model = "termo.documento.justificativa"
                 :comentarios = "getComentarios('justificativa')"
                 @addComentario="addComentario('justificativa')"
                 @updated="termo.documento.justificativa = $event; $store.dispatch('updateTermo', termo)"
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
                    showContextualizacao: false,
                    showMaterial: false,
                    showLocal: false,
                    showJuntadaDocumento: false,
                    showFonte: false,
                    showJustificativa: false
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
<style scoped> 


@media print{
    textarea{
        border: none;
    }
}
</style>
