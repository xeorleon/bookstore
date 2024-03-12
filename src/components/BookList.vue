<template>
  <div class="fbooks-list">
    <BookCard v-for="book in listBooks" :key="book.id" :item="book"></BookCard>
  </div>
</template>

<script>
import BookCard from "./BookCard.vue";
export default {
  components: {
    BookCard,
  },
  created() {
    this.$store.dispatch("getFeaturedBooks");
  },
  methods: {},
  computed: {
    listBooks() {
      return this.$store.getters.listFeaturedBooks;
    },
  },
};
</script>

<style lang="less" scoped>
.fbooks-list {
  display: grid;
  gap: 14px;
  margin-top: 30px;
  width: 100%;
  flex-wrap: wrap;
  @media screen and (max-width: 1480px) {
    grid-template-columns: repeat(3, 1fr) !important;
  }
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr) !important;
  }
  grid-template-columns: repeat(4, 1fr);
}
</style>
