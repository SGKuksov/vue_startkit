
<template>
  <div class="test">
    <h1 class="test__title">
      Hello, test
    </h1>
    <h2 class="test__subtitle">
      I'm data: {{ dataTitle }}
    </h2>
    <p class="test__text">
      I'm props: {{ msg }}
    </p>
    <span class="test__like">
      I'm computed: {{ fixedLikes }}
    </span>
    <button class="test__text"
            @click="testEvent">
      Нажми на кнопку
    </button>
  </div>
</template>

<script>
// import axios from 'axios';               // Подключение axios
// import _ from 'lodash'                   // Подключение lodash

// @ is an alias to /src
// import test from '@/components/test.vue' // Подключение компонентов

// <test 
//   msg="Welcome to Your Vue.js App"       // Входящий параметр msg - статичная строка
//   :title="someTitle"                     // Входящий параметр title - переменная со строкой
//   :likes="countLikes"                    // Входящий параметр likes - переменная со числом или можно передать число
//   :isPublished="false"                   // Указание входного параметра без значения будет означать true
//   :commentIds="[234, 266, 273]"          // Входящий параметр commentIds - массив или можно передать переменной
//   :author="{key: 'val', key1: 'val1'}"   // Входящий параметр author - объект или можно передать переменной
//   @test-event="someEventFunction"// Исходящее событие с передачей параметра this.dataEvent
//   :is="currentTabComponent"              // Динамическое переключение компонентов
// />

export default {
  name: 'test',
  // inheritAttrs: false,                   // Запрет на наследование атрибутов. v-bind="$attrs" вы можете вручную определять к какому элементу должны применяться атрибуты (подробнее: https://clck.ru/EBfJv)
  components: {
    // test                         // Регистрация компонентов
  },
  props: {                                  // Регистрация входящего параметра
    msg: String,
    propstitle: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    // о валидации входных параметров можно узнать тут https://clck.ru/EBewF
  },
  data () {
    return {
      dataEvent: [],                        // Статичные данные которые вернуться из компонента
      dataTitle: this.propstitle,           // Входящие данные переданы во внутреннюю переменную компонента. 1й вариант Не изменяемости входящих данных
    }
  },
  methods: {
    testEvent() {
      this.$emit('test-event', this.dataEvent)
    }
  },
  computed: {
    fixedLikes() {                          // Входящие данные переданы в вычисляемое свойство компонента. 2й вариант Не изменяемости входящих данных
      return this.likes.toFixed()
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .test {

    &__title {}
    &__subtitle {}
    &__text {}
    &__btn {}
  }
</style>