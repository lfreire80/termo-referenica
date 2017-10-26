<template>
  <div>
    <h2>{{titulo}}</h2>
    <div id="bxSolicPgtoActions" class="bxSolicPgtoActions">

    </div>
    <div class="mini_content">
      <div id="dvSolictPgtoCurrent">

      </div>
    </div>
    <span class="bottom" @click="click">botao</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      titulo: 'Termo de Referência'
    }
  },
  methods: {
    click: function () {
      alert('1')
    }
  }
}
</script>

<style scoped></style>
