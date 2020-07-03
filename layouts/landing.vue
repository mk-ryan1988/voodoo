<template>
    <main class="container h-full">
      <div class="flex flex-col justify-between p-8 md:fixed md:h-screen md:w-1/2 lg:py-16 lg:pl-16 md:pr-0">
        <introSection />
      </div>
      <div id="socialBarContainer" class="fixed bottom-0 z-30 mb-3 px-2 rounded w-full transform transition ease-out duration-100 md:hidden">
        <VdooSocialbar id="socialbar-mobile" @toggleDark="toggleDark" />
      </div>
      <div class="p-8 lg:py-16 lg:pr-10 md:w-1/2 md:pl-0 md:absolute md:top md:right-0">
        <nuxt />
      </div>
    </main>
</template>

<script>
import VdooSocialbar from '~/components/VdooSocialbar.vue'
import IntroSection from '~/components/section/IntoSection.vue'

export default {
  name: 'landing',
  components: { IntroSection, VdooSocialbar },
  data() {
    return {
      drawerOpen: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.windowWidth = window.innerWidth
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    })
  },
  computed: {
    isTouch: function() {
      if (this.windowWidth <= 960) {
        return true
      }
      return false
    },
  },
  methods: {
    getLocalDarkMode() {
      if (process.browser) {
        const getLocalDarkMode = localStorage.getItem('dark_mode');
        if (typeof getLocalDarkMode !== 'string') {
          this.setLocalDarkMode(this.$darkMode);
        } else {
          const value = getLocalDarkMode === 'true' ? true : false;
          this.$darkMode = value;
          this.setBodyClass();
        }
      }
    },
    setBodyClass() {
      let bodyCssClass = 'dark';
      if (!this.$darkMode) bodyCssClass = 'light';
      document.body.className = bodyCssClass;
    },
    setLocalDarkMode(darkMode) {
      if (process.browser) {
        const value = darkMode ? 'true' : 'false';
        localStorage.setItem('dark_mode', value.toString());
      }
    },
    toggleDark() {
      this.$darkMode = !this.$darkMode;
      this.setLocalDarkMode(this.$darkMode);
      this.setBodyClass();
    },
  },
  created() {
    this.getLocalDarkMode();
  }
}
</script>

<style lang="postcss">
html {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  @apply h-screen w-screen bg-gray-700 text-white;

  h1,h2,h3,h4,h5,h6 {
    @apply text-white;
    font-family: "Space Mono", monospace, -apple-system, BlinkMacSystemFont, sans-serif;
  }
}

@media (prefers-color-scheme: light) {
  @apply bg-gray-100 text-gray-900;

  h1,h2,h3,h4,h5,h6 {
    @apply text-gray-900;
  }
}
body.light {
  @apply bg-gray-100 text-gray-900;

  h1,h2,h3,h4,h5,h6 {
    @apply text-gray-900;
  }
}

.pattern-dots-md {
    @apply overflow-visible text-indigo-700 p-10;
    max-width: 50% !important;
    background-image: radial-gradient(currentColor 1px, transparent 1px);
    background-size: calc(10 * 1px) calc(10 * 1px);

    @screen md {
      max-width: 20% !important;
    }
}

.grid.stack > * {
    grid-column: 1;
    grid-row: 1;
}
#__nuxt {
  @apply h-full;
}
#__layout {
  @apply h-full;
}
</style>
