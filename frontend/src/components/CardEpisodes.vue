<template>

  <div class="card-episodes">
    <div class="flex">
      <div class="cardLocationVfor" v-for="episode in episodes" :key="episode">
      <article class="cardEpisode">
        <div class="cardEpisode_Content">
          <div class="section">
           <span class="text-gray">Épisode</span>
           <h2>{{episode.name}}</h2>
           <hr>
           <span class="episode text-gray">{{episode.episode}}</span>
           <div class="section">
            <span class="text-gray">Épisode sorti le: <br> </span>
            <span>{{episode.air_date}}</span>
          </div>
        </div>
        <router-link to="/"><span class="btn">Personnages aperçus</span></router-link>
        </div>
      </article>
    </div>
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
a {
  color: inherit;
  text-decoration: none;
}
 .card-episodes {
    background-color:#24282F;
  }
  .flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width:1600px;
    margin:auto;
  }
  .cardEpisode {
    max-width: 600px;
    width:600px;
    height: auto;
    padding-bottom:30px;
    display: flex;
    background: rgb(60, 62, 68);
    border-radius: 10px;
    margin: 12px;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px;
    color: white;
    font-weight: 600;
  }
  .text-gray {
    color: rgb(158, 158, 158);
  }

  .section {
    line-height: 28px;
    margin-bottom:20px;
  }
  h2 {
    margin:0;
    font-size:28px;
  }
  .cardEpisode_Content {
    padding-top:15px;
    padding-left:20px;
  }
   .btn {
    align-items: flex-end;
  border: 2px solid #F58217;
  background-color: #F58217;
  border-radius: 10px;
  padding: 10px;
  transition: background-color 0.3s ease;
}
.btn:hover{
  background-color: #FAB915;
  border: 2px solid #FAB915;
  color:white;
}
  hr {
    width:200px;
    margin:0;
    margin-top:10px;
    margin-bottom:10px;
  }
  @media (max-width: 620px) {
    .cardEpisode {
    width:320px;

    margin:0;
    margin-top:20px;
    margin-bottom:20px;
  }
  .cardEpisodeVfor{
    width:320px;
  }
  }
</style>
