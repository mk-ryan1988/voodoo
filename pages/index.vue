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
          <nuxt-link to="/blog/this-is-my-second">
            <VdooCard icon="code" title="blog post" flat >
              <template slot="heading">My first blog post</template>
              <template slot="content">
                <p>
                  Learning how to use @nuxt/content to create a blog.
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

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { technologies } from '@/utilities/technologies'
import VbaseCard from '~/components/card/VbaseCard.vue'
import VbaseIcon from '~/components/VbaseIcon.vue'
import VdooCard from '~/components/card/VdooCard.vue'
import VdooAvatar from '~/components/VdooAvatar.vue'
import VdooPolaroid from '~/components/card/VdooPolaroid.vue';

export default defineComponent({
  head () {
    return {
      title: 'Voodoo - Mark Ryan',
      meta: [
        { hid: 'about_me', name: 'about_me', content: 'Voodoo developer. A Short synopsis of me as a developer and a person.' }
      ]
    }
  },
  layout: 'landing' as string,
  transition: {
    name: 'slide-fade',
    mode: 'out-in',
  },
  components: {
    VbaseCard,
    VbaseIcon,
    VdooCard,
    VdooAvatar,
    VdooPolaroid
  },
  setup() {
    const polaroidSrc = 'https://images.unsplash.com/photo-1591881289894-84b06f017edc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1550&h=1550&q=80';
    const specialities = technologies
    return { polaroidSrc, specialities }
  },
})
</script>
