import Vue from 'vue'
import Vuex from 'vuex'
import books from "./books"
import basket from "./basket"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    books,
    basket
  }
})
