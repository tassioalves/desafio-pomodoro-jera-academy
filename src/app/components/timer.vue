<template>
    <v-card elevation="10" max-width="500" height="240" color="#FFFFFF">

        <v-btn v-if="showButtonPomodoro" depressed class="ma-2" @click="setPomodoro">Pomodoro</v-btn>
        <v-btn v-if="showButtonPause" depressed class="ma-2" @click="setPause">Pausa</v-btn>

        <v-card-text align="center" class="display-4">
            {{ timeFormat}}
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn rounded color="red" dark class="ma-2" @click="reset"> Parar</v-btn>
            <v-btn rounded color="orange" v-if="isRunning" dark class="ma-2" @click="stop"> Pausar</v-btn>
            <v-btn rounded color="green" v-if="!isRunning" dark class="ma-2" @click="start"> Começar</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import iconPomodoro from '../assets/iconPomodoro.png';
    import Push from 'push.js';

    export default {
        name: "viewTimer",
        components: {},
        data() {
            return {
                isRunning: false,
                isRunningPomodoro: false,
                isRunningPause: false,
                minutes: 0,
                secondes: 0,
                time: 0,
                timer: null
            }
        },
        mounted() {
            this.setPomodoro();
        },
        computed: {
            timeFormat() {
                let time = this.time / 60;
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
                return !(this.isRunning && this.isRunningPause);
            },
            showButtonPause() {
                return !(this.isRunning && this.isRunningPomodoro);
            }
        },
        methods: {
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
            start() {
                this.isRunning = true;
                if (!this.timer) {
                    if (this.isRunningPomodoro) {
                        this.timer = setInterval(() => {
                            if (this.time > 0) {
                                this.time--
                            } else {
                                clearInterval(this.timer);
                                this.isRunning = false;
                                this.isRunningPomodoro = false;
                                this.notification();
                                this.stop();

                                let qtdePomodoros = this.$store.getters.getQtdePomodoros;
                                this.$store.commit('setQtdePomodoros', ++qtdePomodoros);
                                this.setPomodoro();

                            }
                        }, 1000);
                    } else if (this.isRunningPause) {
                        this.timer = setInterval(() => {
                            if (this.time > 0) {
                                this.time--
                            } else {
                                clearInterval(this.timer);
                                this.isRunning = false;
                                this.isRunningPause = false;
                                this.notification();
                                this.stop();

                                let qtdePauses = this.$store.getters.getQtdePauses;
                                this.$store.commit('setQtdePauses', ++qtdePauses);

                                //Se estiver acabado de executar uma pausa prolongada
                                if (this.$store.getters.getTimePause === "10:00") {
                                    let nextPause = this.$store.getters.getNextPause;
                                    this.$store.commit('setNextPause', nextPause + 4);
                                    this.$store.commit('setTimePause', "05:00");
                                }
                                this.setPause();
                            }
                        }, 1000);
                    }
                }
            }, stop() {
                this.isRunning = false;
                clearInterval(this.timer);
                this.timer = null
            },
            reset() {
                this.stop();
                if (this.isRunningPomodoro) {
                    this.setPomodoro()
                } else if (this.isRunningPause) {
                    this.setPause();
                }
            },
            setPomodoro() {
                this.isRunningPomodoro = true;
                this.isRunningPause = false;
                let timePomodoro = this.$store.getters.getTimePomodoro;
                let split = timePomodoro.split(':');
                this.minutes = split[0];
                this.secondes = split[1];
                this.time = ((parseInt(this.minutes) * 60) + parseInt(this.secondes))
            },
            setPause() {
                this.isRunningPause = true;
                this.isRunningPomodoro = false;
                let timePausa = this.$store.getters.getTimePause;
                let split = timePausa.split(':');
                this.minutes = split[0];
                this.secondes = split[1];
                this.time = ((parseInt(this.minutes) * 60) + parseInt(this.secondes))
            }
        }
    }
</script>
<style scoped>

</style>