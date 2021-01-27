<template functional>
  <div class="mb-32">
    <VdooDescList
      class="mb-10"
    >
      <template  slot="icon">
        <VbaseIcon
          icon-name="color-swatch"
        />
      </template>
      <template  slot="title">
        For Front-end magic
      </template>
      <template  slot="description">
        I reside in two camps <a class="text-green-600 hover:underline" href="https://v3.vuejs.org/" target="_blank">Vue.js</a> and <a class="text-blue-600 hover:underline" href="https://reactjs.org/" target="_blank">React</a>. I enjoy the developer experience of the Vue and it the tool I am the most proficient in. However React has served me well in multiple projects and it's flexibility and large eco system is a plus.
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
        The majorty of my exerience is in PHP and with the <a class="text-red-600 hover:underline" href="https://laravel.com/" target="_blank">Laravel</a> framework. Without it I would be far less efficent, the framework has so many gems that I would sorely miss if I didnt use it.
      </template>
    </VdooDescList>

    <VdooDescList
      class="mb-10"
    >
      <template  slot="icon">
        <VbaseIcon
          icon-name="code"
        />
      </template>
      <template  slot="title">
        For everything else...
      </template>
      <template  slot="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
      </template>
    </VdooDescList>
  </div>
</template>

<script>
import VbaseIcon from '../VbaseIcon.vue'
import VdooDescList from '../VdooDescList.vue'

export default {
  name: 'TechSection',
  components: { VdooDescList, VbaseIcon },
}
</script>
