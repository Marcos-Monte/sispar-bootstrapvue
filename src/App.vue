<template>
  <!-- Container principal que ocupa toda a largura da tela -->
  <b-container fluid id="app">
    
    <!-- Componente que renderiza as rotas -->
    <router-view></router-view>

  </b-container>
</template>

<script>
export default {
  // Componente principal da aplicação
}
</script>

<style scoped lang="scss">
  /* Estilo para o container principal */
  #app {
    height: 100vh; /* Ocupa toda a altura da tela */
    margin: 0; /* Remove margens */
    padding: 0; /* Remove preenchimento */
  }
</style>
