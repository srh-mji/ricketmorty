<template>

<div class="card-characters flex">
    <div class="cardCharacterVfor" v-for="character in characters" :key="character">
      <article class="cardCharacter">
        <!-- <div>
          <img :src="character.image" >
        </div>
        <div class="cardCharacter_Content">
          <div class="section">
            <h2>{{character.name}}</h2>
            <div class="status">
              <span v-if="character.status == 'Alive'" class="status_icon alive"></span>
              <span v-if="character.status == 'Dead'" class="status_icon dead"></span>
              <span v-if="character.status == 'unknown'" class="status_icon unknown"></span>
              <div class="section">
                <span>
                  {{character.status}} - {{character.gender}} 
                </span>
            </div>
              </div>
            <span class="text-gray">What species: <br> </span>
            <span>{{character.species}} </span>
          </div>
          <div class="section">
            <span class="text-gray">Last known location: <br> </span>
            <span>{{character.location.name}}</span>
          </div>
        </div> -->
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
      axios.get('https://rickandmortyapi.com/api/location/2')
      .then(res => {
        this.characters = res.data.residents;
        console.log(this.characters)
      })
      .catch(err => {
       console.log(err);
      })
    }
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
  .status {
    display: flex;
    align-items: center;
    
  }
  .cardCharacter {
    max-width: 600px;
    width:500px;
    height: 220px;
    display: flex;
    background: rgb(60, 62, 68);
    border-radius: 10px;
    margin: 12px;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px;
    color: white;
    font-weight: 600;
  }
  .status_icon{
    display: flex;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    padding: 2px;
    margin-right: 5px;
  }
  .alive{
    background-color: #8F9F5F;
  }

  .dead {
    background-color: #D63D2E;
  }
  .unknown {
    background-color: lightgray;
  }
  img {
    height: 100%;
    margin: 0px;
    border-radius: 10px 0px 0px 10px;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    object-position: center center;
    object-fit: cover;
  }
  .text-gray {
    color: rgb(158, 158, 158);
  }

  .section {
    line-height: 28px;
  }
  h2 {
    margin:0;
    font-size:28px
  }
  .cardCharacter_Content {
    padding-top:15px;
    padding-left:20px;
  }

@media (max-width: 560px) {
   .cardCharacter {
    display: block;
    width:320px;
    height: 420px;
    margin:0;
    margin-top:20px;
    margin-bottom:20px;
  }
   .cardCharacterVfor{
    width:320px;
  }
  img{
    width: 100%;
    height: 200px;
    object-fit: cover;

    border-radius: 10px 10px 0px 0px;
  }
}
</style>
