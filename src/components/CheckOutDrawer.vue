<template>
  <div class="checkout-drawer">
    <div class="checkout-drawer-header">
      <i class="el-icon-close" @click="close"></i>
      <BigTitle title="Checkout" size="small"></BigTitle>
    </div>
    <div class="checkout-drawer-content"></div>
    <div class="checkout-drawer-footer"></div>
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
  },
  methods: {
    close() {
      this.$store.commit("openCloseCheckOut", false);
    },
  },
};
</script>

<style scoped lang="less">
.checkout-drawer {
  flex-shrink: 0;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  .checkout-drawer-header {
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
}
</style>
