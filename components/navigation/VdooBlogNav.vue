<template>
  <div class="flex justify-between mt-8 mb-6">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="inline-flex font-bold hover:text-heading hover:underline"
    >
      <VbaseIcon iconName="arrow-left" class="mr-2" />
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="inline-flex font-bold hover:text-heading hover:underline"
    >
      {{ next.title }}
      <VbaseIcon iconName="arrow-right" class="ml-2" />
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
import VbaseIcon from '~/components/VbaseIcon.vue';

export default {
  name: 'VdooBlogNav',
  components: { VbaseIcon },
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>
