<template>
    <v-card elevation="10" max-width="800" color="#FFFFFF">
        <div class="text-center">
            <v-btn :disabled="showButtonPomodoro" @click="setPomodoro" class="ma-2"
                   color="primary"
                   outlined rounded>
                Pomodoro
            </v-btn>
            <v-btn :disabled="showButtonPause" @click="setPause" class="ma-2"
                   color="primary"
                   outlined rounded>
                Pausa
            </v-btn>
            <v-btn :disabled="showButtonLongPause" @click="setLongPause" class="ma-2"
                   color="primary"
                   outlined rounded>
                Longa Pausa
            </v-btn>
            <v-card-text align="center" class="display-4">
                {{ timeFormat}}

            </v-card-text>
            <div class="ma-6">
                <v-btn rounded color="red" dark class="ma-2" @click="stop"> Parar</v-btn>
                <v-btn rounded color="orange" v-if="isRunning" dark class="ma-2" @click="pause"> Pausar</v-btn>
                <v-btn rounded color="green" v-if="!isRunning" dark class="ma-2" @click="start"> Começar</v-btn>
            </div>
        </div>
    </v-card>
</template>

<script>
    import iconPomodoro from '../assets/iconPomodoro.png';
    import Push from 'push.js';

    export default {
        name: "Timer",
        components: {},
        data() {
            return {
                isRunning: false,
                isRunningPomodoro: false,
                isRunningPause: false,
                isRunningLongPause: false,
                isPomodoro: false,
                isPause: false,
                isLongPause: false,
                timeInSeconds: 0,
                timerInterval: null
            }
        },
        props: {},
        mounted() {
            this.setPomodoro();
        },
        computed: {
            timeFormat() {
                let time = this.timeInSeconds / 60;
                let minutes = parseInt(time);
                let secondes = Math.round((time - minutes) * 60);
                if (minutes < 10) {
                    minutes = "0" + minutes
                }
                if (secondes < 10) {
                    secondes = "0" + secondes
                }
                return minutes + ":" + secondes
            },
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
            start() {
                this.isRunning = true;
                this.$store.commit('setIsRunning', true);

                if (!this.timerInterval) {

                    //Verifica qual Time será executado
                    if (this.isPomodoro) {
                        this.isRunningPomodoro = true;
                    } else if (this.isPause) {
                        this.isRunningPause = true;
                    } else if (this.isLongPause) {
                        this.isRunningLongPause = true;
                    }

                    this.timerInterval = setInterval(() => {
                        if (this.timeInSeconds > 0) {
                            this.timeInSeconds--
                        } else {
                            //Verifica qual Time acabou de ser executado.
                            if (this.isRunningPomodoro) {
                                this.commitPomodoro();
                            } else if (this.isRunningPause) {
                                this.commitPause();
                            } else {
                                this.commitPause();
                            }
                            this.endTime();
                        }
                    }, 1000);
                }
            },
            pause() {
                this.isRunning = false;
                clearInterval(this.timerInterval);
                this.timerInterval = null
            },
            stop() {
                this.pause();
                this.isRunning = false;
                this.isRunningPomodoro = false;
                this.isRunningPause = false;
                this.isRunningLongPause = false;
                this.$store.commit('setIsRunning', false);
                this.setPomodoro()
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
            },
            setPomodoro() {
                if (this.isRunningPomodoro) {
                    return;
                }
                this.isPomodoro = true;
                this.isPause = false;
                this.isLongPause = false;
                this.formaterInSecondes(this.$store.getters.getTimePomodoro);
            },
            setPause() {
                if (this.isRunningPause) {
                    return;
                }
                this.isPause = true;
                this.isPomodoro = false;
                this.isLongPause = false;
                this.formaterInSecondes(this.$store.getters.getTimePause);
            },
            setLongPause() {
                if (this.isRunningLongPause) {
                    return;
                }
                this.isLongPause = true;
                this.isPause = false;
                this.isPomodoro = false;
                this.formaterInSecondes(this.$store.getters.getTimeLongPause);
            },
            formaterInSecondes(time) {
                let split = time.split(':');
                let minutes = split[0];
                let secondes = split[1];
                this.timeInSeconds = ((parseInt(minutes) * 60) + parseInt(secondes))
            },
            endTime() {
                this.notification();
                clearInterval(this.timerInterval);
                this.stop();
                this.isRunning = false;
                this.$store.commit('setIsRunning', false);
            },
            chargeNewTimePomodoro() {
                this.setPomodoro();
            },
            commitPomodoro() {
                this.isRunningPomodoro = false;
                let qtdePomodoros = this.$store.getters.getQtdePomodoros;
                this.$store.commit('setQtdePomodoros', ++qtdePomodoros);
                this.setPomodoro();
            },
            commitPause() {
                this.isRunningPause = false;
                this.isRunningLongPause = false;
                let qtdePauses = this.$store.getters.getQtdePauses;
                this.$store.commit('setQtdePauses', ++qtdePauses);
                this.setPomodoro()
            }
        }
    }
</script>
<style scoped>

</style>