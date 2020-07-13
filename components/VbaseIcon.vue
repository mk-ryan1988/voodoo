<template>
    <div :class="iconColor" aria-hidden="true" v-html="require(`~/assets/icons/${iconName}.svg?raw`)" ref="iconRef"></div>
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
      iconRef.value.firstChild.setAttribute('width', '24');
      iconRef.value.firstChild.setAttribute('height', '24');
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
