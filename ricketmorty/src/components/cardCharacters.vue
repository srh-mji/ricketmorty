<template>

<div class="card-characters">
    <div class="flex" v-for="character in characters" :key="character">
      <article class="cardCharacter">
        <div>
          <p>{{character.image}}</p>
        </div>
        <div class="cardCharacter_Content">
          <div class="section">
            <h2>{{character.name}}</h2>
            <span class="status">{{character.status}}</span>
          </div>
          <div class="section">
            <span class="text-gray">Espèce</span>
            <span>{{character.species}}</span>
          </div>
          <div class="section">
            <span class="text-gray">Dernier lieu vu:</span>
            <span>{{character.location.name}}</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
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
    background-color:#24282F;
  }
  .flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .cardCharacter {
    width: 600px;
    height: 220px;
    display: flex;
    background: rgb(60, 62, 68);
    border-radius: 10px;
    margin: 12px;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px;
  }
</style>
