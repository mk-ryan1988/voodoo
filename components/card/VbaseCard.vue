<template>
  <div :class="computedStyles">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api';

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
      let styles = [
        'overflow-hidden',
        'rounded-md',
        'bg-white',
        'dark:bg-gray-800',
        'dark:text-gray-400',
        'p-4'
      ];
      if (!props.flat) styles.push('shadow');
      if (!props.color) styles.push('vbaseCard');
      if (props.color) styles.push(props.color);
      return styles;
    })
    return {
      computedStyles
    }
  },
});
</script>
