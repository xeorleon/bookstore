<template>
  <div class="big-head">
    <h2 class="big-title" :class="[size]">{{ title }}</h2>
    <div class="big-line"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Default Title",
      require: true,
    },
    size: {
      type: String,
      default: "normal",
    },
  },
};
</script>

<style></style>
