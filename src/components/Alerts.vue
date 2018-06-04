<template>
    <transition name="fade">
        <div v-show="show" :class="classe" role="alert" >
            <span>{{ mensagem }}</span>
        </div>
    </transition>
</template>

<script>
import { MessageBus } from '../message-bus.js'
export default {
     data () {
        return {
            mensagem: '',
            show: false,
            classe: ''
        }   
    },
    mounted() {
        MessageBus.$on('Error', (msg, time) => {
            this.show = true
            this.classe = 'alert alert-danger'
            this.mensagem = msg
            setTimeout(() => { 
                this.show = false
            }, time * 1000)
        })

        MessageBus.$on('Success', (msg, time) => {
            this.show = true
            this.mensagem = msg
            this.classe = 'alert alert-success'
            setTimeout(() => { 
                this.show = false
            }, time * 1000)
        })
    }
}
</script>
<style scoped>
    span {
        font-size: 13px;
        font-weight:bold;
    }
    
    .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease-out
    }

    .fade-enter, .fade-leave-active {
    opacity: 0
    }
</style>