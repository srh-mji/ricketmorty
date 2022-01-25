<template>
  <div class="home">
    <Header/>
    <HomePage/>
    <CardEpisodes/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import HomePage from '@/components/HomePage.vue';
import CardEpisodes from '@/components/CardEpisodes.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    HomePage,
    CardEpisodes,
    Footer
  }
}
</script>
