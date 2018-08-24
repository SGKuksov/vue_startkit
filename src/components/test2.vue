
<template>
  <div class="test2">
    <h1 class="test2__title">{{ title }}</h1>
    <p class="test2__text">I'm props: {{ msg }}</p>
    <button v-on:click="test2Event">
      Нажми на кнопку
    </button>
  </div>
</template>

<script>
// import axios from 'axios'; // Подключение axios
// import _ from 'lodash' // Подключение lodash
// @ is an alias to /src
// import test2 from '@/components/test2.vue' // Подключение компонентов
// <test2 
//   msg="Welcome to Your Vue.js App" // Входящий параметр msg
//   v-on:test2-event="someEventFunction" // Исходящее событие с передачей параметра this.eventData
// />

export default {
  name: 'test2',
  components: {
    // test2 // Регистрация компонентов
  },
  data () {
    return {
      info: null,
      title: 'Hello, test2',
      eventData: [], // в данном случае статичные данные которые вернуться из компонента
    }
  },
  props: {
    msg: String // Регистрация входящего параматра
  },
  methods: {
    test2Event: function () {
      this.$emit('test2-event', this.eventData)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .test2 {

    &__title {}
    &__text {}
  }
</style>