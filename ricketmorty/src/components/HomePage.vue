<template lang="html">

  <section class="home">
    <h1>home Component</h1>
  </section>

</template>

<script lang="js">
import axios from 'axios';

  export default  {
    name: 'HomePage',
    props: [],
    mounted () {
      axios.get('https://rickandmortyapi.com/api/location/3')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
       console.log(err);
      })
    },
    data () {
      return {

      }
    },
    methods: {
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .home {

  }
</style>
