<template>
  <div id="app">
    <core-navbar></core-navbar>
    <core-view></core-view>
    <!-- <core-footer></core-footer> -->
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    CoreNavbar: () => import('@/components/core/navbar'),
    CoreView: () => import('@/components/core/view'),
    // CoreFooter: () => import('@/components/core/footer'),
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
