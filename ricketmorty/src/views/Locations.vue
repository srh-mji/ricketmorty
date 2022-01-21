<template>
  <div class="locations">
    <Header/>
    <CardLocations/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import CardLocations from '@/components/CardLocations.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Locations',
  components: {
    Header,
    CardLocations,
    Footer
  }
}
</script>