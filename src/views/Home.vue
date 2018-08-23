<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <h1>Home</h1>
    <h2>{{ msg }}</h2>

    <p>{{ info }}</p>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="btn btn-primary">button</div>
    <div class="btn btn-primary">button</div>
    <div class="btn btn-primary">button</div>
    <div class="btn btn-primary">button</div>
    <div class="btn btn-primary">button</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';
import _ from 'lodash'


export default {
  name: 'home',
  components: {
    // HelloWorld
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
    console.log(this.$_.isEmpty(null));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
