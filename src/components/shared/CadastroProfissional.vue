<template>
    <div>
        <div class="form-group">   
            <label for="atividade">Atividade:</label>
            <div class="input-group">
                <input type="text" class="col-lg-12 form-control" id="atividade" v-model="profissional.ativade" />
            </div>
        </div>
        <div class="form-group">   
            <label for="produto">Produto:</label>
            <div class="input-group">
                <input type="text" class="col-lg-12 form-control" id="produto" v-model="profissional.produto" />
            </div>
        </div>
        <div class="form-group">   
            <label for="produto">Prazo:</label>
            <div class="input-group">
                <input type="text" class="col-lg-12 form-control" id="prazo" v-model="profissional.prazo" />
            </div>
        </div>
        <!--<div class="row">
            <div class="col-lg-12">Estimativa</div>
        </div>-->
        <div class="row">
            <div class="col-lg-4">
                <div class="form-group">   
                    <label for="valor">Valor:</label>
                    <div class="input-group">
                        <input type="text" class="col-lg-12 form-control" id="valor" v-model="profissional.valor" />
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="form-group">   
                    <label for="inss">INSS:</label>
                    <div class="input-group">
                        <input type="text" class="col-lg-12 form-control" id="inss" v-model="profissional.inss" />
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="form-group">   
                    <label for="total">Total:</label>
                    <div class="input-group">
                        <input type="text" class="col-lg-12 form-control" id="total" v-model="profissional.total" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3">
                <div class="form-group">   
                    <label for="inss">Período:</label>
                    <div class="input-group">
                        <input type="text" class="col-lg-12 form-control" id="periodo" v-model="parcela.periodo" />
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="form-group">   
                    <label for="inss">Produto:</label>
                    <div class="input-group">
                        <input type="text" class="col-lg-12 form-control" id="periodo" v-model="parcela.produto" />
                    </div>
                </div>
            </div>
            <div class="col-lg-2">
                <div class="form-group">   
                    <label for="inss">Parcela:</label>
                    <div class="input-group">
                        <input type="text" class="col-lg-12 form-control" id="periodo" v-model="parcela.parcela" />
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="form-group">   
                    <label for="inss">Total:</label>
                    <div class="input-group">
                        <input type="text" class="col-lg-12 form-control" id="periodo" v-model="parcela.total" />
                    </div>
                </div>
            </div>
            <div class="col-lg-1">
                <div class="form-group">
                    <label for="inss"></label>
                    <div class="input-group">
                        <button class="btn btn-sm" @click="addParcela()">+</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="profissional.parcelas.length > 0">
            <table class="table">
                <thead>
                    <tr class="d-flex">
                        <th class="col-3">Período</th>
                        <th class="col-3">Produto</th>
                        <th class="col-2">Parcela</th>
                        <th class="col-3">Total</th>
                        <th class="col-1"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="parcela in profissional.parcelas" class="d-flex">
                        <td class="col-3">{{parcela.periodo}}</td>
                        <td class="col-3">{{parcela.produto}}</td>
                        <td class="col-2">{{parcela.parcela}}</td>
                        <td class="col-3">{{parcela.total}}</td>
                        <td class="col-1"><button class="btn btn-sm btn-danger" @click="remover(parcela)">X</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            profissionais: [],
            profissional: {
                parcelas: []
            },
            parcela: {
                periodo: '',
                produto: '',
                parcela: '',
                total: ''
            }
        }
    },
    methods: {
        addParcela(){
            this.profissional.parcelas.push(Object.assign({}, this.parcela))
        },
        remover(parcela){
            this.profissional.parcelas.splice(this.profissional.parcelas.indexOf(parcela),1)
        }
    },
    computed: {
            ...mapState([
                'termo',
            ])
        },
}

</script>

<style>

</style>
