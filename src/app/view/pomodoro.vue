import Push from "push.js";
<template>
    <v-container>
        <v-row dense>
            <v-col cols="12" md="12">
                <v-card-text align="center">
                    <p class="display-3 text--secondary">
                        Timer Pomodoro - Jera Academy
                    </p>
                    <v-divider class="v-divider"></v-divider>
                </v-card-text>
            </v-col>
        </v-row>

        <v-row dense>
            <v-col cols="12" md="6">
                <timer ref="Timer"></timer>
            </v-col>

            <v-col cols="12" md="6">
                <formm v-on:chargeNewTimePomodoro="chargeNewTime"></formm>
            </v-col>

            <v-card-text align="center">
                <p class="display-2 text--secondary">
                    {{executeBigPause}}
                </p>
            </v-card-text>
        </v-row>
    </v-container>
</template>

<script>
    import Timer from "../components/timer";
    import Formm from "../components/form";

    export default {
        name: "pomodoro",
        data() {
            return {
                newTime: String
            }
        },
        components: {
            Formm,
            Timer
        },
        computed: {
            executeBigPause() {
                let qtdePomodoros = this.$store.getters.getQtdePomodoros;
                let nextPause = this.$store.getters.getNextPause;
                if (qtdePomodoros === nextPause) {
                    this.$store.commit('setNextPause', nextPause + 4);
                    alert("É HORA DE FAZER UMA PAUSA MAIOR, VOCÊ ESTÁ A MUITO TEMPO TRABALHANDO!");
                    return;
                } else {
                    return "";
                }
            }
        },
        methods: {
            chargeNewTime() {
                this.$refs.Timer.chargeNewTimePomodoro();
            }
        }
    }
</script>

<style scoped>

</style>