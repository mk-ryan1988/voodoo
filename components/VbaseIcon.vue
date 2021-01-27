<template>
    <div :class="iconColor" aria-hidden="true" v-html="require(`~/assets/icons/${iconName}.svg?raw`)" ref="iconRef"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';

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
    },
    width: {
      type: String,
      default: '24'
    },
    height: {
      type: String,
      default: '24'
    },
  },
  setup(props) {
    const iconRef = ref(null) as any;

    onMounted(() => {
      // iconRef.value.firstChild.classList.add('stroke-current', 'fill-current');
      iconRef.value.firstChild.setAttribute('width', props.width);
      iconRef.value.firstChild.setAttribute('height', props.height);
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
