<template>
  <div class="w-screen min-h-screen bg-blue grid-container">
    <div @click="drawerOpen = !drawerOpen" :class="{'active' : drawerOpen}" class="overlay-scrim"></div>
    <aside :class="{'active' : drawerOpen}"></aside>
    <header>
      <a @click="drawerOpen = !drawerOpen" class="px-4 py-1 text-white cursor-pointer">burger</a>
    </header>
    <main>
       <nuxt />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import TopBar from "~/components/navigation/TopBar.vue";
import SideBar from "~/components/navigation/SideBar.vue";

export default {
  name: 'Application',
  components: { TopBar, SideBar },
  data () {
    return {
      drawerOpen: false
    }
  },
  mouunted() {
    this.$nextTick(() => {
      this.windowWidth = window.innerWidth
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    })
  },
  computed: {
    isTouch: function () {
      if (this.windowWidth <= 960) {
        return true
      } return false
    }
  }
};
</script>

<style scoped>
.grid-container {
  margin: 0;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 65px 1fr 10%;
  grid-template-areas:
    "header"
    "main"
    "footer"
}
aside {
  position: fixed;
  left: 0;
  z-index: 6;
  width: 256px;
  overflow-y: auto;
  pointer-events: auto;
  transform: translateX(-100%);
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  transition-property: transform, width;
  @apply bg-white;
}
aside.active {
  top: 0;
  height: 100vh;
  transform: translateX(0%);
}
header {
  grid-area: header;
  @apply bg-blue-700;
}
main {
  grid-area: main;
  @apply bg-gray-100;
}
footer {
  grid-area: footer;
  @apply bg-gray-400;
}
.overlay-scrim {
    opacity: 0;
    background-color: rgb(33, 33, 33);
    border-color: rgb(33, 33, 33);
    border-radius: inherit;
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: inherit;
    width: 100%;
    will-change: opacity;
    z-index: -1;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), z-index 1ms;
}
.overlay-scrim.active {
  opacity: 0.46;
  z-index: 5;
}
@media only screen and (min-width: 768px) {
  .grid-container {
    margin: 0;
    display: grid;
    grid-template-columns: 256px 27% 27% 27%;
    grid-template-rows: 65px auto 10%;
    grid-template-areas:
      "sidebar header header header"
      "sidebar main   main   main"
      "sidebar footer footer footer"
  }
  aside {
    grid-area: sidebar;
    top: 0;
    height: 100vh;
    transform: translateX(0%);
  }
}
</style>
