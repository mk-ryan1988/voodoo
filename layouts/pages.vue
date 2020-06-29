<template>
  <div class="flex flex-col w-screen md:flex-row">
    <aside class="z-0 w-full pb-10 bg-gray-700 md:pb-0 md:h-screen md:fixed md:w-1/2 md:z-10">
      <div class="flex w-full h-16 px-4">
        <h1 class="my-auto text-4xl font-bold text-white">Voodoo-Developer</h1>
      </div>
    </aside>
    <main class="z-10 w-full pb-16 overflow-y-auto bg-white md:mt-0 md:border-r-0 md:w-1/2 md:ml-auto md:z-0">
      <!-- <VdooNavbar :items="links" /> -->
      <div class="px-6 pt-12 pb-4 md:px-12">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import VdooNavbar from "~/components/navigation/VdooNavbar.vue";

export default {
  name: "pages",
  components: { VdooNavbar },
  data() {
    return {
      drawerOpen: false,
      links: [
        {label: "Home", link: "/" },
        {label: "About", link: "/about" }
      ]
    };
  },
  mouunted() {
    this.$nextTick(() => {
      this.windowWidth = window.innerWidth;
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    });
  },
  computed: {
    isTouch: function() {
      if (this.windowWidth <= 960) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style scoped>
aside {
  @media (min-width: theme('screens.md')) {
    border-top-right-radius: 2.5rem;
    border-bottom-right-radius: 2.5rem;
  }
  background-position: center;
  background-size: contain;
  background: url("https://images.unsplash.com/photo-1545557800-d48e509b1c27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80");
}
main {
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease-out;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-20%);
  opacity: 0;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
main {
  height: calc(100vh - 4rem);
  @screen md {
    @apply h-screen;
  }
}
body {
    @apply bg-white;
}
body,
html {
    height: 100vh;
}
html {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Fira Code', monospace;
}
</style>
