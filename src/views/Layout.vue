<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <div class="main-footer">
      <div class="main-footer-top">
        <div class="main-footer-content">
          <i class="el-icon-notebook-1"></i>
          <div class="main-footer-detail">
            <div class="footer-title">Book information?</div>
            <div class="footer-detail">Please send us an email at support@gmail.com</div>
          </div>
        </div>
        <div class="main-footer-content">
          <i class="el-icon-help"></i>
          <div class="main-footer-detail">
            <div class="footer-title">Need Help?</div>
            <div class="footer-detail">Please call us at 0123456789</div>
          </div>
        </div>
      </div>
      <hr />
      <div class="main-footer-bottom">
        <div class="logo-title" @click="$router.push('/')">BOOKSTORE.</div>
        <div class="footer-copyright">
          © 2024 All right reserved.
        </div>
      </div>
    </div>
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
    CheckOutDrawer,
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
