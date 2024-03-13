<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-drawer title="basket" :visible.sync="basketDialog" size="30%" class="custom-drawer" :withHeader="false">
      <BasketDrawer v-if="basketDialog" />
    </el-drawer>
    <el-drawer title="basket" :visible.sync="checkOutDialog" size="30%" class="custom-drawer" :withHeader="false">
      <CheckOutDrawer v-if="checkOutDialog" />
    </el-drawer>
  </el-container>
</template>

<script>
import BasketDrawer from "@/components/BasketDrawer.vue";
import CheckOutDrawer from "@/components/CheckOutDrawer.vue";
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
    BasketDrawer,
    CheckOutDrawer
  },
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    checkOutDialog: {
      get() {
        return this.$store.getters.getCheckOutDialog;
      },
      set(val) {
        this.$store.commit("openCloseCheckOut", val);
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
