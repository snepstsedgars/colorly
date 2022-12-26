import { createRouter, createWebHistory } from "vue-router";
import ColorConvert from "@src/views/ColorConvert.vue";

const ColorPicker = () => import("@src/views/ColorPicker.vue");

const routes = [
  {
    path: "/:type?/:color?",
    name: "convert",
    component: ColorConvert,
  },
  {
    path: "/picker",
    name: "picker",
    component: ColorPicker,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
