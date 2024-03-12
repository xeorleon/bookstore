<template>
  <div class="fbooks-item" @click="$router.push({ name: 'book-detail', params: { id: item.id } })">
    <div class="fbooks-item-img">
      <img :src="item.volumeInfo.imageLinks.thumbnail" class="book-item-img" alt="" />
    </div>
    <div class="fbooks-item-detail">
      <div class="fbooks-item-title">{{ item.volumeInfo.title }}</div>
      <div class="fbooks-item-subtitle line-clamp-3">
        <span>{{ item.volumeInfo.description }}</span>
      </div>
      <div class="fbooks-item-row line-clamp-1"><span>By: </span>{{ item.volumeInfo.authors[0] }}</div>
      <div class="fbooks-item-row line-clamp-1"><span>Price: </span>{{ item.saleInfo.listPrice.amount }}₺</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped lang="less">
.fbooks-item {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 0 15px 5px rgba(1, 6, 33, 0.15);
  cursor: pointer;
  display: flex;
  gap: 14px;
  width: 100%;
  overflow: hidden;
  & > .fbooks-item-img {
    padding: 8px;
    & > img {
      object-fit: cover;
      height: 200px;
    }
  }
  & > .fbooks-item-detail {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
    text-align: start;
    font-family: Poppins, sans-serif;
    & > div > span {
      color: #676768;
    }
    .fbooks-item-title {
      font-family: "Philosopher", sans-serif;
      color: #2f4858;
      font-weight: 700;
    }
  }
}
</style>
