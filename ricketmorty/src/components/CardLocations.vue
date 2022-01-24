<template>
    <div class="card-locations">
    <div class="flex" v-for="location in locations" :key="location">
      <article class="cardLocation">
        <div class="cardLocation_Content">
          <div class="section">
            <h2>{{location.name}}</h2>
            <span class="type">{{location.type}}</span>
          </div>
          <div class="section">
            <span class="text-gray">Dimension où est situé le lieu:</span>
            <span>{{location.dimension}}</span>
          </div>
        </div>
      </article>
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
  }
  .cardLocation {
    width: 600px;
    height: 220px;
    display: flex;
    background: rgb(60, 62, 68);
    border-radius: 10px;
    margin: 12px;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px;
  }
</style>
