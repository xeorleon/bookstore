<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header
  },
};
</script>
