<template>
    <v-container>
        <v-row dense>
            <v-col cols="12" md="12">
                <v-card-text>
                    <p class="display-2 text--secondary">
                        Ola {{getNameUser}}, vamos começar...
                    </p>
                </v-card-text>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col cols="12" md="6">
                <timer></timer>
            </v-col>

            <v-col cols="12" md="6">
                <form1></form1>
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
    import timer from "../components/timer";
    import form from "../components/form";

    export default {
        name: "pomodoro",
        data() {
            return {
                nameUser: String,
            }
        },
        components: {
            form1: form,
            timer: timer,
        },
        computed: {
            getNameUser() {
                return this.$store.getters.getNameUser;
            },
            executeBigPause() {
                let qtdePomodoros = this.$store.getters.getQtdePomodoros;
                let nextPause = this.$store.getters.getNextPause;
                if (qtdePomodoros === nextPause) {
                    this.$store.commit('setTimePause', "10:00");
                    return "É hora de você fazer uma pausa maior. Vá ao banheiro e tome uma água!"
                } else {
                    return "";
                }
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>