<template>
  <div class="home">
    <Header/>
    <HomePage/>
    <CardCharacters/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import HomePage from '@/components/HomePage.vue';
import CardCharacters from '@/components/CardCharacters.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Characters',
  components: {
    Header,
    HomePage,
    CardCharacters,
    Footer
  }
}
</script>