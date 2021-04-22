import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Service from "../views/service.vue";
import Products from "../views/products.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/service",
    name: "Service",
    component: Service,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
