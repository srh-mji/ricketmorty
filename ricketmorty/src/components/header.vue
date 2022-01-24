<template>
<header class="header">
  <router-link to="/">  <img class="logo" src="../assets/ricketmorty.png" alt="Logo"></router-link>
    <nav role="dropdown-child">
       <ul id="menu">
        <li class="link link_Homepage"> <router-link to="/">  Accueil</router-link></li>
        <li class="link"> <router-link to="/characters">Personnages</router-link></li>
        <li class="link"><router-link to="/locations">Lieux</router-link></li>
        <li class="btn"> <router-link to="/about">À propos</router-link></li>
      </ul>
    </nav>
</header>
</template>

<script>

  export default  {
    name: 'Header'
}


</script>

<style scoped>
.header {
color: #202329;
font-size: 18px;
font-weight: bolder;
margin-left:10px;
display: flex;
justify-content: space-between;
align-items: center;
}

.logo {
max-height: 50px;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin-right: 30px;
  align-items: center;
}
li {
    margin-right: 30px;
}

.link a:hover{
  color:#F58217;
}

.btn {
  border: 2px solid #F58217;
  background-color: transparent;
  border-radius: 10px;
  padding: 10px;
  transition: background-color 0.3s ease;
}
.btn:hover{
  background-color: #F58217;
  color:white;
}
a {
  color: inherit;
  text-decoration: none;
}
i {
  display:none;
}

@media (max-width: 630px) {
  .header {
      font-size: 16px;
  }
  ul {
    margin-right:0;
  }
  li {
    margin-right: 10px;
}
.link_Homepage {
  display:none;
}
}
</style>
