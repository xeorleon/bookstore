<template>
  <div class="custom-header gm">
    <div class="header-left">
      <div class="logo-title" @click="$router.push('/')">BOOKSTORE.</div>
    </div>
    <el-input v-model="searchInput" placeholder="Please input" prefix-icon="el-icon-search" class="header-search"></el-input>
    <el-badge :value="basket.length" class="item" type="info" :max="9"> <i class="el-icon-shopping-cart-2" @click="basketDialog = !basketDialog"></i></el-badge>
  </div>
</template>

<script>
import HeaderButton from "./HeaderButton.vue";
export default {
  components: { HeaderButton },
  data() {
    return {};
  },
  computed: {
    basket() {
      return this.$store.getters.getBasket;
    },
    searchInput: {
      get() {
        return this.$store.getters.getSearchInput;
      },
      set(newVal) {
        this.$store.commit("setSearchInput", newVal);
      },
    },
    basketDialog: {
      get() {
        return this.$store.getters.getBasketDialog;
      },
      set(val) {
        this.$store.commit("openCloseBasket", val);
      },
    },
  },
};
</script>

<style lang="less">
.custom-header {
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  gap: 12px;
  justify-content: space-between;

  .header-left {
    display: flex;
    align-items: center;
    gap: 12px;
 
  }
  i {
    font-weight: 500;
    font-size: 24px;
  }
}
</style>
