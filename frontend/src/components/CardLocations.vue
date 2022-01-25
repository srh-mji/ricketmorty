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
            <span class="type">{{location.type}} <br> </span>
            <span class="text-gray">Dimension où est situé le lieu: <br> </span>
            <span>{{location.dimension}}</span>
          </div>
        </div>
        <router-link to="/residents"><span class="btn">Habitants</span></router-link>
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
a {
  color: inherit;
  text-decoration: none;
}
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
  .cardLocation_Content {
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
  @media (max-width: 560px) {
    .cardLocation {
    width:320px;
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
