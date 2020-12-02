import Vue from 'vue'
import VueRouter from 'vue-router'
import pomodoro from "../app/view/pomodoro";
import formVisitant from "../app/components/formVisitant/formVisitant";



Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'pomodoro',
        component: pomodoro,
    },
    {
        path: '/1',
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