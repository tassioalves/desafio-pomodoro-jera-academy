import Vue from 'vue'
import Vuex from 'vuex'
import controleDadosPomodoro from "./controlDataPomodoro";

Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        controleDadosPomodoro: controleDadosPomodoro
    }
});
export default store;