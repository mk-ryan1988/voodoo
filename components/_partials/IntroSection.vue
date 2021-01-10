<template>
    <div class="relative grid stack overflow-hidden w-full h-full px-16 py-8">
        <div class="w-full h-full z-20">
            <div class="mt-32">
                <h2 class="text-4xl text-white font-xbold md:text-6xl md:font-semibold text-left">
                    Hi,
                    <br/>
                    Im Mark Ryan
                </h2>
                <h3 class="text-left text-white font-body text-2xl font-xbold md:text-3xl md:font-normal">
                    Full-Stack Developer | Web Maker
                </h3>
            </div>
        </div>
        <div class="blur-xs w-full h-full pointer-events-none z-10"></div>
        <div class="landing-img1 w-full h-full grid justify-items-end items-end pointer-events-none z-20 transform translate-x-40 translate-y-48">
            <img
                alt=""
                :src="require('~/assets/shapes.png')"
                style="width: 450; height: 450px;"
            >
        </div>
        <div class="landing-img1 w-full h-full grid justify-items-end pointer-events-none transform -rotate-12">
            <img
                alt=""
                :src="require('~/assets/rocket.png')"
                style="width: 450; height: 450px; margin-right: -176px; margin-top: 30px;"
            >
        </div>
        <div class="landing-img1 w-full h-full grid justify-items-start items-end pointer-events-none">
            <img
                alt=""
                :src="require('~/assets/play.png')"
                style="width: 450; height: 450px;"
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
<style lang="postcss">
.landing-img {
    background-image: url("~assets/1440-1080-icons.png");
    background-size: contain;
    background-clip: padding-box;
    background-position: center;
    background-repeat: no-repeat;
}
</style>

