<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const chosenAddressId = ref("1");
const addressList = ref([]);

const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    addressList.value = [
      {
        id: "1",
        address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
      },
      {
        id: "2",
        address: "浙江省杭州市拱墅区莫干山路 50 号",
      },
    ];

    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    // if (addressList.value.length >= 40) {
    finished.value = true;
    // }
  }, 1000);
};

const onAdd = () => {
  router.push("/address/add");
};
const onEdit = (item, index) => {
  router.push("/address/edit");
};
</script>

<template>
  <van-list v-model:loading="loading" :finished="finished" @load="onLoad">
    <van-cell-group inset v-for="address in addressList" :key="address.id">
      <van-cell :title="address.address">
        <template #right-icon>
          <van-icon name="edit" size="20" @click="onEdit" />
        </template>
      </van-cell>
    </van-cell-group>
  </van-list>

  <div style="margin: 16px">
    <van-button round block type="primary" @click.prevent="onAdd">
      新增地址
    </van-button>
  </div>
</template>

<style scoped></style>
