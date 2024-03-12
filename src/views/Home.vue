<template>
  <section class="home gm">
    <div class="fbooks">
      <div class="fbooks-head">
        <h2 class="fbooks-title">{{ title }}</h2>
        <div class="fbooks-line"></div>
      </div>
      <BookList></BookList>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import BookList from '@/components/BookList.vue';
export default {
  name: "HomeView",
  components: {
    BookList
  },
  computed: {
    title() {
        return "Featured Books";
    },
  },
};
</script>
