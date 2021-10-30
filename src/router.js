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
                    path: 'personal', component: FormPersonalInfo, meta: {
                        activeStep: 0,
                    }
                },
                {
                    path: 'membership', component: FormMembership, meta: {
                        activeStep: 1,
                    }
                },
                {
                    path: 'overview', component: FormOverview, meta: {
                        activeStep: 2,
                    }
                },
            ]
        },
    ],
});

export default router;
