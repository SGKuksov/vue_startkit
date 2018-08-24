
<template>
  <div class="test">
    <h1 class="test__title">{{ title }}</h1>
    <p class="test__text">I'm props: {{ msg }}</p>
  </div>
</template>

<script>
// import axios from 'axios'; // Подключение axios
// import _ from 'lodash' // Подключение lodash
// @ is an alias to /src
// import test from '@/components/test.vue' // Подключение компонентов

export default {
  name: 'test',
  components: {
    // test // Регистрация компонентов
  },
  props: {
    msg: String
  },
  data () {
    return {
      info: null,
      title: 'Hello, test',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .test {

    &__title {}
    &__text {}
  }
</style>