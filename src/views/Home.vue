<template>
  <section class="home gm">
    <div class="fbooks">
      <div class="fbooks-head">
        <h2 class="fbooks-title">{{ title }}</h2>
        <div class="fbooks-line"></div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  computed: {
    title() {
      return "Featured Books";
    },
  },
};
</script>
