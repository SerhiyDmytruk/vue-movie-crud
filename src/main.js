import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import "../style.css";


createApp(App)
  .use(
    createRouter({
      history: createWebHistory(),
      routes: [
        { path: "/", 
          name: "home",
          component: HomePage 
        },
        { path: "/:id",
          name: "movie",
          component: () => import("./pages/MovieDetailPage.vue"),
          props: (route) => ({ id: Number(route.params.id) })
        }
      ]
    })
  )
.mount("#app");
