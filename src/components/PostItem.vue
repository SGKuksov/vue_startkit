
<template>
  <article class="PostItem">
    <h2 class="PostItem__subtitle">
      {{ title }}
    </h2>

    <p class="PostItem__text">
      {{ msg }}
    </p>

    <span class="PostItem__like">
      Likes: {{ likes }}
    </span>
  </article>
</template>

<script>
// import axios from 'axios';               // Подключение axios
// import _ from 'lodash'                   // Подключение lodash

// @ is an alias to /src




export default {
  name: 'PostItem',
  // inheritAttrs: false,                   // Запрет на наследование атрибутов. v-bind="$attrs" вы можете вручную определять к какому элементу должны применяться атрибуты (подробнее: https://clck.ru/EBfJv)
  props: {                                  // Регистрация входящего параметра
    msg: String,
    title: String,
    likes: Number,
    // о валидации входных параметров можно узнать тут https://clck.ru/EBewF
  },
  data () {
    return {
      dataEvent: [],                        // Статичные данные которые вернуться из компонента
      dataTitle: this.propstitle,           // Входящие данные переданы во внутреннюю переменную компонента. 1й вариант Не изменяемости входящих данных
    }
  },
  methods: {
    PostItemEvent() {
      this.$emit('PostItem-event', this.dataEvent)
    }
  },
  computed: {
    fixedLikes() {                          // Входящие данные переданы в вычисляемое свойство компонента. 2й вариант Не изменяемости входящих данных
      return this.likes.toFixed(0)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .PostItem {
    width: 25%;
    padding: 10px;

    &__title {}
    &__subtitle {}
    &__text {}
    &__like {}
    &__btn {}
  }
</style>