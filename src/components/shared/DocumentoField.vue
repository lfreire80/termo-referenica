<template>
  <div>
       <div class="label">
            <span>{{titulo}}</span>
            <span class="right-span">
                <button 
                    type="button"
                    @click="addComentario()"
                    v-if="usuario.idUsuario == 1"
                    class="btn btn-sm my-btn-revisoes">+
                </button>
                <button 
                    type="button"
                    @click="showComentarios = !showComentarios"
                    v-if="comentarios.length > 0"
                    class="btn btn-sm my-btn-revisoes">Comentários {{comentarios.length}}
                </button>
                <button 
                    type="button"
                    @click="internalShowTooltip = !internalShowTooltip"
                    v-if="tooltipMsg"
                    class="btn btn-sm my-btn">?
                </button>             
            </span>     
        </div>
        <app-tooltip 
            :show="internalShowTooltip"
            :bgColor="'#e2edff'"
            :bdColor="'#4c90ff'">{{ tooltipMsg }}
        </app-tooltip>
        <app-tooltip 
            v-for="comentario in comentarios"
            :key="comentario.key"
            :show="showComentarios"
            :bgColor="'#fffcf4'"
            :bdColor="'#ce9e1c'">
                <div class="comentario-header">{{ comentario.revisor }} - {{ comentario.data}}</div>
                <p>{{comentario.comentario }}</p>
        </app-tooltip>
        <textarea-autosize 
            class="form-control" 
            v-model = "internalValue"
            @change.native="updated($event)" >
        </textarea-autosize>
  </div>
</template>

<script>
    import Tooltip from './Tooltip.vue'
    import { mapState } from 'vuex'
    export default{
        props: [
            'titulo',
            'showTooltip',
            'tooltipMsg',
            'value',
            'comentarios'
        ],
        data(){
            return {
                showComentarios : this.comentarios == 0,
                internalValue : this.value,
                internalShowTooltip : this.showTooltip
            }
        },
        computed: {
            ...mapState([
                'usuario'
            ])
        },
        components:{
            appTooltip: Tooltip
        },
        methods:{
            updated(e){
                console.log('emit')
                this.$emit('updated', e.target.value)
                
            },
            addComentario(){
                this.$emit("addComentario")
            }

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
    .right-span{
        float:right;
    }

    .right-span button{
        font-size: 9px
    }
    textarea{
        width:100%;
        padding: 5px;
        margin-bottom: 5px;
    }
    .my-btn{
        margin-top: -2px;
        background-color:#e2edff;
        font-weight: bold;
        cursor:pointer;
    }

    .my-btn-revisoes{
        margin-top: -2px;
        background-color: #fffcf4;
        font-weight: bold;
        cursor:pointer;
    }

    .comentario-header{
        border-radius:3px;
        background-color:#ce9e1c;
        color:#fffcf4;
        padding: 3px 5px;
        font-weight: bold;

    }

    @media print{
        textarea{
            border: none;
        }
        button{
            display: none;
        }
        label{
             background-color: #ccc;
        }
    }
</style>
