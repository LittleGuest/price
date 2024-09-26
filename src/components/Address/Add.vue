<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const address = ref("");
const onSubmit = (values) => {
  console.log("submit", values);
  router.back();
};
const onDelete = () => {
  router.back();
};
</script>

<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="address"
        center
        clearable
        name="详细地址"
        label="详细地址"
        placeholder="详细地址"
        :rules="[{ required: true, message: '请填详细地址' }]"
      >
        <template #button>
          <van-button size="small" round icon="location-o"></van-button>
        </template>
      </van-field>
    </van-cell-group>

    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<style scoped></style>
