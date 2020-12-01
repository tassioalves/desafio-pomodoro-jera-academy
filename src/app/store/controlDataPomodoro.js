export default {
    state: {
        nameUser: "Visitante",
        timePomodoro: 1,
        secondPomodoro: 0,
        timePausa: 2,
        proximaPausa:4,
        qtdePomodoros: 0,
        qtdePausas: 0
    },
    getters: {
        getNameUser: (state) => {
            return state.nameUser;
        },
        getTimePomodoro: (state) => {
            return state.timePomodoro;
        },
        getSecondPomodoro: (state) => {
            return state.secondPomodoro;
        },
        getTimePausa: (state) => {
            return state.timePausa;
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
        setTimePomodoro: (state, timePomodoro) => {
            state.timePomodoro = timePomodoro;
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
        setTimePomodoro({commit}, timePomodoro) {
            commit('setTimePomodoro', timePomodoro);
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