export default {
    state: {
        nameUser: "Visitante",
        minutePomodoro: "00:05",
        secondPomodoro: 0,
        timePausa: "00:02",
        timePauseBig:"00:10",
        proximaPausa:4,
        qtdePomodoros: "0",
        qtdePausas: "0"
    },
    getters: {
        getNameUser: (state) => {
            return state.nameUser;
        },
        getMinutePomodoro: (state) => {
            return state.minutePomodoro;
        },
        getSecondPomodoro: (state) => {
            return state.secondPomodoro;
        },
        getTimePausa: (state) => {
            return state.timePausa;
        },
        gettimePauseBig:(state)=>{
          return state.timePauseBig;
        },
        getProximaPausa:(state)=>{
          return state.proximaPausa;
        },
        getQtdePomodoros: (state) => {
            return state.qtdePomodoros;
        },
        getQtdePausas: (state) => {
            return state.qtdePausas;
        }
    },
    mutations: {
        setNameUser: (state, nameUser) => {
            state.nameUser = nameUser;
        },
        setMinutePomodoro: (state, minutePomodoro) => {
            state.minutePomodoro = minutePomodoro;
        },
        setSecondPomodoro: (state, secondPomodoro) => {
            state.secondPomodoro = secondPomodoro;
        },
        setTimePausa: (state, timePausa) => {
            state.timePausa = timePausa;
        },
        setProximaPausa:(state, proximaPausa)=>{
          state.proximaPausa = proximaPausa;
        },
        setQtdePomodoros: (state, qtdePomodoros) => {
            state.qtdePomodoros = qtdePomodoros;
        },
        setQtdePausas: (state, qtdePausas) => {
            state.qtdePausas = qtdePausas;
        }
    },
    actions: {
        setNameUser({commit}, nameUser) {
            commit('setNameUser', nameUser);
        },
        setMinutePomodoro({commit}, minutePomodoro) {
            commit('setMinutePomodoro', minutePomodoro);
        },
        setSecondPomodoro({commit}, secondPomodoro) {
            commit('setSecondPomodoro', secondPomodoro);
        },
        setTimePausa({commit}, timePausa) {
            commit('setTimePausa', timePausa);
        },
        setProximaPausa({commit}, proximaPausa){
            commit('setProximaPausa', proximaPausa);
        },
        setQtdePomodoros({commit}, qtdePomodoros) {
            commit('setQtdePomodoros', qtdePomodoros);
        },
        setQtdePausas({commit}, qtdePausas) {
            commit('setQtdePausas', qtdePausas)
        }
    }
};