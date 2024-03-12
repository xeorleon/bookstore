<template>
  <div class="header_menu-btn" @click="getBooks">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style lang="less">
.header_menu-btn {
  width: 90px;
  display: flex;
  gap: 3px;
  flex-direction: column;
  max-width: 26px;
  cursor: pointer;
  &:hover {
    & > .bar:nth-child(n + 1) {
      width: 26px;
    }
    & > .bar:nth-child(n + 2) {
      width: 13px;
    }
    & > .bar:nth-child(n + 3) {
      width: 16px;
    }
  }
}
.bar {
  height: 3px;
  width: 100%;
  background-color: #2f4858;
  border-radius: 3px;
  transition: 0.2s all;
  &:nth-child(n + 1) {
    width: 13px;
  }
  &:nth-child(n + 2) {
    width: 26px;
  }
  &:nth-child(n + 3) {
    width: 13px;
  }
}
</style>
