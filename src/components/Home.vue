<template>
    <div class="content">
        
        <div class="row">
            <div class="content-box">
                <app-alerts />
                <transition name="fade">
                    <router-view></router-view>
                </transition>
             </div>
        </div>
    </div>
</template>

<script>
import { AUTH_TOKEN, USER } from '../auth'
import { mapActions } from 'vuex'
import { MessageBus } from '../message-bus.js'
import Alerts from './Alerts.vue'
export default {
    data() {
        return {
            AuthToken: AUTH_TOKEN
        }
    },
    mounted(){
        this.checkCredenctials()
    }, 
    methods:{
        ...mapActions([
            'updateUsuario'
        ]),
        sendToLoginPage(){
            window.location = '../';
        },
        checkCredenctials(){
            if (this.AuthToken == 'Bearer undefined'){
            this.sendToLoginPage()
            } else {
                this.updateUsuario()
            }
        }

    },
    components: {
        appAlerts: Alerts
    }
}
</script>


<style scoped>
    .my-btn{
        font-size: 12px; 
    }

    .my-close{
        font-size: 20px;
    }


    .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease-out
    }

    .fade-enter, .fade-leave-active {
    opacity: 0
    }
</style>