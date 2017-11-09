<template>
  <transition name="fade">
    <div class='my-tooltip' v-if="show">
         <p><slot></slot></p>
    </div>
  </transition>
</template>

<script>
    export default {
        props: ['show']
    }
</script>

<style>
.my-tooltip{
    transition: all .3s ease;
    background-color:antiquewhite;
    font-size: 11px;
    padding: 10px;
    margin-bottom: 5px;
    border: 1px solid chocolate;
    overflow: hidden;
    border-radius: 5px;
}

.fade-enter, .fade-leave-to{
  height: 0;
  padding: 0 10px;
  opacity: 0;
}

</style>

