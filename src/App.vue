<template>
  <div id="app">
    <div class="columns is-fullheight">
      <core-navbar></core-navbar>
      <core-view></core-view>
      <core-toolbar></core-toolbar>
      <div class="column is-main-content padding-right">
          <section-home></section-home>
          <section-about></section-about>
          <section-experience></section-experience>
          <section-skill></section-skill>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    CoreNavbar: () => import('@/components/core/navbar'),
    CoreView: () => import('@/components/core/view'),
    CoreToolbar: () => import('@/components/core/toolbar'),
    SectionHome: () => import('@/components/section/home'),
    SectionAbout: () => import('@/components/section/about'),
    SectionExperience: () => import('@/components/section/experience'),
    SectionSkill: () => import('@/components/section/skill'),
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oxanium&display=swap');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.padding-right {
  padding-right: 5px
}
</style>
