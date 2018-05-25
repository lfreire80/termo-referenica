<template>
    <div class="row">
        <div class="col-4">
            <div class="box"  style="height:100%; margin-bottom:5px;">
                <div class="row">
                    <div class="col-12" style="text-align:center; margin-bottom:10px">
                        <button type="button" @click="addProfissional()" class="btn btn-sm btn-primary">Adicionar Profissional</button>
                    </div>
                </div> 
                <div class="row">
                    <div class="col-12">
                        <table class="table" v-if="termo.documento.profissionais">
                            <tr v-for="(valor, index) in termo.documento.profissionais" :style="(profissional_selecionado == index) ? 'background-color:#ccc': ''">
                                <td @click="selecionaProfissional(index)">Profissional - {{index+1}}</td>
                                <td><a href="#" @click="copiarProfissional(index)"><img alt="Copiar este profissional" title="Copiar este profissional" src="../assets/repo-clone.svg" /></a></td>
                                <td><a href="#" @click="removeProfissional(index)"><img alt="Remover profissional" title="Remover profissional" src="../assets/trashcan.svg" /></a></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-8" v-if="termo.documento.profissionais">
            <div class="box" v-show="termo.documento.profissionais.length > 0">
                <div class="form-group">   
                    <label for="atividade">Atividade:</label>
                    <div class="input-group">
                        <textarea class="col-lg-12 form-control" id="atividade" v-model="profissional.atividade"></textarea>
                    </div>
                </div>
                <div class="form-group">   
                    <label for="produto">Produto:</label>
                    <div class="input-group">
                        <textarea type="text" class="col-lg-12 form-control" id="produto" v-model="profissional.produto"></textarea>
                    </div>
                </div>
                <!--<div class="form-group">   
                    <label for="produto">Prazo:</label>
                    <div class="input-group">
                        <textarea type="text" class="col-lg-12 form-control" id="prazo" v-model="profissional.prazo" ></textarea>
                    </div>
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
                </div>
                <div class="box" v-show="termo.documento.profissionais.length > 0">
                <div class="row">
                    <div class="col-lg-12"><strong>Cadastro de Parcelas</strong></div>
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
                    <div class="col-lg-3">
                        <div class="form-group">   
                            <label for="inss">Parcela:</label>
                            <div class="input-group">
                                <input type="text" class="col-lg-12 form-control" id="periodo" v-model="parcela.parcelaNumero" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-group">   
                            <label for="inss">Total:</label>
                            <div class="input-group">
                                <input type="text" class="col-lg-12 form-control" id="periodo" v-model="parcela.valor" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="inss"></label>
                            <div class="input-group">
                                <button class="btn btn-sm btn-primary" @click="addParcela()">Incluir Parcela</button>
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
                                <th class="col-3">Valor</th>
                                <th class="col-1"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="parcela in profissional.parcelas" class="d-flex">
                                <td class="col-3">{{parcela.periodo}}</td>
                                <td class="col-3">{{parcela.produto}}</td>
                                <td class="col-2">{{parcela.parcelaNumero}}</td>
                                <td class="col-3">{{parcela.valor}}</td>
                                <td class="col-1"><a href="#" @click="remover(parcela)"><img alt="Remover parcela" title="Remover parcela" src="../assets/trashcan.svg" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
               
            </div>
        </div>     
    </div>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'lodash'

export default {
    data() {
        return {
            profissional: {
                parcelas: []
            },
            profissional_selecionado: '',
            parcela: {
                periodo: '',
                produto: '',
                parcelaNumero: '',
                valor: ''
            }
        }
    },
    methods: {
        addParcela(){
            this.profissional.parcelas.push(_.clone(this.parcela))
            // Limpa as propriedades da parcela //
            this.parcela = Object.getOwnPropertyNames(this.parcela).reduce((a, c) => {
                a[c] = ''
                return a
            },{})
        },
        remover(parcela){
            this.profissional.parcelas.splice(this.profissional.parcelas.indexOf(parcela),1)
        },
        addProfissional(){
            var profissional = { 
                parcelas: []
            }
            this.termo.documento.profissionais.push(profissional)
            this.profissional_selecionado = this.termo.documento.profissionais.length - 1;
            this.selecionaProfissional(this.termo.documento.profissionais.length - 1)
        },
        removeProfissional(index){
            this.termo.documento.profissionais.splice(index,1)
        },
        selecionaProfissional(index){
            this.profissional = this.termo.documento.profissionais[index]
            this.profissional_selecionado = index
            if(this.profissional.parcelas)
                this.profissional.parcelas.sort()
            

        },
        copiarProfissional(index){
            this.termo.documento.profissionais.push(_.cloneDeep(this.termo.documento.profissionais[index]))
        }
        // clonarProfissional(profissional){
        //     var parcelas = profissional.parcelas.map(x => Object.assign({}, x))
        //     var profissional = Object.assign({}, profissional);
        //     profissional.parcelas = parcelas
        //     return profissional
        // }
        
    },
    computed: {
            ...mapState([
                'termo',
            ])
        },
}

</script>

<style scoped>

.box {
    border: 1px solid #ccc;
    border-radius: 10px;
    background: #fff;
    padding:10px 15px;
    margin:0 0 10px 0;
    display:block;
}

button{
    font-size:10px;
}

.lista_profissionais{
    list-style-type: none;
    padding:0;
    margin:0;
}

.lista_profissionais li{
    padding: 6px 0;
}

img{
    width:15px;
    height:15px;
}
</style>
