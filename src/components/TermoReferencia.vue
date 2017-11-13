<template>
    <div class="content-box-inner">
        <div class="text-center">
            <h1>TERMO DE REFERÊNCIA Nº XXXX/2017</h1>
        </div>
        <div class="form-group row">
            <label for="projeto" class="col-3 col-form-label">TIPO:</label>
            <div class="col-5">
                <select id="tipo" class="form-control"  v-model="termo.tipo">
                    <option v-for="(tipo, index) in tipos" :value="index" :key="index" :selected="termo.tipo == index">{{tipo}}</option>
                </select>
            </div>
        </div>
        <div class="form-group row">
            <label for="projeto" class="col-3 col-form-label">PROJETO:</label>
            <div class="col-5">
                <input class="form-control" type="text" id="projeto" v-model="termo.projeto">
            </div>
        </div>
        <div class="form-group row">
            <label for="projeto" class="col-3 col-form-label">INSTITUIÇÃO FINANCEIRA:</label>
            <div class="col-5">
                <input class="form-control" type="text" id="instituicaofinanceira" v-model="termo.instituicaofinanceira">
            </div>
        </div>
        <div class="form-group row">
            <label for="projeto" class="col-3 col-form-label">PROCESSO FUJB:</label>
            <div class="col-5">
                <input class="form-control" type="text" id="processo" v-model="termo.processo">
            </div>
        </div>
        <app-termo-referencia-pessoa-fisica
                @updated="update($event)"
                :termo="termo"
                v-if="termo.tipo === 1">
        </app-termo-referencia-pessoa-fisica>

        <app-termo-referencia-pessoa-juridica
                @updated="update($event)"
                :termo="termo" v-else-if="termo.tipo === 2">
        </app-termo-referencia-pessoa-juridica>

        <app-termo-referencia-bolsa
                @updated="update($event)"
                :termo="termo"
                v-else-if="termo.tipo === 3">
        </app-termo-referencia-bolsa>

        <app-termo-referencia-importacao
                @updated="update($event)"
                :termo="termo"
                v-else-if="termo.tipo === 4">
        </app-termo-referencia-importacao>

        <div class=text-right >
            <button type="button" class="btn btn-sm btn-primary">  Salvar  </button>
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
                termo: {},
                id: this.$route.params.id,
                action: this.$route.params.action,
                tipos: Tipos
            }
        },
        async created(){
            switch(this.action){
                case 'new':
                    this.termo.documento = {}
                    this.termo.modelo = {}
                    this.termo.revisoes = []
                break;
                case 'edit':
                    this.termo = (await termoReferenciaService.GetByIdAsync(this.id)).data
                break;
                
            }
            
            // this.termo.revisoes[0].usuario = "Ismael Marques"
            // this.termo.revisoes[0].data = "09/11/2017"
            // this.termo.revisoes[0].documento = { objeto: 'What it does: Traverses the array from left to right invoking a callback function on each element with parameters (below). For each callback the value returned becomes the element in the new array. After all elements have been traversed map() returns the new array with all the translated elements[1].'}
            // this.termo.revisoes[2].usuario = "Leonardo Frere"
            // this.termo.revisoes[2].data = "09/11/2017"
            // this.termo.revisoes[2].documento = { objeto: 'What it does: Like map() it traverses the array from left to right invoking a callback function on each element. The returned value must be a boolean identifying whether the element will be kept or discarded. After all elements have been traversed filter() returns a new array with all elements that returned true[2].'}
            // this.termo.revisoes[3].usuario = "Leonardo Frere"
            // this.termo.revisoes[3].data = "09/11/2017"
            // this.termo.revisoes[3].documento = { justificativa: 'What it does: Like map() it traverses the array from left to right invoking a callback function on each element. The returned value must be a boolean identifying whether the element will be kept or discarded. After all elements have been traversed filter() returns a new array with all elements that returned true[2].'}
        },
        methods: {
            update(e){
                this.termo.documento = e.documento
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
