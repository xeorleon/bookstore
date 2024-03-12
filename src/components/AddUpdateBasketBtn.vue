<template>
  <div class="add-update-basket">
    <el-button type="info" size="small" v-if="toAdd" class="add-card-btn" icon="el-icon-shopping-cart-2" @click="add">Add to card</el-button>
    <div class="update-button-basket" v-else>
      <el-button type="dark" size="small" icon="el-icon-delete" @click="update(3)" v-if="book.amount <= 1"></el-button>
      <el-button type="dark" size="small" icon="el-icon-minus" @click="update(2)" v-else></el-button>
      <div class="amount" v-if="this.book">{{ this.book.amount }}</div>
      <el-button type="dark" size="small" icon="el-icon-plus" @click="update(1)"></el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      toAdd: true,
      book: null,
    };
  },
  methods: {
    update(val) {
      switch (val) {
        case 1:
          this.book.amount += 1;
          break;
        case 2:
          this.book.amount -= 1;
          break;
        case 3:
          this.$store.commit("deleteBasket", this.book);
          this.$notify({
            title: "Success",
            message: "Removed from cart",
            type: "success",
            showClose: false,
          });
          this.toAdd = true;
          break;
      }
    },
    add() {
      this.$store.commit("addBasket", { product: this.book, toAdd: this.toAdd });
      this.$notify({
        title: "Success",
        message: "Added from cart",
        type: "success",
        showClose: false,
      });
      this.toAdd = !this.toAdd;
    },
  },
  computed: {
    basket() {
      return this.$store.getters.getBasket;
    },
  },
  mounted() {
    let fObj = this.basket.find((x) => x.id === this.item.id);
    if (fObj) {
      this.toAdd = false;
      this.book = fObj;
    } else {
      this.toAdd = true;
      this.book = {
        id: this.item.id,
        title: this.item.volumeInfo.title,
        price: this.item.saleInfo.listPrice.amount,
        thumbnail: this.item.volumeInfo.imageLinks.thumbnail,
        amount: 1,
      };
    }
  },
};
</script>

<style lang="less" scoped>
.add-button-basket {
  height: 30px;
  background-color: #5a8f7b;
  width: max-content;
  padding: 8px;
}
.update-button-basket {
  display: flex;
  align-items: center;
  .amount {
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2f4858;
    height: 30px;
    color: white;
  }
  & > .el-button {
    border: 0;
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}
</style>
