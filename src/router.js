import {createRouter, createWebHistory} from 'vue-router'
import Mockup from "@/views/Mockup";
import FormOverview from "@/views/FormOverview";
import FormPersonalInfo from "@/views/FormPersonalInfo";
import FormMembership from "@/views/FormMembership";
import Home from '@/views/Home'
import Form from "@/views/Form";
// createMemoryHistory
// createWebHashHistory
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', component: Home, alias: '/'},
        {path: '/mockup', component: Mockup},
        {
            path: '/form', component: Form, name: 'form', redirect: '/form/personal', children: [
                {
                    path: 'personal', name: 'personal', component: FormPersonalInfo, meta: {
                        activeStep: 0,
                    }
                },
                {
                    path: 'membership', name: 'membership', component: FormMembership, meta: {
                        activeStep: 1,
                    }
                },
                {
                    path: 'overview', name: 'overview', component: FormOverview, meta: {
                        activeStep: 2,
                    }
                },
            ]
        },
    ],
});

// router.beforeEach((to, from, next) => {
//     console.log('beforeEach pageAccessGuard');
//     if (to.meta.pageAccessGuard) {
//         next({
//             name: 'personal'
//         });
//     } else {
//         next()
//     }
// });
export default router;
