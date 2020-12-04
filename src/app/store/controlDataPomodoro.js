export default {
    state: {
        timePomodoro: "00:05",
        timePause: "00:02",
        timeLongPause: "00:04",
        nextPause: 4,
        qtdePomodoros: 0,
        qtdePauses: 0,
        isRunning: false
    },
    getters: {
        getTimeLongPause: (state) => {
            return state.timeLongPause;
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
        },
        getIsRunning:(state)=>{
            return state.isRunning;
        }
    },
    mutations: {
        setTimeLongPause: (state, timeLongPause) => {
            state.timeLongPause = timeLongPause;
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
        },
        setIsRunning:(state, isRunning)=>{
            state.isRunning = isRunning;
        }
    },
    actions: {
        setTimeLongPause({commit}, timeLongPause) {
            commit('setTimeLongPause', timeLongPause);
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
        },
        setIsRunning:({commit}, isRunning)=>{
            commit('setIsRunning', isRunning)
        }
    }
};