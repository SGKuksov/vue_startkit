
<template>
  <div class="test1">
    <h1 class="test1__title">{{ title }}</h1>
    <p class="test1__text">I'm props: {{ msg }}</p>
  </div>
</template>

<script>
// import axios from 'axios'; // Подключение axios
// import _ from 'lodash' // Подключение lodash
// @ is an alias to /src
// import test1 from '@/components/test1.vue' // Подключение компонентов
// <test1 
//   msg="Welcome to Your Vue.js App" // Входящий параметр msg
//   v-on:test1-event="someEventFunction" // Исходящее событие с передачей параметра this.eventData
// />

export default {
  name: 'test1',
  components: {
    // test1 // Регистрация компонентов
  },
  data () {
    return {
      info: null,
      title: 'Hello, test1',
      eventData: [], // в данном случае статичные данные которые вернуться из компонента
    }
  },
  props: {
    msg: String // Регистрация входящего параматра
  },
  methods: {
    test1Event: function () {
      this.$emit('test1-event', this.eventData)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .test1 {

    &__title {}
    &__text {}
  }
</style>