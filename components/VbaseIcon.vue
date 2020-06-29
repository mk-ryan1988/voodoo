<template>
    <div :class="iconColor" v-html="require(`~/assets/icons/${iconName}.svg?raw`)" ref="iconRef"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'VbaseIcon' as string,
  props: {
    iconName: {
      type: String,
      required: true
    },
    iconColor: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const iconRef = ref(null) as any;

    onMounted(() => {
      iconRef.value.firstChild.classList.add('stroke-current', 'fill-current');
    })

    return {
      iconRef
    };
  },
});
</script>

<style lang="postcss" scopped>
  img.svg {
    fill: theme('colors.white');
  }
</style>
