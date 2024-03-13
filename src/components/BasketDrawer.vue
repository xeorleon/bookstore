<template>
  <div class="basket-drawer">
    <div class="basket-drawer-header">
      <i class="el-icon-close" @click="close"></i>
      <BigTitle title="Your cart items" size="small"></BigTitle>
    </div>
    <div class="basket-drawer-content">
      <basket-card v-for="item in basket" :item="item" :key="item.id"></basket-card>
    </div>
    <div class="basket-drawer-footer">
      <div class="basket-subtotal">
        <div class="basket-subtotal-title">Subtotal:</div>
        <div class="basket-subtotal-total">{{totalPrice}}₺</div>
      </div>
      <el-button type="info" @click="openCheckOut">Confirm</el-button>
    </div>
  </div>
</template>

<script>
import BasketCard from "./BasketCard.vue";
import BigTitle from "./BigTitle.vue";
export default {
  components: {
    BigTitle,
    BasketCard,
  },
  computed: {
    basket() {
      return this.$store.getters.getBasket;
    },
    totalPrice(){
     var list = this.$store.getters.getBasket;
     var totalPrice = list.reduce((total, book) => total + (book.price * book.amount), 0);
     return totalPrice.toFixed(2);
    },
  },
  methods: {
    openCheckOut() {
      this.$store.commit("openCloseCheckOut", true);
    },

    close() {
      this.$store.commit("openCloseBasket", false);
    },
  },
};
</script>

<style scoped lang="less">
.basket-drawer {
  flex-shrink: 0;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  .basket-drawer-header {
    padding: 25px;
    padding-bottom: 0;
    position: relative;
    i {
      position: absolute;
      font-weight: bold;
      font-size: 24px;
      color: #2f4858;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
    margin-bottom: 20px;
  }
  .basket-drawer-content {
    padding: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow-y: auto;
  }
  .basket-drawer-footer {
    padding: 25px;
    padding-top: 0;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .basket-subtotal {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .basket-subtotal-title {
        color: #676768;
      }
      .basket-subtotal-total {
        color: #676768;
        font-weight: bolder;
      }
    }
  }
}
</style>
