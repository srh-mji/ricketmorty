<template>
    <div class="card-locations">
    <div class="flex">
      <div  class="cardLocationVfor" v-for="location in locations" :key="location">
      <article class="cardLocation">
        <div class="cardLocation_Content">
          <div class="section">
           <span class="text-gray">Lieu</span>
           <h2>{{location.name}}</h2>
           <hr>
           <div class="section">
            <span class="text-gray">Type de lieu: <br> </span>
            <span class="type">{{location.type}}</span>
          </div>
           <div class="section">
            <span class="text-gray">Dimension où est situé le lieu: <br> </span>
            <span>{{location.dimension}}</span>
          </div>
        </div>
        </div>
      </article>
    </div>
    </div>
  </div>
</template>

<script>
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

<style scoped>
  .card-locations {
    background-color:#24282F;
  }
  .flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width:1600px;
    margin:auto;
  }
  .cardLocation {
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
  .cardLocation_Content {
    padding-top:15px;
    padding-left:20px;
  }
  @media (max-width: 560px) {
    .cardLocation {
    width:320px;
    height: 240px;
    margin:0;
    margin-top:20px;
    margin-bottom:20px;

  }
  .cardLocationVfor{
    width:320px;
  }

  hr {
    width:200px;
    margin:0;
    margin-top:10px;
    margin-bottom:10px;
  }
  }
</style>
