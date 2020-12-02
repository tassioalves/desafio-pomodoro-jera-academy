<template>
    <v-card elevation="10" max-width="500" height="220" color="#FFFFFF">
        <v-card-text align="center">
            <v-col class="display-4" cols="12">
                {{ timeFormat}}
            </v-col>

        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn rounded color="red" dark class="ma-2" @click="reset"> Parar</v-btn>
            <v-btn rounded color="orange" dark class="ma-2" @click="stop"> Pausar</v-btn>
            <v-btn rounded color="green" dark class="ma-2" @click="start"> Começar</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import sound from '../../assets/coock.mp3';

    export default {
        name: "viewTimer",
        components: {},
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
            }
        },
        methods: {
            chargeTimePomodoro() {
                let timePomodoro = this.$store.getters.getTimePomodoro;
                let split = timePomodoro.split(':');
                this.minutes = split[0];
                this.secondes = split[1];
                this.time = ((parseInt(this.minutes) * 60) + parseInt(this.secondes))
            },
            chargeTimePause() {
                let timePausa = this.$store.getters.getTimePause;
                let split = timePausa.split(':');
                this.minutes = split[0];
                this.secondes = split[1];
                this.time = ((parseInt(this.minutes) * 60) + parseInt(this.secondes))
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
                            this.sound.play();

                            let qtdePomodoro = this.$store.getters.getQtdePomodoros;
                            let qtdePauses = this.$store.getters.getQtdePauses;

                            if (qtdePomodoro === qtdePauses) {
                                let nextPause = this.$store.getters.getNextPause;
                                this.$store.commit('setQtdePomodoros', ++qtdePomodoro);
                                if (qtdePomodoro < nextPause) {
                                    this.chargeTimePause();
                                } else {
                                    this.$store.commit('setTimePause', "00:0" + nextPause);
                                    this.$store.commit('setNextPause', nextPause + 4);
                                    this.chargeTimePause();
                                }
                            } else {
                                this.$store.commit('setQtdePauses', ++qtdePauses);
                                this.$store.commit('setTimePause', "00:02");
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
        }
    }
</script>

<style scoped>

</style>