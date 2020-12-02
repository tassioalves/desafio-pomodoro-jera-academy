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
                <card-timer/>
            </v-col>

            <v-col cols="12" md="6">
                <card-form/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import cardTimer from "../components/timer/timer";
    import cardForm from "../components/form/form";

    export default {
        name: "pomodoro",
        data() {
            return {
                nameUser: String
            }
        },
        components: {
            cardForm: cardForm,
            cardTimer: cardTimer,
        },
        computed: {
            getNameUser() {
                return this.$store.getters.getNameUser;
            }
        }
    }
</script>

<style scoped>

</style>