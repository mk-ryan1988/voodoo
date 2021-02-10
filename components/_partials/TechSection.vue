<template>
  <div class="mb-32">
    <VdooDescList
      class="mb-10"
    >
      <template slot="icon">
        <VbaseIcon
          icon-name="color-swatch"
        />
      </template>
      <template  slot="title">
        For Front-end magic
      </template>
      <template  slot="description">
        I reside in two camps <a class="text-green-600" rel="noopener" href="https://v3.vuejs.org/" target="_blank">Vue.js</a> and <a class="text-blue-600" rel="noopener" href="https://reactjs.org/" target="_blank">React</a>.
        I enjoy the developer experience of the Vue and it's the tool I am the most proficient in. However React has served me well in multiple projects and it's flexibility and large eco system is a big plus.
        <br />
        For CSS, <a class="text-blue-600" rel="noopener" href="https://tailwindcss.com/" target="_blank">tailwindcss</a> is my go to tool! Utility first css allows you to create any design efficently without bloating the bundle.
      </template>
    </VdooDescList>

    <VdooDescList
      class="mb-10"
    >
      <template  slot="icon">
        <VbaseIcon
          icon-name="server"
        />
      </template>
      <template  slot="title">
        For Back-end systems
      </template>
      <template  slot="description">
        The majorty of my exerience is in PHP and with the <a class="text-red-600" rel="noopener" href="https://laravel.com/" target="_blank">Laravel</a> framework. Without it I would be far less efficent, the framework has so many gems that I would sorely miss if I didnt use it. I have also found <a class="text-yellow-600" rel="noopener" href="https://firebase.google.com/" target="_blank">Firebase</a> a usefull tool in the absence of a traditional back-end.
      </template>
    </VdooDescList>
  </div>
</template>

<script>
import VbaseIcon from '~/components/VbaseIcon.vue';
import VdooDescList from '../VdooDescList.vue';

export default {
  name: 'TechSection',
  components: {
    VbaseIcon,
    VdooDescList
  },
}
</script>
