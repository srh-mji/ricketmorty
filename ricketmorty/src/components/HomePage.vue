<template>
<div class="homePage">
  <div class="homePage_div"></div>
  <div class="home">
  </div>
  <div class="homePage_title">
    <h1>Rick et Morty</h1>
  </div>
</div>
</template>

<script lang="js">

  export default  {
    name: 'HomePage',
}


</script>

<style scoped lang="scss">
  h1{
  margin:0;
  text-align: center;
  }
  .home {
    font-size: 40px;
    height: 300px;
    color: #202329;
    background-image: url(../assets/background.png);
    background-repeat: repeat;
    background-size: 1100px;
    }
    .homePage_title {
      background-color:#202329;
      color:white;
      padding:10px;
    }
     .homePage_div{
      width: 100%;
      height: 5px;
      background-color: #202329;
    }

@media (min-width: 1000px) {
  .home {
    background-size: 1950px;
  }
}
</style>
