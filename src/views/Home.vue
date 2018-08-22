<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <h1>Home</h1>
    <h2>{{ msg }}</h2>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="btn">button</div>
    <div class="btn">button</div>
    <div class="btn">button</div>
    <div class="btn">button</div>
    <div class="btn">button</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
</style>
