import { VueElement } from "vue";
import{createRouter,createWebHashHistory,createWebHistory} from "vue-router";
import Home from "../view/Home.vue";
import Login from "../view/Login.vue";
import Erro from "../view/Erro.vue";
import Detalhes from "../view/Detalhes.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/home",
            name: "home",
            component: Home,
        },

        {
            path: "/login",
            name: "login",
            component: Login,
        },
        
        {
            path: "/erro",
            name: "erro",
            component: Erro,
        },
        {
            path: "/detalhes",
            name: "detalhes",
            component: Detalhes
        },
    ],
});

export default router;