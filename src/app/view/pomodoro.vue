<template>
        <v-container>
            <v-row dense>
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
    import cardTimer from "../components/cardTimer";
    import cardForm from "../components/cardForm";


    export default {
        name: "pomodoro",
        data() {
            return {}
        },
        components:{
            cardForm: cardForm,
            cardTimer:cardTimer
        }
    }
</script>

<style scoped>

</style>