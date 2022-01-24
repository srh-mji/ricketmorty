<template>
  <div class="locations">
    <Header/>
    <HomePage/>
    <CardLocations/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import CardLocations from '@/components/CardLocations.vue';
import HomePage from '@/components/HomePage.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Locations',
  components: {
    Header,
    HomePage,
    CardLocations,
    Footer
  }
}
</script>