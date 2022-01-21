<template lang="html">
  <section class="card-locations">
      <h1>Lieux</h1>
      <div v-for="location in locations" :key="location">
      <p> {{location.name}}</p>
      </div>
    </section>
</template>

<script lang="js">
import axios from 'axios';
  export default  {
    name: 'CardLocations',
    data () {
      return {
        locations:[],
      }
    },
    mounted () {
      axios.get('https://rickandmortyapi.com/api/location')
      .then(res => {
        this.locations = res.data.results;
        console.log(this.locations)
      })
      .catch(err => {
       console.log(err);
      })
    },
}


</script>

<style scoped lang="scss">
  .card-locations {

  }
</style>
