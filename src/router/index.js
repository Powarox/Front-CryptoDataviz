import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Overview from '../views/Overview.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Accueil',
        }
    },
    {
        path: '/Overview',
        name: 'Overview',
        component: Overview,
        meta: {
            title: 'Overview',
        }
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)',
        component: NotFound,
        meta: {
            title: '404 Not Found',
        }
    }
]

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
});

router.afterEach((to) => {  // (to, from)
    // console.log(from, to);
    document.title = to.meta.title;
})

export default router;
