<template>
  <div :class="computedStyles">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'VbaseCard' as string,
  props: {
    color: {
      type: String,
      required: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
    setup(props) {
    const computedStyles = computed(() => {
      let styles = [];
      if (!props.flat) styles.push('shadow');
      if (!props.color) styles.push('vbaseCard');
      if (props.color) styles.push(props.color);
      return styles;
    })
    // expose to template
    return {
      computedStyles
    }
  },
});
</script>

<style lang="postcss">
.vbaseCard {
   @apply overflow-hidden rounded-sm bg-gray-900;
}

body.light {
  & .vbaseCard {
    @apply bg-white;
  }
}

@media (prefers-color-scheme: light) {
  .vbaseCard {
    @apply bg-white;
  }
}
</style>
