import Vue from 'vue'
import Vuex from 'vuex'
import { client} from "../helpers/axios";
Vue.use(Vuex)

 const books = {
  state: () => ({
    basket: [],
    basketTotalPrice:0,
    basketDialog:false,
    checkOutDialog:false,
  }),
  getters: {
    getCheckOutDialog:(state) => state.checkOutDialog,
    getBasket: (state ) => state.basket,
    getBasketDialog:(state) => state.basketDialog,
  },
  mutations: {
    addBasket(state,payload){
      console.log('addBasket');
      let {product,toAdd} = payload;
      if(toAdd){
        state.basket.push(product);
      }
    },
    deleteBasket(state,payload){
      state.basket = state.basket.filter(x => x.id != payload.id);
    },
    openCloseBasket(state,payload){ 
      state.basketDialog = payload;
    },
    openCloseCheckOut(state,payload){ 
      state.checkOutDialog = payload;
    },
  },
  actions: {
  },
}

export default books;