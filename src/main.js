import { createApp } from "vue";
import { createWebHashHistory, createRouter } from "vue-router";
import { createPinia } from "pinia";

import App from "./App.vue";
import ItemList from "./components/Item/Index.vue";
import ItemAdd from "./components/Item/Add.vue";
import AddressList from "./components/Address/Index.vue";
import AddressEdit from "./components/Address/Edit.vue";
import AddressAdd from "./components/Address/Add.vue";

const routes = [
  { path: "/", redirect: "/items" },
  { path: "/items", component: ItemList },
  { path: "/item/add", component: ItemAdd },
  { path: "/address", component: AddressList },
  { path: "/address/edit", component: AddressEdit },
  { path: "/address/add", component: AddressAdd },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
