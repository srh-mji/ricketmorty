<template>

  <div class="card-episodes">
    <div class="flex" v-for="episode in episodes" :key="episode">
      <article class="cardEpisode">
        <div>
          <!-- url/img? -->
        </div>
        <div class="cardEpisode_Content">
          <div class="section">
            <h2>{{episode.name}}</h2>
            <span class="episode">{{episode.episode}}</span>
          </div>
          <div class="section">
            <span class="text-gray">Épisode sorti le:</span>
            <span>{{episode.air_date}}</span>
          </div>
        </div>
      </article>
    </div>
  </div>

</template>

<script>
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

<style scoped>
  .card-episodes {
    background-color:#24282F;
  }
  .flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .cardEpisode {
    width: 600px;
    height: 220px;
    display: flex;
    background: rgb(60, 62, 68);
    border-radius: 10px;
    margin: 12px;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px;
  }
</style>
