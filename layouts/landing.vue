<template>
  <div class="min-h-screen w-screen flex flex-col md:flex-row">
    <aside class="w-full pb-10 bg-gray-700 md:pb-0 md:h-screen md:fixed md:w-1/2 z-0 md:z-10">
      <div class="px-4 flex h-16 w-full">
        <h1 class="text-white text-4xl font-bold my-auto">Vuedoo</h1>
      </div>
    </aside>
    <main class="-mt-10 h-full w-full bg-white md:mt-0 md:border-r-0 md:w-1/2 md:ml-auto z-10 md:z-0">
      <nav class="px-4 h-16 w-full flex justify-between align-between">
        <button
          type="button"
          id="sidebar-open"
          class="px-4 text-gray-900 focus:outline-none focus:text-gray-700"
        >
          <svg
            class="fill-current w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
        <ul class="flex items-center">
          <li
            v-for="(item, index) in links"
            :key="'nav-link-' + index"
            class="px-4"
          >
            <nuxt-link class="pb-1 rounded-l rounded-r" :to="item.link">
              {{ item.label }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="p-8">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar.vue";
import SideBar from "~/components/SideBar.vue";

export default {
  name: "landing",
  components: { TopBar, SideBar },
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

<style>
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
.nuxt-link-active.nuxt-link-exact-active {
  @apply border-b-4 border-gray-800;
}
</style>
