<template>
  <div class="bdetail gm">
    <div class="bdetail-left">
      <div class="bdetail-image">
        <img :src="bookData.volumeInfo.imageLinks.thumbnail"  alt="" />

        <add-update-basket-btn v-if="bookData" :item="bookData"></add-update-basket-btn>
      </div>
      <div class="bdetail-info">
        <div class="bdetail-info-item">
          <div class="bdetail-info-item-title">Category</div>
          <div class="bdetail-info-item-content">{{ bookData.volumeInfo.categories[0].split("/")[0] }}</div>
        </div>
        <div class="bdetail-info-item">
          <div class="bdetail-info-item-title">Author</div>
          <div class="bdetail-info-item-content">{{ bookData.volumeInfo.authors[0] }}</div>
        </div>
        <div class="bdetail-info-item">
          <div class="bdetail-info-item-title">Language</div>
          <div class="bdetail-info-item-content">{{ bookData.volumeInfo.language }}</div>
        </div>
        <div class="bdetail-info-item">
          <div class="bdetail-info-item-title">Total Pages</div>
          <div class="bdetail-info-item-content">{{ bookData.volumeInfo.pageCount }}</div>
        </div>
        <div class="bdetail-info-item">
          <div class="bdetail-info-item-title">Publisher</div>
          <div class="bdetail-info-item-content">{{ bookData.volumeInfo.publisher }}</div>
        </div>
        <div class="bdetail-info-item">
          <div class="bdetail-info-item-title">Published</div>
          <div class="bdetail-info-item-content">{{ bookData.volumeInfo.publishedDate }}</div>
        </div>
        <div class="bdetail-info-item">
          <div class="bdetail-info-item-title">ISBN</div>
          <div class="bdetail-info-item-content">{{ bookData.volumeInfo.industryIdentifiers[0].identifier }}</div>
        </div>
      </div>
    </div>
    <div class="bdetail-right">
      <div class="bdetail-book-title">{{ bookData.volumeInfo.title }}</div>
      <div class="bdetail-book-description" v-html="bookData.volumeInfo.description"></div>
    </div>
  </div>
</template>

<script>
import AddUpdateBasketBtn from "@/components/AddUpdateBasketBtn.vue";
export default {
  components: {
    AddUpdateBasketBtn,
  },
  data() {
    return {
      bookData: null,
    };
  },
  async mounted() {
    var id = this.$route.params.id;
    console.log(id);
    var res = await this.$store.dispatch("getBookDetail", id);
    this.bookData = res;
  },
};
</script>

<style scoped lang="less">
.bdetail {
  display: flex;
  gap: 14px;
  @media screen and(max-width:991px) {
    flex-direction: column;
    .bdetail-left {
      max-width: 100%!important;
      display: flex;
      gap: 1rem;
      width: 100%;
      .bdetail-image {
        img {
          max-height: 160px;
        }
      }
      .bdetail-info {
        width: 100%;
        align-items: flex-start !important;
        grid-template-columns: 1fr 1fr  !important;
      }
    }
  }
  .bdetail-left {
    max-width: 300px;
    width: 100%;
    .bdetail-info {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      gap: 8px;
      .bdetail-info-item {
        display: flex;
        flex-direction: column;
        font-size: 12px;

        .bdetail-info-item-title {
          color: #676768;
        }
        .bdetail-info-item-content {
          color: #2f4858;
          font-weight: 700;
        }
      }
    }
  }
  .bdetail-right {
    .bdetail-book-title {
      font-family: "Philosopher", sans serif;
      font-weight: 700;
      font-size: 24px;
    }
  }
}
</style>
