<template>
  <section class="home gm">
    <div class="fbooks">
      <BigTitle title="Featured Books" />
      <BookList></BookList>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import BookList from '@/components/BookList.vue';
import BigTitle from '@/components/BigTitle.vue';
export default {
  name: "HomeView",
  components: {
    BookList,
    BigTitle
  },
  computed: {
    title() {
        return "Featured Books";
    },
  },
};
</script>
