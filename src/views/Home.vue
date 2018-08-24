<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <h1>This is an home page</h1>
    <h2>{{ msg }}</h2>
    <p>{{ info }}</p>
  </div>
</template>

<script>
import axios from 'axios';
// import _ from 'lodash'


export default {
  name: 'home',
  components: {

  },
  data () {
    return {
      info: null,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi))
      // .catch(error => console.log(error)); // обработка ошибок
  },
  created() {
    // console.log(this.$_.isEmpty(null));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
