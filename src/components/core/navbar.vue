<template>
  <nav class="navbar is-hidden-tablet is-hidden-desktop is-mobile">
    <div class="navbar-brand is-dark is-text-white">
      <a class="navbar-item" href="/index.html">Lucas.io</a>

      <div class="navbar-burger burger" data-target="navMenubd-example">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenubd-example" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-item">Home</a>
          <a class="navbar-item">Experience</a>
          <a class="navbar-item">Education</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "home",
  data: () => ({})
};
</script>

<style lang="css" scoped>
</style>