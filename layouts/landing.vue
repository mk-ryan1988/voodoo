<template>
    <main class="w-full h-full">
      <div class="flex flex-col justify-between p-8 lg:fixed lg:h-screen lg:w-1/2 lg:pr-0 xl:py-20 xl:pl-40">
        <introSection />
        <VdooSocialbar id="socialbar-desktop" @toggleDark="toggleTheme" class="hidden md:flex" />
      </div>
      <div id="socialBarContainer" class="fixed bottom-0 z-30 mb-3 px-2 rounded w-full transform transition ease-out duration-100 md:hidden">
        <VdooSocialbar id="socialbar-mobile" @toggleDark="toggleTheme" />
      </div>
      <div class="p-8 lg:w-1/2 lg:pl-0 lg:absolute lg:top lg:right-0 xl:py-20 xl:pr-40">
        <nuxt />
      </div>
    </main>
</template>

<script lang="ts">
import VdooSocialbar from '~/components/VdooSocialbar.vue'
import IntroSection from '~/components/section/IntoSection.vue'
import { defineComponent, reactive, onMounted, ref } from '@vue/composition-api'
import useTheme from '~/utilities/theme.ts';

export default defineComponent({
  name: 'landing' as string,
  components: {
    IntroSection,
    VdooSocialbar,
  },
  setup(props, context: any) {
    const { setCssVariables, setInitialTheme } = useTheme();

    const toggleTheme = (isDarkMode: boolean) => {

      context.root.$darkMode = !context.root.$darkMode;
      let activeTheme = context.root.$darkMode ? 'dark' : 'light';
      localStorage.setItem('color_theme', activeTheme);
      setCssVariables(activeTheme);
    };

    setInitialTheme();

    return {
      toggleTheme,
    }
  }
});
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
  @apply h-screen w-screen bg-body text-copy;

  h1,h2,h3,h4,h5,h6 {
    @apply text-copy;
    font-family: "Space Mono", monospace, -apple-system, BlinkMacSystemFont, sans-serif;
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
