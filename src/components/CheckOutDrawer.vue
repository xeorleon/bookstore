<template>
  <div class="checkout-drawer">
    <div class="checkout-drawer-header">
      <i class="el-icon-close" @click="close"></i>
      <BigTitle title="Checkout" size="small"></BigTitle>
    </div>
    <div class="checkout-drawer-content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top" size="small" label-width="120px" class="demo-ruleForm">
        <el-form-item label="Your Name" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Email Address" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Phone Number" prop="phoneNumber">
          <el-input v-model="ruleForm.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="Address" prop="address">
          <el-input type="textarea" v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item label="Postal Code" prop="postalCode">
              <el-input type="number" v-model="ruleForm.postalCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Apartment, Suite, etc" prop="addressDetail">
              <el-input v-model="ruleForm.addressDetail"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
          <el-button @click="resetForm('ruleForm')">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="checkout-drawer-footer"></div>
  </div>
</template>

<script>
import BasketCard from "./BasketCard.vue";
import BigTitle from "./BigTitle.vue";
export default {
  components: {
    BigTitle,
    BasketCard,
  },
  data() {
    return {
      ruleForm: {
        name: "",
        email: "",
        phoneNumber: "",
        postalCode: null,
        address: "",
        addressDetail: "",
      },
      rules: {
        name: [
          { required: true, message: "Please input your name", trigger: "blur" },
          { min: 3, max: 255, message: "Length should be 3 to 5", trigger: "blur" },
        ],
        email: [
          { required: true, message: "Please input your email", trigger: "blur" },
          { min: 3, max: 255, message: "Length should be 3 to 5", trigger: "blur" },
        ],
        phoneNumber: [{ required: true, message: "Please input your phone number", trigger: "blur" }],
        postalCode: [{ required: true, message: "Please input your postal code", trigger: "blur" }],
        address: [{ required: true, message: "Please input address", trigger: "blur" }],
        addressDetail: [{ required: true, message: "Please input adress detail", trigger: "blur" }],
      },
    };
  },
  computed: {
    basket() {
      return this.$store.getters.getBasket;
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$notify({
            title: "Success",
            message: "Submit form",
            type: "success",
            showClose: false,
            duration: 1000,
          });
          this.close();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    close() {
      this.$store.commit("openCloseCheckOut", false);
    },
  },
};
</script>

<style scoped lang="less">
.checkout-drawer {
  flex-shrink: 0;
  display: flex;
  height: 100%;
  flex-direction: column;
  .checkout-drawer-header {
    padding: 25px;
    padding-bottom: 0;
    position: relative;
    i {
      position: absolute;
      font-weight: bold;
      font-size: 24px;
      color: #2f4858;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
    margin-bottom: 20px;
  }
  .checkout-drawer-content {
    padding: 25px;
  }
}
</style>
