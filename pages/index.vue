<template>
    <div class="h-screen w-1/2 m-auto">
      <BaseCard :img="bgImg" class="mb-3"/>
      <BaseCard :img="bgImg" class="mb-3"/>
      <BaseCard :img="bgImg" class="mb-3"/>
      <BaseCard :img="bgImg" class="mb-3"/>
      <BaseCard :img="bgImg" class="mb-3"/>
    </div>
</template>

<script>
import BaseCard from '~/components/BaseCard'
export default {
  layout: 'landing',
  transition: {
    name: "slide-fade",
    mode: "out-in"
  },
  components: {
    BaseCard
  },
  data() {
    return {
      bgImg: ''
    }
  },
};
</script>

<style>
</style>
