import path from 'path';
import {createRouter, createWebHistory} from 'vue-router';

export const router = createRouter ({
    history: createWebHistory(''),
    
    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import ('../views/home.vue')
        },
        {
            path: '/we',
            name: 'we',
            component: () => import ('../views/createdBy.vue'),
            props: {name: 'abc'}
        },
        {
            path: '/zine',
            name: 'zine',
            component: () => import ('../views/zine.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: {
                name: 'main',
            }
        }                                
    ]
})