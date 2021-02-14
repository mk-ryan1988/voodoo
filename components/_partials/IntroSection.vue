<template>
    <div class="landing-img relative grid stack overflow-hidden w-full h-full">
        <div class="w-full h-full z-20 p-8 lg:px-16 lg:py-8">
            <div class="ma-0 lg:mt-8">
                <h2 class="text-4xl text-white font-bold mb-4 text-left md:text-6xl">
                    Hi,
                    <br/>
                    Im Mark Ryan
                </h2>
                <h3 class="text-left text-white font-body text-1xl font-xbold mb-8 md:text-3xl md:font-normal">
                    Full-Stack Developer | Web Maker
                </h3>
                <div class="text-left mb-4">
                    <a
                        href="mailto:mkryan1988@gmail.com?subject=Contact - website"
                        class="p-3 text-white bg-gray-100 bg-opacity-60 rounded-3xl focus:outline-none focus:ring focus:border-white blur-lg"
                    >
                        Get in touch
                    </a>
                </div>
            </div>
        </div>
        <div style="max-width: 750px;" class="pointer-events-none aspect-w-1 aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
            <img
                width="750"
                height="750"
                alt="gradient background with abstract code image"
                :src="require('~/assets/code-bg-750x750.svg')"
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

