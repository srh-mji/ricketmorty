<template lang="html">

  <section class="card-episodes">
    <h1>Episodes</h1>
    <div v-for="episode in episodes" :key="episode">
     <p> {{episode.name}}</p>
    </div>
  </section>

</template>

<script lang="js">
import axios from 'axios';
  export default  {
    name: 'CardEpisodes',
    data () {
      return {
        episodes:[],
      }
    },
    mounted () {
      axios.get('https://rickandmortyapi.com/api/episode')
      .then(res => {
        this.episodes = res.data.results;
        console.log(this.episodes)
      })
      .catch(err => {
       console.log(err);
      })
    },
}


</script>

<style scoped lang="scss">
  .card-episodes {

  }
</style>
