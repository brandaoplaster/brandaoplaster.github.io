<template>
  <div class="column is-3 is-sidebar-menu is-hidden-mobile toolbar">
      <aside class="menu">
        <div class="header">
          <figure class="image is-128x128">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
        </div>
        <nav class="stroke">
          <ul>
            <li>
              <span v-scroll-to="{ element: '#home', duration: 3000 }">Home</span>
            </li>
            <li>
              <span v-scroll-to="{ element: '#about', duration: 3000 }">About</span>
            </li>
            <li>
              <span v-scroll-to="{ element: '#skill', duration: 3000 }">Skill</span>
            </li>
            <li>
              <span v-scroll-to="{ element: '#experience', duration: 3000 }">Experience</span>
            </li>
            <li>
              <span v-scroll-to="{ element: '#interests', duration: 3000 }">Interests</span>
            </li>
          </ul>
        </nav>
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
  .toolbar {
    text-align: center;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 17rem;
    height: 100vh;
  }

  .header {
    display: flex;
    justify-content: center;
    margin: 3px;
    padding: 3px;
  }

  nav {
    width: 80%;
    margin: 0 auto;
    background: #fff;
    padding: 30px 0;
    box-shadow: 0px 5px 0px #dedede;
  }
  nav ul {
    list-style: none;
    text-align: center;
  }
  nav ul li {
    display: inline-block;
  }
  nav ul li span {
    display: block;
    padding: 15px;
    text-decoration: none;
    color: #aaa;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 10px;
  }
  nav ul li span,
  nav ul li span:after,
  nav ul li span:before {
    transition: all .5s;
  }
  nav ul li span:hover {
    color: #555;
  }

  nav.stroke ul li span,
  nav.fill ul li span {
    position: relative;
  }
  nav.stroke ul li span:after,
  nav.fill ul li span:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: '.';
    color: transparent;
    background: #aaa;
    height: 1px;
  }
  nav.stroke ul li span:hover:after {
    width: 100%;
  }

  nav.fill ul li span {
    transition: all 2s;
  }

  nav.fill ul li span:after {
    text-align: left;
    content: '.';
    margin: 0;
    opacity: 0;
  }
  nav.fill ul li span:hover {
    color: #fff;
    z-index: 1;
  }
  nav.fill ul li span:hover:after {
    z-index: -10;
    animation: fill 1s forwards;
    -webkit-animation: fill 1s forwards;
    -moz-animation: fill 1s forwards;
    opacity: 1;
  }
</style>