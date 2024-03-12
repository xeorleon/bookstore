<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-drawer title="basket" :visible.sync="basketDialog" size="100%" class="custom-drawer" :withHeader="false">
      <BasketDrawer v-if="basketDialog" />
    </el-drawer>
  </el-container>
</template>

<script>
import BasketDrawer from "@/components/BasketDrawer.vue";
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
    BasketDrawer,
  },
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    basketDialog:{
      get(){
        return this.$store.getters.getBasketDialog;
      },
      set(val){
        this.$store.commit('openCloseBasket',val);
      },
      
    },
  },
};
</script>
