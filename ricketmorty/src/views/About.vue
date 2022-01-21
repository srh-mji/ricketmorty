<template>
  <div class="home">
    <Header/>
    <AboutUs/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import AboutUs from '@/components/AboutUs.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'About',
  components: {
    Header,
    AboutUs,
    Footer
  }
}
</script>
