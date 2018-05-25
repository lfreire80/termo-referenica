<template>
  <div class="content">
      <div class="row">
        <div class="content-box">
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
export default {
    mounted(){
        if (AUTH_TOKEN == 'Bearer undefined' || USER === null){
            window.location = '../';
        } else {
            this.updateUsuario()
        }
    }, 
    methods:{
        ...mapActions([
            'updateUsuario'
        ])
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