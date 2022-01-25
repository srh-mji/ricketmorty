<template>
  <div class="home">
    <Header/>
    <HomePage/>
    <CardResidents/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import HomePage from '@/components/HomePage.vue';
import CardResidents from '@/components/CardResidents.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Residents',
  components: {
    Header,
    HomePage,
    CardResidents,
    Footer
  }
}
</script>