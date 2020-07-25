<template>
  <nav class="container bg-body w-full">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center h-16 md:justify-between">
        <div class="flex items-center">
            <div class="flex-shrink-0">
              <nuxt-link to="/" class="inline-flex items-center">
                <h1 class="text-heading font-bold text-2xl">Voodoo Dev</h1>
              </nuxt-link>
            </div>
        </div>
        <div class="hidden sm:ml-6 sm:block">
            <VdooSocialbar @toggleDark="toggleTheme" :inline="true" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import useTheme from '~/utilities/theme.ts';
import VbaseIcon from '~/components/VbaseIcon.vue';
import VdooDropdown from '~/components/VdooDropdown.vue';
import VdooSocialbar from '~/components/navigation/VdooSocialbar.vue';
import { defineComponent, reactive, onMounted, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'VdooNavbar' as string,
  components: {
    VbaseIcon,
    VdooDropdown,
    VdooSocialbar
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

    const routes = [
      {
        name: 'Blog Posts',
        path: '/blogs',
      },
      {
        name: 'Snippets',
        path: '/snippets',
      }
    ];

    return {
      routes,
      toggleTheme,
    }
  }
});
</script>
