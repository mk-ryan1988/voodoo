<template>
  <div class="glass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VbaseGlass'
}
</script>

<style lang="postcss">
  .glass {
    @apply rounded-md blur-md;
    background: linear-gradient(134.23deg, rgba(255, 255, 255, 0.6) 2.91%, rgba(255, 255, 255, 0.1) 101.26%);
  }
</style>
