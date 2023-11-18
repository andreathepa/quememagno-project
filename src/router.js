import { createRouter, createWebHistory } from 'vue-router';

// IMPORTARE TUTTE LE PAGINE DALLA CARTELLA "PAGES"
import HomePage from './pages/HomePage.vue';
import Contacts from './pages/Contacts.vue';
import Ricette from './pages/Ricette.vue';
import NotFound from './pages/NotFound.vue';

// CREIAMO IL ROUTER CON LE SUE ROTTE
const router = createRouter({

    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts,
        },
        {
            path: '/ricette',
            name: 'ricette',
            component: Ricette,
        },
        {
            path: '/:catchAll(.*)',
            redirect: '/pagina-non-trovata',
        },
        {
            path: '/pagina-non-trovata',
            name: 'not-found',
            component: NotFound,
        },
    ]

})

// ESPORTIAMO IL ROUTER
export { router }