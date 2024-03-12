<template>
  <div class="custom-header gm">
    <div class="header-left">
      <header-button></header-button>
      <div class="logo-title" @click="$router.push('/')">BOOKSTORE.</div>
    </div>
    <el-input v-model="searchInput" placeholder="Please input" prefix-icon="el-icon-search" class="header-search"></el-input>
    <el-badge :value="12" class="item" type="info" :max="9"> <i class="el-icon-shopping-cart-2"></i></el-badge>
  </div>
</template>

<script>
import HeaderButton from "./HeaderButton.vue";
export default {
  components: { HeaderButton },
  data() {
    return {
      searchInput: null,
    };
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
    .logo-title {
      font-family: "Philosopher", sans-serif;
      font-size: 24px;
      font-weight: 700;
      @media screen and (max-width: 991px) {
        display: none;
      }
    }
  }
  i {
    font-weight: 500;
    font-size: 24px;
  }
}
</style>
