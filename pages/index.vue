<template>
  <div class="flex flex-col m-auto relative lg:flex-row lg:h-screen lg:overflow-auto bg-body">
    <header class="flex items-center shadow-2xl rounded-b-lg mx-3 lg:text-center lg:mx-0 lg:rounded-b-none lg:rounded-r-lg lg:fixed lg:left-0 lg:w-5/12 ">
      <IntroSection />
    </header>
    <main class="lg:absolute lg:right-0 lg:w-7/12 lg:pl-16 lg:pr-16 mt-10">
      <section class="mb-16 px-8">
        <div class="flex justify-between items-center">
          <h2 class="mb-4 text-lg md:text-xl">Code and ramblings!</h2>
          <!-- <a href="">See All</a> -->
        </div>
          <nuxt-link v-for="post in articles" :key="post.slug" :to="'/blog/' + post.slug" >
            <VdooCard flat class="mb-3 transform hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-300" >
              <template slot="heading">{{post.title}}</template>
              <template slot="content">
                <p>
                  {{post.description}}
                </p>
              </template>
            </VdooCard>
          </nuxt-link>
      </section>
      <section class="mb-8 px-8">
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
      <div id="socialBarContainer" class="fixed bottom-0 z-30 my-3 px-2 rounded w-full transform transition ease-out duration-100 md:relative md:px-8">
        <VdooSocialbar id="socialbar-mobile" />
      </div>
    </main>
  </div>
</template>

<script>
import VbaseIcon from '~/components/VbaseIcon.vue'
import VdooAvatar from '~/components/VdooAvatar.vue'
import VdooCard from '~/components/card/VdooCard.vue'
import VbaseCard from '~/components/card/VbaseCard.vue'
import VdooPolaroid from '~/components/card/VdooPolaroid.vue';
import IntroSection from '~/components/section/IntroSection.vue'
import VdooSocialbar from '~/components/navigation/VdooSocialbar.vue';

export default {
  name: 'IndexView',
  layout: 'home',
  components: {
    VdooCard,
    VbaseIcon,
    VdooAvatar,
    IntroSection,
    VdooSocialbar
  },
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
};
</script>

<style lang="postcss" scoped>
  header {
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);

    @media (min-width: 1024px) {
        height: calc(100vh - 5rem);
        top: 2.5rem;
    }
  }

  .diagonal::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transform: skewY(3deg);
    transform-origin: 50% 0;
    outline: 1px solid transparent;
    backface-visibility: hidden;
    background-color: var(--body);
  }
  header {

  }
</style>
