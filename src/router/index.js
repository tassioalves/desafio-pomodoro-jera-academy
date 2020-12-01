import Vue from 'vue'
import VueRouter from 'vue-router'
//import cardTimer from '../app/components/cardTimer'
import pomodoro from "../app/view/pomodoro";



Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'pomodoro',
        component: pomodoro,
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
export default router