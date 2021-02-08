<template>
  <div class="lg:text-center mt-4 mb-20 md:mt-28 md:mb-32">
    <VdooSubtitle>
      About me
    </VdooSubtitle>

    <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
      I believe in making beautiful UIs and APIs
    </p>
    <p class="mt-4 max-w-2xl text-xl lg:mx-auto">
      As a person and developer I sweat the small stuff and I belive it's these micro decisions that help me when I'm making intuative APIs or helpful UIs.
      This one was built to showcase some things and to have a bit of a playground, enjoy!
    </p>
  </div>
</template>

<script>
import VdooSubtitle from '~/components/VdooSubtitle.vue';

export default {
  name: 'AboutSection',
  components: {
    VdooSubtitle,
  }
}
</script>
