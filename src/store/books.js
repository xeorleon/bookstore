import Vue from 'vue'
import Vuex from 'vuex'
import { client} from "../helpers/axios";
Vue.use(Vuex)

 const books = {
  state: () => ({
    bookList: [],
    searchInput:null,
    filter :{
      q: "subject:science",
      startIndex:0,
      maxResults:20,
      orderBy: "newest",
      filter:"paid-ebooks"
    },
  }),
  getters: {
    getBookFilter:(state) => state.filter,
    getSearchInput: (state) => state.searchInput,
    listFeaturedBooks: (state ) => state.bookList,
  },
  mutations: {
    addList(state,payload){
      state.bookList.push(...payload);
    },
    setSearchInput(state,payload){
      state.searchInput = payload;
    },
    setList(state,payload){
      state.bookList = payload;
    },
  },
  actions: {
    async loadMore(store,payload){
      store.state.filter.startIndex = store.state.bookList.length;
      var res = await client.get("volumes", {
        params : {
          ...store.state.filter,
          q: store.state.searchInput != null && store.state.searchInput? store.state.searchInput : 'subject:science'
        }
      })
      store.commit('addList', res.data.items);

      return res.data.items;
      
    },
    async getFeaturedBooks(store,payload){
      var res = await client.get("volumes", {
        params : {
          ...store.state.filter,
          q: store.state.searchInput != null && store.state.searchInput? store.state.searchInput : 'subject:science'
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