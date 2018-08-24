
<template>
  <div class="test3">
    <h1 class="test3__title">I'm data: {{ title }}</h1>
    <p class="test3__text">I'm props: {{ msg }}</p>
    <button @click="test3Event">
      Нажми на кнопку
    </button>
  </div>
</template>

<script>
// import axios from 'axios'; // Подключение axios
// import _ from 'lodash' // Подключение lodash

// @ is an alias to /src
// import test3 from '@/components/test3.vue' // Подключение компонентов
// <test3 
//   msg="Welcome to Your Vue.js App" // Входящий параметр msg
//   @test3-event="someEventFunction" // Исходящее событие с передачей параметра this.eventData
//   :is="currentTabComponent" // Динамическое переключение компонентов
// />

export default {
  name: 'test3',
  components: {
    // test3 // Регистрация компонентов
  },
  data () {
    return {
      info: null,
      title: 'Hello, test3',
      eventData: [], // в данном случае статичные данные которые вернуться из компонента
    }
  },
  props: {
    msg: String // Регистрация входящего параматра
  },
  methods: {
    test3Event: function () {
      this.$emit('test3-event', this.eventData)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .test3 {

    &__title {}
    &__text {}
  }
</style>