<template>
    <v-container>
        <v-row dense>
            <v-col cols="12">
                <v-card-text>
                    <p class="display-2 text--secondary">
                        Ola {{getNameUser}}, vamos começar...
                    </p>
                </v-card-text>
            </v-col>
            <v-col cols="12" md="6">
                <timer></timer>
            </v-col>

            <v-col cols="12" md="6">
                <form1 v-on:chargeNewTimePomodoro="chargeNewTimePomodoro"></form1>
            </v-col>
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
                nameUser: String
            }
        },
        components: {
            form1: form,
            timer: timer,
        },
        computed: {
            getNameUser() {
                return this.$store.getters.getNameUser;
            }
        },
        methods: {
            chargeNewTimePomodoro() {
                return true;
            }
        }
    }
</script>

<style scoped>

</style>