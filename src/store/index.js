import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    info: '',
    posts: [],
    message: '',
  },
  actions: {
    LOAD_POST({ commit }) {
      const endpoint='https://jsonplaceholder.typicode.com/posts';
      let options = {
        params: {
          _start: 10,
          _limit: 15
        },
        headers: {
          'Content-Type': 'application/json'
        }
      };

      axios
        .get( endpoint, options)
        .then(response => {
          commit('GET_POST', response.data)
        })
        .catch(error => window.console.log(error)); // обработка ошибок
    },
  },
  mutations: {
    GET_POST: (state, posts) => {
      state.posts = posts
    },
  },
  getters: {

  },
  modules: {
    // The modules object provides a way to split your store in multiple stores, but allow them to all remain part of the store tree.
  },
});
