<template>
  <div class="home">
    <Header/>
    <CardCharacters/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import CardCharacters from '@/components/CardCharacters.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Characters',
  components: {
    Header,
    CardCharacters,
    Footer
  }
}
</script>