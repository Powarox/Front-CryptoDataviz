import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Overview from '../views/Overview.vue';
import Analytics from '../views/Analytics.vue';
import TransactionHistory from '../views/TransactionHistory.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Wallet - Accueil',
        }
    },
    {
        path: '/Overview',
        name: 'Overview',
        component: Overview,
        meta: {
            title: 'Wallet - Overview',
        }
    },
    {
        path: '/Analytics',
        name: 'Analytics',
        component: Analytics,
        meta: {
            title: 'Wallet - Analytics',
        }
    },
    {
        path: '/TransactionHistory',
        name: 'TransactionHistory',
        component: TransactionHistory,
        meta: {
            title: 'Wallet - Transaction History',
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
    history : createWebHashHistory(process.env.BASE_URL),
    routes
});

router.afterEach((to) => {  // (to, from)
    // console.log(from, to);
    document.title = to.meta.title;
})

export default router;
