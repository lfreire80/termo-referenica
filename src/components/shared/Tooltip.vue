<template>
  <transition name="fade">
    <div class='my-tooltip' v-if="show" v-bind:style="{backgroundColor: bgColor, borderColor: bdColor}">
         <p><slot></slot></p>
    </div>
  </transition>
</template>

<script>
    export default {
        props: ['show', 'bgColor', 'bdColor']
    }
</script>

<style>
.my-tooltip{
    transition: all .3s ease;
    font-size: 11px;
    padding: 10px;
    margin-bottom: 5px;
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid
}

.fade-enter, .fade-leave-to{
  height: 0;
  padding: 0 10px;
  opacity: 0;
}

</style>

