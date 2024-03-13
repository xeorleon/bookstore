<template>
  <section class="home gm">
    <div class="fbooks">
      <BigTitle :title="title" />
      <BookList></BookList>
      <el-button type="info" v-if="bookList.length > 0" :loading="loading" @click="loadMore" :disabled="loading">Load More</el-button>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import BookList from "@/components/BookList.vue";
import BigTitle from "@/components/BigTitle.vue";
export default {
  name: "HomeView",
  data() {
    return {
      loading: false,
      timeout: null,
      loadMoreBtn: true,
    };
  },
  components: {
    BookList,
    BigTitle,
  },
  methods: {
    loadMore() {
      if (this.timeout != null) clearTimeout(this.timeout);
      this.loading = true;
      this.timeout = setTimeout(async () => {
        var items = await this.$store.dispatch("loadMore");
        this.loading = false;
        if (items.length > 0) {
          this.loadMoreBtn = true;
        } else {
          this.loadMoreBtn = false;
        }
      }, 250);
    },
  },
  computed: {
    bookList() {
      return this.$store.getters.listFeaturedBooks;
    },
    title() {
      var search = this.$store.getters.getSearchInput;
      if (search != null && search != "") {
        return `Search "${search}"`;
      } else {
        return "Featured Books";
      }
    },
  },
};
</script>
