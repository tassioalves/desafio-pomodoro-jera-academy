import Vue from 'vue'
import VueRouter from 'vue-router'
import pomodoro from "../app/view/pomodoro";
import formVisitant from "../app/components/formVisitant";



Vue.use(VueRouter);

const routes = [
    {
        path: '/pomodoro',
        name: 'pomodoro',
        component: pomodoro,
    },
    {
        path: '/',
        name: 'formVis',
        component: formVisitant,
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
export default router