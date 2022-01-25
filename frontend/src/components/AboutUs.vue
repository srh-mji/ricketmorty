<template>
<div class="backgroundColor">
  <div class="about-us">
  <div class="about-usImage">
    <img src="../assets/apropos.jpg" alt="">
  </div>
  <div class="section">
    <h2>Projet API Rick et Morty</h2>
    <hr>
    
    <p> Projet réalisé par Sarah Majewski, grâce à l'API Rick et Morty. Le Front-End a été réalisé avec Vue.js.</p>
  </div>
</div>
</div>


</template>

<style scoped>
.backgroundColor {
    background-color:#24282F;
}
.about-us {
  padding-top:20px;
  height: 450px;
  color:white;
  display: flex;
  justify-content: space-evenly;
}

img {
  padding-top:30px;
  width:250px;
}
p {
  line-height: 30px;
  max-width:500px;
}
  @media (max-width: 900px) {
    .about-us {
      display: block;
      height: 100%;
      width:320px;
      margin: auto;
      padding-top:0;
    }
    .about-usImage, h2, hr, p {
        text-align: center;
  }
  hr {
      width:200px;
      /* margin:0;
      margin-top:10px;
      margin-bottom:10px; */
    }
    p {
      line-height: 20px;
    }
    .section {
      margin: 10px;
      padding-bottom: 10px;
      margin-bottom:0px;

    }
  }
</style>