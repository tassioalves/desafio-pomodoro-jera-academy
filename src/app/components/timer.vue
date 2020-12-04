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
                <v-btn rounded color="orange" v-if="!isRunningButtonPause" dark class="ma-2" @click="pause"> Pausar
                </v-btn>
                <v-btn rounded color="green" v-if="isRunningButtonPause" dark class="ma-2" @click="startTime"> Começar
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
                isRunningPomodoro: false,
                isRunningPause: false,
                isRunningLongPause: false,
                isPomodoro: false,
                isPause: false,
                isLongPause: false,
                isRunningButtonPause: true,
                mostrarTimer: ""
            }
        },
        props: {},
        mounted() {
            this.setPomodoro();
        },
        computed: {
            showButtonPomodoro() {
                return this.isRunningPause || this.isRunningLongPause;
            },
            showButtonPause() {
                return this.isRunningLongPause || this.isRunningPomodoro;
            },
            showButtonLongPause() {
                return this.isRunningPomodoro || this.isRunningPause;
            }

        },
        methods: {
            startTime() {
                this.isRunningButtonPause = false;
                this.$store.commit('setIsRunning', true);

                if (this.isPomodoro) {
                    this.isRunningPomodoro = true;
                } else if (this.isPause) {
                    this.isRunningPause = true;
                } else if (this.isLongPause) {
                    this.isRunningLongPause = true;
                }

                this.easyTimer.start();

                //EXECUTA DURANTE A CONTAGEM!
                this.easyTimer.addEventListener('secondsUpdated', () => {
                    this.mostrarTimer = this.easyTimer.getTimeValues().toString(['minutes', 'seconds']);
                });

                //EXECUTA QUANDO O TEMPO ACABAR!
                this.easyTimer.addEventListener('targetAchieved', () => {
                    this.notification();

                    //VERIFICA QUAL TIMER ACABOU DE SER EXECUTADO!
                    if (this.isRunningPomodoro) {
                        this.commitPomodoro();
                    } else {
                        this.commitPause();
                    }


                });
            },
            pause() {
                this.easyTimer.pause();
                this.isRunningButtonPause = true;
            },
            stop() {
                this.isRunningButtonPause = true;
                this.easyTimer.stop();
                this.$store.commit('setIsRunning', false);
                this.isRunningPomodoro = false;
                this.isRunningPause = false;
                this.isRunningLongPause = false;
                this.setPomodoro()
            },
            setPomodoro() {
                if (this.isRunningPomodoro) {
                    return;
                }
                this.isPomodoro = true;
                this.isPause = false;
                this.isLongPause = false;
                this.isRunningButtonPause = true;
                let time = this.$store.getters.getTimePomodoro;
                let split = time.split(':');
                this.easyTimer = new Timer({
                    countdown: true,
                    startValues: {minutes: parseInt(split[0]), seconds: parseInt(split[1])}
                });
                this.mostrarTimer = this.easyTimer.getTimeValues().toString(['minutes', 'seconds']);
            },
            setPause() {
                if (this.isRunningPause) {
                    return;
                }
                this.isPause = true;
                this.isPomodoro = false;
                this.isLongPause = false;
                this.isRunningButtonPause = true;
                let time = this.$store.getters.getTimePause;
                let split = time.split(':');
                this.easyTimer = new Timer({
                    countdown: true,
                    startValues: {minutes: parseInt(split[0]), seconds: parseInt(split[1])}
                });
                this.mostrarTimer = this.easyTimer.getTimeValues().toString(['minutes', 'seconds']);
            },
            setLongPause() {
                if (this.isRunningLongPause) {
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
                this.isRunningPomodoro = false;
                let qtdePomodoros = this.$store.getters.getQtdePomodoros;
                this.$store.commit('setQtdePomodoros', ++qtdePomodoros);
                this.$store.commit('setIsRunning', false);
                this.setPomodoro();
            },
            commitPause() {
                this.isRunningPause = false;
                this.isRunningLongPause = false;
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
                    timeout: 5000,
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