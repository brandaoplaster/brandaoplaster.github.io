<template>
  <b-navbar class="navbar is-hidden-tablet is-fixed-top is-hidden-desktop is-mobile">
    <template slot="brand">
      <b-navbar-item v-scroll-to="{ element: '#home', duration: 3000 }">
        <span>Lucas</span>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item v-scroll-to="{ element: '#home', duration: 3000 }">
          Home
      </b-navbar-item>
      <b-navbar-item v-scroll-to="{ element: '#about', duration: 3000 }">
          About
      </b-navbar-item>
      <b-navbar-item v-scroll-to="{ element: '#experience', duration: 3000 }">
          Experience
      </b-navbar-item>
      <b-navbar-item v-scroll-to="{ element: '#skill', duration: 3000 }">
          Skill
      </b-navbar-item>        
    </template>
    </b-navbar>
</template>

<script>
export default {
  name: "home",
  data: () => ({})
};
</script>

<style lang="css" scoped>
</style>