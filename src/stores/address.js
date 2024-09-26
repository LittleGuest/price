import { inject } from "vue";
import { useRoute } from "vue-router";
import { defineStore } from "pinia";

export const useSearchFilters = defineStore("search-filters", () => {
  const route = useRoute();
  // 这里假定 `app.provide('appProvided', 'value')` 已经调用过
  const appProvided = inject("appProvided");

  // ...

  return {
    // ...
  };
});
