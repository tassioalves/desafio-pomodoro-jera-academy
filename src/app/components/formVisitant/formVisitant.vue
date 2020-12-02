<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="12" md="8">

                <h1>Digite seu nome para começar!</h1>
                <v-form
                        ref="form"
                        lazy-validation
                >
                    <v-text-field
                            v-model="nameVisitant"
                            label="Name"
                            required
                    ></v-text-field>

                    <v-btn
                            @click="saveUser"
                            color="green"
                            dark
                    >
                        COMEÇAR
                    </v-btn>


                </v-form>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>

    export default {
        name: "formVisitant",
        data() {
            return {
                nameVisitant: null
            }
        },
        methods: {
            saveUser() {
                if (this.nameVisitant === null) {
                    this.$router.push("/pomodoro");
                } else {
                    this.$store.commit('setNameUser', this.nameVisitant);
                    this.$router.push("/pomodoro");
                }
            }
        }
    }
</script>

<style scoped>

</style>