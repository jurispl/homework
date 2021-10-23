import {createRouter, createWebHistory} from 'vue-router'
import Mockup from "@/views/Mockup";
import FormOverview from "@/views/FormOverview";
import FormPersonalInfo from "@/views/FormPersonalInfo";
import FormMembership from "@/views/FormMembership";
// createMemoryHistory
// createWebHashHistory
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/mockup', component: Mockup},
        {path: '/form/personal', component: FormPersonalInfo, alias: '/'},
        {path: '/form/membership', component: FormMembership},
        {path: '/form/overview', component: FormOverview},
    ],
});

export default router;
