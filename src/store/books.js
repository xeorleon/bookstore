import Vue from 'vue'
import Vuex from 'vuex'
import { client} from "../helpers/axios";
Vue.use(Vuex)

 const books = {
  state: () => ({
    bookList: [],
  }),
  getters: {
    listFeaturedBooks: (state ) => state.bookList,
  },
  mutations: {
    setList(state,payload){
      state.bookList = payload;
    },
  },
  actions: {
    async getFeaturedBooks(store,payload){
      var res = await client.get("volumes", {
        params : {
          q: "subject:science",
          startIndex:0,
          maxResults:40,
          orderBy: "newest",
          filter:"paid-ebooks" 
        }
      })
      store.commit('setList', res.data.items);
    },
    async getBookDetail(store,payload){
      var res = await client.get(`volumes/${payload}`);
      return res.data;
    },
  },
}

export default books;