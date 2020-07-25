<template>
  <div class="flex flex-col m-auto">
    <div class="hidden lg:flex flex-col">
      <VdooPolaroid
        class="z-20"
        transform="left"
        :img="polaroidSrc"
      />
      <VdooPolaroid
        class="-mt-40 mr-24 self-end z-10"
        transform="right"
        :img="polaroidSrc"
      />
    </div>
    <section class="mb-16 lg:mt-20 xl:mt-40">
        <h2 class="mb-4 text-lg md:text-xl">Just some code and ramblings!</h2>
          <nuxt-link v-for="(post, index) in articles" :key="index" :to="'/blog/' + post.slug">
            <VdooCard flat class="mb-3" >
              <template slot="heading">{{post.title}}</template>
              <template slot="content">
                <p>
                  {{post.description}}
                </p>
              </template>
            </VdooCard>
          </nuxt-link>
      </section>
      <section class="mb-0">
        <h2 class="mb-4 text-lg md:text-xl">What have I built?</h2>
        <VdooCard thumb="https://leaner-living.com/images/LEANER-LIVING-LOGO.png" flat class="mb-2">
          <template slot="heading">Fresh Start <span class="text-base font-md">with</span> Leaner-Living</template>
          <template slot="content">
            <p>
              A Progressive Web App built with a Vue.js frontend and Google's Firebase API.
              <br />
              This product aids personal trianers programming and managing one-2-one and online clients.
            </p>
          </template>
          <template slot="footer">
            <div><span>#vue.js</span> <span>#firebase</span></div>
            <a href="https://leaner-living.com/fresh-start/about" rel="noopener" target="_blank">
              <VbaseIcon iconName="external-link" />
              <span class="sr-only">View external link</span>
            </a>
          </template>
        </VdooCard>
      </section>
  </div>
</template>

<script>
import VbaseCard from '~/components/card/VbaseCard.vue'
import VbaseIcon from '~/components/VbaseIcon.vue'
import VdooCard from '~/components/card/VdooCard.vue'
import VdooAvatar from '~/components/VdooAvatar.vue'
import VdooPolaroid from '~/components/card/VdooPolaroid.vue';

export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'slug', 'description'])
      .sortBy('createdAt', 'desc')
      .fetch();

    return {
      articles
    }
  },
  head () {
    return {
      title: 'Voodoo - Mark Ryan',
      meta: [
        { hid: 'about_me', name: 'about_me', content: 'Voodoo developer. A Short synopsis of me as a developer and a person.' }
      ]
    }
  },
  layout: 'landing',
  transition: {
    name: 'slide-fade',
    mode: 'out-in',
  },
  components: {
    VdooCard,
    VbaseCard,
    VbaseIcon,
    VdooAvatar,
    VdooPolaroid
  },
  data() {
    return {
      polaroidSrc: 'https://images.unsplash.com/photo-1591881289894-84b06f017edc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1550&h=1550&q=80'
    }
  },
};
</script>
