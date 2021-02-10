<template>
  <div class="flex flex-col justify-between m-auto min-h-full">
      <VdooTitle origin="top">
        <div class="flex items-center justify-center">
          <div class="text-center p-8 my-8 md:my-12 md:mt-32">
            <header>
              <h1 class="stack text-4xl text-white font-bold mb-2">
                  {{ article.title }}
              </h1>
              <div class="text-white">
                {{ article.date }}
                <span class="text-xs mx-1">•</span>
                {{ article.length }}
              </div>
            </header>
          </div>
        </div>
      </VdooTitle>

      <main class="px-6 mt-6 lg:mt-12 sm:px-8">
        <article class="min-w-full prose lg:prose-lg">
          <nuxt-content :document="article" />
        </article>
      </main>

      <VdooBlogNav :prev="prev" :next="next" />
  </div>
</template>

<script>
import VdooBlogNav from '~/components/navigation/VdooBlogNav.vue';
import VdooTitle from '~/components/card/VdooTitle.vue'
import VbaseGlass from '~/components/glass/VbaseGlass.vue';

export default {
    name: 'Blog',
    layout: 'blog',
    transition: {
      name: 'slide-fade',
      mode: 'out-in',
    },
    components: {
      VdooBlogNav,
      VdooTitle,
      VbaseGlass,
    },
    async asyncData ({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return {
        article,
        prev,
        next
      }
    },
    head () {
      return {
        title: 'Voodoo - ' + this.article.title,
        meta: [
          { hid: 'blog', name: this.article.title, content: this.article.description }
        ]
      }
    },
}
</script>
<style lang="postcss">
  .nuxt-content {
    & pre {
      @apply rounded bg-gray-900;
    }
    & img {
      @apply shadow-lg rounded;
    }
  }
  hr {
    @apply opacity-50 my-3;
  }
</style>
