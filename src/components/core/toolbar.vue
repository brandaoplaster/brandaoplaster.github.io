<template>
  <div class="column is-3 is-sidebar-menu is-hidden-mobile">
      <aside class="menu">
        <div class="header">
          <div class="avatar">
            <img class="is-rounded" src="https://randomuser.me/api/portraits/women/67.jpg" alt="">
          </div>
        </div>
        <ul class="menu-list">
          <li><a ref="home">Home</a></li>
          <li><a ref="about">About</a></li>
          <li><a ref="experience">Experience</a></li>
          <li><a ref="education">Education</a></li>
          <li><a ref="skill">Skill</a></li>
          <li><a>Portfolio</a></li>
        </ul>
      </aside>
    </div>
</template>

<script>
    export default {
        data: () => ({
            title: 'Brandao Plaster',
            drawer: true,
        }),
    }
</script>

<style lang="css" scoped>
   
</style>