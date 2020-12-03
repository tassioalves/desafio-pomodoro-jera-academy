export default {
    state: {
        nameUser: "Visitante",
        timePomodoro: "25:00",
        timePause: "05:00",
        nextPause: 4,
        qtdePomodoros: "0",
        qtdePauses: "0"
    },
    getters: {
        getNameUser: (state) => {
            return state.nameUser;
        },
        getTimePomodoro: (state) => {
            return state.timePomodoro;
        },
        getTimePause: (state) => {
            return state.timePause;
        },
        getNextPause: (state) => {
            return state.nextPause;
        },
        getQtdePomodoros: (state) => {
            return state.qtdePomodoros;
        },
        getQtdePauses: (state) => {
            return state.qtdePauses;
        }
    },
    mutations: {
        setNameUser: (state, nameUser) => {
            state.nameUser = nameUser;
        },
        setTimePomodoro: (state, timePomodoro) => {
            state.timePomodoro = timePomodoro;
        },
        setTimePause: (state, timePause) => {
            state.timePause = timePause;
        },
        setNextPause: (state, nextPause) => {
            state.nextPause = nextPause;
        },
        setQtdePomodoros: (state, qtdePomodoros) => {
            state.qtdePomodoros = qtdePomodoros;
        },
        setQtdePauses: (state, qtdePauses) => {
            state.qtdePauses = qtdePauses;
        }
    },
    actions: {
        setNameUser({commit}, nameUser) {
            commit('setNameUser', nameUser);
        },
        setTimePomodoro({commit}, timePomodoro) {
            commit('setTimePomodoro', timePomodoro);
        },
        setTimePause({commit}, timePause) {
            commit('setTimePause', timePause);
        },
        setNextPause({commit}, nextPause) {
            commit('setNextPause', nextPause);
        },
        setQtdePomodoros({commit}, qtdePomodoros) {
            commit('setQtdePomodoros', qtdePomodoros);
        },
        setQtdePauses({commit}, qtdePausas) {
            commit('setQtdePausas', qtdePausas)
        }
    }
};