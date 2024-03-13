<template>
  <div class="basket-card">
    <div class="basket-card-img">
      <img :src="item.thumbnail" :alt="item.title" />
    </div>
    <div class="basket-card-content">
      <div class="basket-card-title">{{ item.title }}</div>
      <div class="basket-card-price">Price: {{ item.price.toFixed(2) }}₺</div>
      <div class="basket-card-update">
        <AddUpdateBasketBtn :item="item"></AddUpdateBasketBtn>
        <div class="cart-price-total">{{ (item.price * item.amount).toFixed(2) }}₺</div>
      </div>
    </div>
  </div>
</template>

<script>
import AddUpdateBasketBtn from "./AddUpdateBasketBtn.vue";
export default {
  props: ["item"],
  components: {
    AddUpdateBasketBtn,
  },
};
</script>

<style scoped lang="less">
.basket-card {
  display: flex;
  gap: 2rem;
  .basket-card-img {
    img {
      height: 120px;
    }
  }
  .basket-card-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    .basket-card-title {
      font-size: 14px;
      color: #2f4858;
      font-family: "Philosopher", sans-serif;
      font-weight: 700;
    }
    .basket-card-title {
      color: #676768;
    }
    .basket-card-price {
      color:#676768;
    }
    .basket-card-update {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .cart-price-total {
        color:#2f4858;
        font-weight: 500;
      }
    }
  }
}
</style>
