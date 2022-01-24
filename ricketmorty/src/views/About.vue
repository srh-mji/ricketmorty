<template>
  <div class="home">
    <Header/>
    <HomePage/>
    <AboutUs/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import AboutUs from '@/components/AboutUs.vue';
import HomePage from '@/components/HomePage.vue';
import Footer from '@/components/Footer.vue';


export default {
  name: 'About',
  components: {
    Header,
    HomePage,
    AboutUs,
    Footer
  }
}
</script>
