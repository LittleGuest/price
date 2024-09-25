<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from "vue";
import Greet from "./components/Greet.vue";

const activeNames = ref([]);
const items = ref([
  {
    id: 1,
    name: "土豆",
    price: 2.99,
    unit: "500g",
    position: ["xxx菜市场", "xxx综合市场", "永辉超市"],
  },
  {
    id: 2,
    name: "牛肉",
    price: 45,
    unit: "500g",
    position: ["xxx菜市场", "xxx综合市场", "永辉超市", "万达广场"],
  },
  {
    id: 3,
    name: "玉米",
    price: 2.5,
    unit: "1个",
    position: ["xxx菜市场", "xxx综合市场", "永辉超市"],
  },
]);

const onDeleteItem = (position) => {
  console.log("delete item", position);
};

const onBubbleClick = () => {
  showPopupBottom.value = !showPopupBottom.value;
};

const onPlusBubbleClick = () => {
  showPopupBottom.value = !showPopupBottom.value;
};

const showPopupBottom = ref(false);

const locationFk = ref("a");
const itemFk = ref("");
const locationFkOption = [
  { text: "xxx菜市场", value: "xxxcaishi" },
  { text: "xxx综合市场", value: "xxxzonghe" },
  { text: "永辉超市", value: "yonghui" },
];
const itemFkOption = [
  { text: "土豆", value: "tudou" },
  { text: "牛肉", value: "niurou" },
  { text: "玉米", value: "yumi" },
];

const showAddressPopup = ref(false);
const openAddressPage = () => {
  showAddressPopup.value = !showAddressPopup.value;
};
</script>

<template>
  <van-search v-model="value" placeholder="请输入物品名" clearable />
  <van-dropdown-menu>
    <van-dropdown-item v-model="locationFk" :options="locationFkOption" />
    <van-dropdown-item v-model="itemFk" :options="itemFkOption" />
  </van-dropdown-menu>

  <van-collapse v-model="activeNames">
    <div v-for="_ in 10">
      <van-swipe-cell
        v-for="(item, index) in items"
        :key="index"
        @click="onDeleteItem"
      >
        <van-collapse-item icon="shop-o">
          <template #title>{{ item.name }}</template>
          <template #value>{{ item.price }} / {{ item.unit }}</template>
          <van-space>
            <van-tag
              plain
              type="primary"
              v-for="(pos, index) in item.position"
              :key="index"
              >{{ pos }}</van-tag
            >
          </van-space>
        </van-collapse-item>

        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>
  </van-collapse>

  <van-floating-bubble
    axis="xy"
    icon="setting-o"
    magnetic="x"
    @click="onBubbleClick"
  >
  </van-floating-bubble>
  <van-floating-bubble
    axis="xy"
    icon="plus"
    magnetic="x"
    :offset="{ x: 290, y: 630 }"
    @click="onPlusBubbleClick"
  >
  </van-floating-bubble>

  <van-popup
    v-model:show="showPopupBottom"
    position="bottom"
    round
    :style="{ height: '30%' }"
  >
    <template #>
      <van-cell
        title="位置管理"
        icon="location-o"
        is-link
        @click="openAddressPage"
      />
      <van-cell
        title="关于"
        icon="user-circle-o"
        is-link
        url="https://github.com/LittleGuest/price.git"
      />
    </template>
  </van-popup>

  <van-popup
    v-model:show="showAddressPopup"
    position="top"
    round
    :style="{ height: '30%' }"
  >
    <template #>
      <van-cell
        title="位置管理"
        icon="location-o"
        is-link
        @click="openAddressPage"
      />
      <van-cell
        title="关于"
        icon="user-circle-o"
        is-link
        url="https://github.com/LittleGuest/price.git"
      />
    </template>
  </van-popup>

  <van-back-top right="80" bottom="25" />
</template>

<style scoped></style>
