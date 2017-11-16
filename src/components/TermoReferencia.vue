<template>
    <div class="content-box-inner">
        <div class="text-center">
            <h1>TERMO DE REFERÊNCIA Nº XXXX/2017</h1>
        </div>
        <div class="form-group row">
            <label for="projeto" class="col-3 col-form-label">TIPO:</label>
            <div class="col-5">
                <select id="tipo" class="form-control"  v-model="termo.tipo" @change="changeTipo($event)">
                    <option v-for="(tipo, index) in tipos" :value="index" :key="index" :selected="termo.tipo == index">{{tipo}}</option>
                </select>
            </div>
        </div>
         <div class="form-group row">
            <label for="projeto" class="col-3 col-form-label">PROCESSO FUJB:</label>
            <div class="col-5">
                <input class="form-control" type="text" id="processo" v-model="termo.processo">
            </div>
        </div>
        <div class="form-group row">
            <label for="projeto" class="col-3 col-form-label">PROJETO:</label>
            <div class="col-5">
                <input class="form-control" type="text" id="projeto" v-model="termo.projeto" >
            </div>
        </div>
        <div class="form-group row">
            <label for="projeto" class="col-3 col-form-label">INSTITUIÇÃO FINANCEIRA:</label>
            <div class="col-5">
                <input class="form-control" type="text" id="instituicaoFinanceira" v-model="termo.instituicaoFinanceira" >
            </div>
        </div>
       
        <app-termo-referencia-pessoa-fisica
                :termo="termo"
                v-if="termo.tipo === 1">
        </app-termo-referencia-pessoa-fisica>

        <app-termo-referencia-pessoa-juridica
                :termo="termo" v-else-if="termo.tipo === 2">
        </app-termo-referencia-pessoa-juridica>

        <app-termo-referencia-bolsa
                :termo="termo"
                v-else-if="termo.tipo === 3">
        </app-termo-referencia-bolsa>

        <app-termo-referencia-importacao
                @updated="update($event)"
                :termo="termo"
                v-else-if="termo.tipo === 4">
        </app-termo-referencia-importacao>

        <div class=text-right >
            <button type="button" class="btn btn-sm btn-primary" @click="save()">Salvar</button>
            <router-link class="btn btn-sm" tag="button" to="/"><span>Sair</span></router-link>
        </div>
    </div>
</template>

<script>
    import TermoReferenciaPessoaFisica from './TermoReferenciaPessoaFisica.vue'
    import TermoReferenciaPessoaJuridica from './TermoReferenciaPessoaJuridica.vue'
    import TermoReferenciaBolsa from './TermoReferenciaBolsa.vue'
    import TermoReferenciaImportacao from './TermoReferenciaImportacao.vue'
    import termoReferenciaService from '../services/termoReferenciaService'
    import {Tipos} from '../models/Tipos.js'
    export default{
        data() {
            return {
                id: this.$route.params.id,
                action: this.$route.params.action,
                tipos: Tipos,
                selectedTipo: 1 //default
            }
        },
        computed: {
            termo: {
                get() {
                    return this.$store.getters.termo
                },
                set(value){
                    this.$store.dispatch('updateTermo', value)
                }
            }
        },
        async created(){
            switch(this.action){
                case 'new':
                    this.termo = (await termoReferenciaService.GetEmpty(this.selectedTipo)).data
                    // this.termo.revisoes = [
                    //     {codigoRevisao:1, revisor: 'Leonardo Freire', documento: { objeto: "teste revisao1"}},
                    //     {codigoRevisao:1, revisor: "lEO", data: '11/12/2017', documento: { objeto: "teste revisao1", prazo: "teste revisao 1 prazo"}}
                    // ]
                break;
                case 'edit':
                    this.termo = (await termoReferenciaService.GetByIdAsync(this.id)).data
                break;
            }
        },
        methods: {
            async save(){
                let res=''
                if(!this.termo.numero){
                    res = await termoReferenciaService.SaveAsync(this.termo);
                } else {
                    res = await termoReferenciaService.UpdateAsync(this.termo);
                }
                if(res.status === 200){
                    console.log('gravado com sucesso')
                    this.$router.push('/')
                } else {
                    console.log('erro ao gravar')
                }

                
            },
            changeTipo(e){
                this.selectedTipo = e.target.value
                console.log(e.target.value)
            }
        },
        components: {
            appTermoReferenciaPessoaFisica : TermoReferenciaPessoaFisica,
            appTermoReferenciaPessoaJuridica : TermoReferenciaPessoaJuridica,
            appTermoReferenciaBolsa : TermoReferenciaBolsa,
            appTermoReferenciaImportacao : TermoReferenciaImportacao
        }
    }
</script>

<style scoped>
    h1 {
        font-size: 15px;
        font-weight: bold;
        padding: 20px;
    }

    .document-header{
        padding: 30px;
    }
    label{
        font-weight: bold;
    }
    @media print{
        input {
            border: none;
        }
    }
</style>
