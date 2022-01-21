<template lang="html">

  <section class="card-characters">
    <h1>Personnages</h1>
    <div v-for="character in characters" :key="character">
     <p> {{character.name}}</p>
    </div>
  </section>

</template>

<script lang="js">
import axios from 'axios';
  export default  {
    name: 'CardCharacters',
        data () {
      return {
        characters:[],
      }
    },
     mounted () {
      axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        this.characters = res.data.results;
        console.log(this.characters)
      })
      .catch(err => {
       console.log(err);
      })
    },
}


</script>

<style scoped lang="scss">
  .card-characters {

  }
</style>
