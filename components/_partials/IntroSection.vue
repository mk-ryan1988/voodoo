<template>
    <div class="landing-img relative grid stack overflow-hidden w-full h-full">
        <div class="w-full h-full z-20 p-8 lg:px-16 lg:py-8">
            <div class="ma-0 lg:mt-32">
                <h2 class="text-4xl text-white font-bold mb-4 text-left md:text-6xl">
                    Hi,
                    <br/>
                    Im Mark Ryan
                </h2>
                <h3 class="text-left text-white font-body text-1xl font-xbold mb-8 md:text-3xl md:font-normal">
                    Full-Stack Developer | Web Maker
                </h3>
                <div class="text-left mb-4">
                    <button class="p-3 text-white bg-gray-100 bg-opacity-60 rounded-3xl focus:outline-none focus:ring focus:border-white blur-lg">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
        <div class="w-full h-full pointer-events-none">
            <img
                alt="gradient background with abstract code image"
                :src="require('~/assets/code-bg-400x400.png')"
                class="w-full h-full md:hidden"
            >
            <img
                alt="gradient background with abstract code image"
                :src="require('~/assets/code-bg-1024x500.png')"
                class="w-auto h-auto hidden md:block lg:hidden"
            >
            <img
                alt="gradient background with abstract code image"
                :src="require('~/assets/code-bg-800x1080.png')"
                class="w-auto h-full hidden lg:block"
            >
        </div>
    </div>
</template>

<script lang="ts">
import VbaseIcon from '~/components/VbaseIcon.vue';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'IntroSection' as string,
  components: {
      VbaseIcon
  }
});
</script>
<style lang="postcss" scoped>
button {
    background-blend-mode: luminosity;
}
</style>

