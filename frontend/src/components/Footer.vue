<template>

   <footer class="footer">
        <nav>
            <ul>
                <li>
                   Rick et Morty API
                </li>
                <li>
                    Devenir partenaire
                </li>
                <li>
                    Mentions légales
                </li>
                <li>
                    <a href="mailto:test@test.com"> Contact</a>
                </li>
            </ul>
        </nav>
    </footer>

</template>

<script>

  export default  {
    name: 'Footer',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped>
  .footer {
     background-color:#202329;
    color: white;
    padding-bottom: 20px;
    padding-top: 20px;

  }
  ul {
        list-style: none;
        padding: 0;
         margin: auto;
        max-width: 400px;
        text-align: center;
    }
  li {
  padding: 5px;
  }
  a {
    color: white;
    text-decoration: none;
}
p {
  margin:0;
}
</style>
