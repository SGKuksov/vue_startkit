'use strict';

// Требует node.js и пакета mkdirp
// Вызов командой node createVue FileName

const fs = require('fs');                // будем работать с файловой системой
const mkdirp = require('mkdirp');        // зависимость, должна быть установлена (см. описание выше)

let blockName = process.argv[2];          // получим имя блока
let defaultExtensions = ['vue']; // расширения по умолчанию
let extensions = uniqueArray(defaultExtensions.concat(process.argv.slice(3)));  // добавим введенные при вызове расширения (если есть)

// Если есть имя блока
if(blockName) {

  let dirPath = './src/components/'; // полный путь к создаваемой папке блока
  mkdirp(dirPath, function(err){ // создаем

    // Если какая-то ошибка — покажем
    if(err) {
      console.error('Отмена операции: ' + err);
    }

    // Нет ошибки, поехали!
    else {
      console.log('Создание папки ' + dirPath + ' (создана, если ещё не существует)');

      // Обходим массив расширений и создаем файлы, если они еще не созданы
      extensions.forEach(function(extention){

        let filePath = dirPath + blockName + '.' + extention; // полный путь к создаваемому файлу
        let fileContent = `
<template>
  <div class="${blockName}">
    <h1 class="${blockName}__title">
      Hello, ${blockName}
    </h1>
    <h2 class="${blockName}__subtitle">
      I'm data: {{ dataTitle }}
    </h2>
    <p class="${blockName}__text">
      I'm props: {{ msg }}
    </p>
    <span class="${blockName}__like">
      I'm computed: {{ fixedLikes }}
    </span>
    <button class="${blockName}__btn"
            @click="${blockName}Event">
      Нажми на кнопку
    </button>
  </div>
</template>

<script>
// import axios from 'axios';               // Подключение axios
// import _ from 'lodash'                   // Подключение lodash

// @ is an alias to /src
// import ${blockName} from '@/components/${blockName}.vue' // Подключение компонентов

// <${blockName} 
//   msg="Welcome to Your Vue.js App"       // Входящий параметр msg - статичная строка
//   :title="someTitle"                     // Входящий параметр title - переменная со строкой
//   :likes="countLikes"                    // Входящий параметр likes - переменная со числом или можно передать число
//   :isPublished="false"                   // Указание входного параметра без значения будет означать true
//   :commentIds="[234, 266, 273]"          // Входящий параметр commentIds - массив или можно передать переменной
//   :author="{key: 'val', key1: 'val1'}"   // Входящий параметр author - объект или можно передать переменной
//   @${blockName}-event="someEventFunction"// Исходящее событие с передачей параметра this.dataEvent
//   :is="currentTabComponent"              // Динамическое переключение компонентов
// />

export default {
  name: '${blockName}',
  // inheritAttrs: false,                   // Запрет на наследование атрибутов. v-bind="$attrs" вы можете вручную определять к какому элементу должны применяться атрибуты (подробнее: https://clck.ru/EBfJv)
  components: {
    // ${blockName}                         // Регистрация компонентов
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
    ${blockName}Event() {
      this.$emit('${blockName}-event', this.dataEvent)
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
  .${blockName} {

    &__title {}
    &__subtitle {}
    &__text {}
    &__like {}
    &__btn {}
  }
</style>`; // будущий контент файла

        let fileCreateMsg = ''; // будущее сообщение в консоли при создании файла

        // Создаем файл, если он еще не существует
        if(fileExist(filePath) === false && extention !== 'img') {
          fs.writeFile(filePath, fileContent, function(err) {
            if(err) {
              return console.log('Файл НЕ создан: ' + err);
            }
            console.log('Файл создан: ' + filePath);
            if(fileCreateMsg) {
              console.warn(fileCreateMsg);
            }
          });
        }
      });
    }
  });
}
else {
  console.log('Отмена операции: не указан блок');
}

// Оставить в массиве только уникальные значения (убрать повторы)
function uniqueArray(arr) {
  var objectTemp = {};
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    objectTemp[str] = true; // запомнить строку в виде свойства объекта
  }
  return Object.keys(objectTemp);
}

// Проверка существования файла
function fileExist(path) {
  const fs = require('fs');
  try {
    fs.statSync(path);
  } catch(err) {
    return !(err && err.code === 'ENOENT');
  }
}
