<template>
  <div class="flex flex-col justify-between m-auto min-h-full">
      <VdooTitle
        meshBg
        origin="top"
        class="px-4"
      >
        <div class="flex items-center justify-center">
          <div class="text-center p-4 my-4 md:my-12 md:mt-32">
            <header class="glass p-8">
              <h1 class="text-4xl text-white font-bold mb-2">
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
        <article class="min-w-full prose dark:prose-dark lg:prose-lg">
          <nuxt-content :document="article" />
        </article>
      </main>

      <VdooBlogNav :prev="prev" :next="next" />
  </div>
</template>

<script>
import VdooBlogNav from '~/components/navigation/VdooBlogNav.vue';
import VdooTitle from '~/components/card/VdooTitle.vue'

export default {
    name: 'Blog',
    layout: 'blog',
    transition: {
      name: 'slide-fade',
      mode: 'out-in',
    },
    head() {
      return {
        title: 'Hey Mark - ' + this.article.title,
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: this.article.description,
            },
            {
                hid: 'og:title',
                name: 'og:title',
                content: this.article.title,
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: this.article.description,
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: `https://mkryan.dev/blog/${this.article.slug}`,
            },
            ...(this.article.thumbnail ? [{
                hid: 'og:image',
                property: 'og:image',
                content: this.article.thumbnail,
            }] : []),
        ],
      }
    },
    components: {
      VdooBlogNav,
      VdooTitle,
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
    data() {
      return {
        article: null,
      }
    },
}
</script>
<style lang="postcss">
  .nuxt-content {
    & pre {
      @apply rounded bg-gray-800;
    }
    & img {
      @apply shadow-lg rounded;
    }
  }
  hr {
    @apply opacity-50 my-3;
  }
</style>
