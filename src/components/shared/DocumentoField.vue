<template>
  <div>
       <label>
            <span>{{ titulo}}</span>
                <span class="right-span">
                <button type="button" @click="internalShowTooltip = !internalShowTooltip" class="btn btn-sm my-btn">?</button>
            </span>     
        </label>
        <app-tooltip :show="internalShowTooltip">{{ tooltipMsg }}</app-tooltip>
        <textarea-autosize 
            class="form-control" 
            v-model = "internalValue"
            @change.native="updated($event)" >
        </textarea-autosize>
  </div>
</template>

<script>
    import Tooltip from './Tooltip.vue'
    export default{
        props: [
            'titulo',
            'showTooltip',
            'tooltipMsg',
            'value'
        ],
        data(){
            return {
                internalValue : this.value,
                internalShowTooltip : this.showTooltip
            }
        },
        components:{
            appTooltip: Tooltip
        },
        methods:{
            updated(e){
                this.$emit('updated', this.v)
            }
        }
      
        
    }
</script>

<style scoped>
    label{
        background-color: #ccc;
        display: block;
        font-weight: bold;
        padding: 5px;
        height: 30px;
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
        background-color:antiquewhite;
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
