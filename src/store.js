import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // https://medium.com/fullstackio/managing-state-in-vue-js-23a0352b1c87
    // State is simply an object that contains the properties that need to be shared within the application
    numbers: [1, 2, 3]
  },
  mutations: {
    // Mutations are functions responsible in directly mutating store state. 
    ADD_NUMBER(state, payload) {
      state.numbers.push(payload);
    }
  },
  actions: {
    // Actions are also responsible in performing any or all asynchronous calls prior to committing to mutations
    addNumber(context, number) {
      context.commit("ADD_NUMBER", number);
    }
  },
  getters: {
    // Getters are to a Vuex store what computed properties are to a Vue component. Getters are primarily used to perform some calculation/manipulation to store state before having that information accessible to components.
    getNumbers(state) {
      return state.numbers;
    }
  },
});
