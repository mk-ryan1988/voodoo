<template>
  <nav class="w-full hidden blur-xl z-50 md:block md:fixed md:top-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center h-16 md:justify-between">
        <div class="flex items-center">
            <div class="flex-shrink-0">
              <nuxt-link to="/" class="inline-flex items-center">
                <h1 class="font-bold text-2xl">Voodoo Dev</h1>
              </nuxt-link>
            </div>
        </div>
        <div class="hidden sm:ml-6 sm:block">
            <VdooSocialbar id="socialbar-desktop" :inline="true" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
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
  setup() {
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
    }
  }
});
</script>
<style lang="postcss" scoped>
  nav {
    background: linear-gradient(135deg, var(--body) 2.91%, rgba(var(--body), 0.2) 101.26%);
  }
</style>
