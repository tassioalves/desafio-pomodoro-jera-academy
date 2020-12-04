<template>
    <v-card elevation="10" max-width="800" color="#FFFFFF">
        <div class="text-center">
            <v-btn :disabled="showButtonPomodoro" @click="setPomodoro" class="ma-2"
                   color="primary"
                   :outlined="!isPomodoro"
                   rounded>
                Pomodoro
            </v-btn>
            <v-btn :disabled="showButtonPause" @click="setPause" class="ma-2"
                   color="primary"
                   :outlined="!isPause"
                   rounded>
                Pausa
            </v-btn>
            <v-btn :disabled="showButtonLongPause" @click="setLongPause" class="ma-2"
                   color="primary"
                   :outlined="!isLongPause"
                   rounded>
                Longa Pausa
            </v-btn>
            <v-card-text align="center" class="display-4">
                {{mostrarTimer}}
            </v-card-text>
            <div class="ma-6">
                <v-btn rounded color="red" dark class="ma-2" @click="stop"> Parar</v-btn>
                <v-btn rounded color="orange" v-if="showButtonStart" dark class="ma-2" @click="pause"> Pausar
                </v-btn>
                <v-btn rounded color="green" v-if="!showButtonStart" dark class="ma-2" @click="startTime"> Começar
                </v-btn>
            </div>
        </div>
    </v-card>
</template>

<script>
    import iconPomodoro from '../assets/iconPomodoro.png';
    import Push from 'push.js';
    import Timer from 'easytimer.js';

    export default {
        name: "Timer",
        components: {},
        data() {
            return {
                isPomodoro: false,
                isPause: false,
                isLongPause: false,
                isRunningTime: false,
                showButtonStart: false,
                mostrarTimer: ""
            }
        },
        props: {},
        mounted() {
            this.setPomodoro();
        },
        computed: {
            showButtonPomodoro() {
                return this.isRunningTime && this.isPomodoro === false;
            },
            showButtonPause() {
                return this.isRunningTime && this.isPause === false;
            },
            showButtonLongPause() {
                return this.isRunningTime && this.isLongPause === false;
            }
        },
        methods: {
            startTime() {
                this.isRunningTime = true;
                this.showButtonStart = true;
                this.$store.commit('setIsRunning', true);
                this.easyTimer.start();

                //EXECUTA DURANTE A CONTAGEM!
                this.easyTimer.addEventListener('secondsUpdated', () => {
                    this.mostrarTimer = this.easyTimer.getTimeValues().toString(['minutes', 'seconds']);
                });

                //EXECUTA QUANDO O TEMPO ACABAR!
                this.easyTimer.addEventListener('targetAchieved', () => {
                    this.notification();
                    this.isRunningTime = false;
                    this.showButtonStart = false;

                    //VERIFICA QUAL TIMER ACABOU DE SER EXECUTADO!
                    if (this.isPomodoro) {
                        this.commitPomodoro();
                    } else {
                        this.commitPause();
                    }
                });
            },
            pause() {
                this.easyTimer.pause();
                this.showButtonStart = false;
            },
            stop() {
                this.isRunningTime = false;
                this.showButtonStart = false;
                this.easyTimer.stop();
                this.$store.commit('setIsRunning', false);
                this.isPomodoro = false;
                this.isPause = false;
                this.isPause = false;
                this.setPomodoro()
            },
            setPomodoro() {
                if (this.isPomodoro && this.isRunningTime) {
                    return;
                }
                this.isPomodoro = true;
                this.isPause = false;
                this.isLongPause = false;
                let time = this.$store.getters.getTimePomodoro;
                let split = time.split(':');
                this.easyTimer = new Timer({
                    countdown: true,
                    startValues: {minutes: parseInt(split[0]), seconds: parseInt(split[1])}
                });
                this.mostrarTimer = this.easyTimer.getTimeValues().toString(['minutes', 'seconds']);
            },
            setPause() {
                if (this.isPause && this.isRunningTime) {
                    return;
                }
                this.isPause = true;
                this.isPomodoro = false;
                this.isLongPause = false;
                let time = this.$store.getters.getTimePause;
                let split = time.split(':');
                this.easyTimer = new Timer({
                    countdown: true,
                    startValues: {minutes: parseInt(split[0]), seconds: parseInt(split[1])}
                });
                this.mostrarTimer = this.easyTimer.getTimeValues().toString(['minutes', 'seconds']);
            },
            setLongPause() {
                if (this.isLongPause && this.isRunningTime) {
                    return;
                }
                this.isLongPause = true;
                this.isPause = false;
                this.isPomodoro = false;
                let time = this.$store.getters.getTimeLongPause;
                let split = time.split(':');
                this.easyTimer = new Timer({
                    countdown: true,
                    startValues: {minutes: parseInt(split[0]), seconds: parseInt(split[1])}
                });
                this.mostrarTimer = this.easyTimer.getTimeValues().toString(['minutes', 'seconds']);
            },
            commitPomodoro() {
                let qtdePomodoros = this.$store.getters.getQtdePomodoros;
                this.$store.commit('setQtdePomodoros', ++qtdePomodoros);
                this.$store.commit('setIsRunning', false);
                this.setPomodoro();
            },
            commitPause() {
                this.isPause = false;
                this.isLongPause = false;
                let qtdePauses = this.$store.getters.getQtdePauses;
                this.$store.commit('setQtdePauses', ++qtdePauses);
                this.$store.commit('setIsRunning', false);
                this.setPomodoro()
            },
            chargeNewTimePomodoro() {
                this.setPomodoro();
            },
            notification() {
                Push.create("SEU TEMPO ACABOU!", {
                    body: "Realize suas tarefas de uma forma mais organizada!",
                    icon: iconPomodoro,
                    timeout: 2500,
                    onClick: function () {
                        window.focus();
                        this.close();
                    }
                });
            }
        }
    }
</script>
<style scoped>

</style>