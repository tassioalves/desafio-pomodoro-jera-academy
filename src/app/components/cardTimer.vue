<template>
    <v-card elevation="10" max-width="500" color="#FFFFFF">
        <timer :time="prettyTime"/>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn rounded color="red" dark class="ma-2" @click="reset">
                Parar
            </v-btn>
            <v-btn rounded color="orange" dark class="ma-2" @click="stop">
                Pausar
            </v-btn>
            <v-btn rounded color="green" dark class="ma-2" @click="start">
                Começar
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import timer from "./timer";

    import sound from '../assets/somNotificação.mp3';

    export default {
        name: "viewTimer",
        components: {
            timer: timer,

        },
        data() {
            return {
                isRunning: false,
                minutes: 0,
                secondes: 0,
                time: 0,
                timer: null,
                sound: new Audio(sound)
            }
        },
        mounted() {
            this.chargeTimePomodoro();
        },
        computed: {
            prettyTime() {
                let time = this.time / 60;
                let minutes = parseInt(time);
                let secondes = Math.round((time - minutes) * 60);
                return minutes + ":" + secondes;
            }
        },
        methods: {
            chargeTimePause() {
                this.minutes = this.$store.getters.getTimePausa;
                this.secondes = this.$store.getters.getSecondPomodoro;
                this.time = (this.minutes * 60 + this.secondes)
            },
            chargeTimePomodoro() {
                this.minutes = this.$store.getters.getTimePomodoro;
                this.secondes = this.$store.getters.getSecondPomodoro;
                this.time = (this.minutes * 60 + this.secondes)
            },
            start() {
                this.isRunning = true;
                if (this.isRunning) {
                    this.timer = setInterval(() => {
                        if (this.time > 0) {
                            this.time--
                        } else {
                            clearInterval(this.timer);
                            this.isRunning = false;

                            let qtdePomodoro = this.$store.getters.getQtdePomodoros;
                            let qtdePausas = this.$store.getters.getQtdePausas;

                            if (qtdePomodoro === qtdePausas) {
                                let proximaPausa = this.$store.getters.getProximaPausa;
                                qtdePomodoro++;
                                if (qtdePomodoro < proximaPausa) {
                                    this.sound.play();
                                    this.$store.commit('setTimePausa', 2);
                                    this.$store.commit('setQtdePomodoros', qtdePomodoro);
                                    this.chargeTimePause();
                                } else {
                                    this.$store.commit('setTimePausa', 3);
                                    this.$store.commit('setProximaPausa', proximaPausa + 4);
                                    this.$store.commit('setQtdePomodoros', qtdePomodoro);
                                    this.chargeTimePause();
                                }
                            } else {
                                this.$store.commit('setQtdePausas', ++qtdePausas);
                                this.chargeTimePomodoro();
                            }

                        }
                    }, 1000)
                }
            },
            stop() {
                this.isRunning = false;
                clearInterval(this.timer);
                this.timer = null
            },
            reset() {
                this.stop();
                this.chargeTimePomodoro();
            },

        },
        filters: {
            prettify: function (value) {
                let data = value.split(':');
                let minutes = data[0];
                let secondes = data[1];
                if (minutes < 10) {
                    minutes = "0" + minutes
                }
                if (secondes < 10) {
                    secondes = "0" + secondes
                }
                return minutes + ":" + secondes
            }
        }
    }
</script>

<style scoped>

</style>