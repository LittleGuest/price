<script setup>
import { ref } from "vue";
import Greet from "../Greet.vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

// 物品名
const itemname = ref("");
// 价格
const price = ref(0);
// 单位
const unit = ref("");
// 地址
const address = ref("");
// 地址列表
const addressList = [
  { text: "xxx菜市场", value: "1" },
  { text: "xxx综合市场", value: "2" },
  { text: "永辉超市", value: "3" },
];
// 展示地址选择器
const showAddressPicker = ref(false);

// 地址选择确认
const onAddressConfirm = ({ selectedOptions }) => {
  showAddressPicker.value = false;
  address.value = selectedOptions[0].text;
};

// 提交
const onSubmit = (values) => {
  console.log("submit", values);
};

// 语音输入，长按输入，松开按钮停止语音输入
const onBubbleClick = () => {};
</script>

<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="itemname"
        name="物品名"
        label="物品名"
        placeholder="物品名"
        :rules="[{ required: true, message: '请填写物品名' }]"
      />
      <van-field
        v-model="price"
        name="价格"
        label="价格"
        placeholder="价格"
        :rules="[{ required: true, message: '请填写价格' }]"
      />
      <van-field
        v-model="unit"
        name="单位"
        label="单位"
        placeholder="单位"
        :rules="[{ required: true, message: '请填写单位' }]"
      />
      <van-field
        v-model="address"
        is-link
        readonly
        label="地址"
        placeholder="地址"
        @click="showAddressPicker = true"
      />
      <van-popup v-model:show="showAddressPicker" round position="bottom">
        <van-picker
          :columns="addressList"
          @cancel="showAddressPicker = false"
          @confirm="onAddressConfirm"
        />
      </van-popup>
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

  <van-floating-bubble
    axis="xy"
    icon="volume-o"
    magnetic="x"
    @click="onBubbleClick"
  >
  </van-floating-bubble>
</template>

<style scoped></style>
