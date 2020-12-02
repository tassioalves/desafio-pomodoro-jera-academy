<template>
    <v-card elevation="10" max-width="500" height="220" color="#FFFFFF">
        <div class="container">
            <v-row>
                <v-col cols="12" md="6">
                    <v-form ref="form">
                        <v-text-field type="time" v-model="newMinutePomodoro"
                                      label="Minutos do Pomodoro"></v-text-field>
                        <v-btn rounded small color="green" dark class="float-right" @click="saveNewTimePomodoro">
                            Salvar
                        </v-btn>
                    </v-form>
                </v-col>
                <v-col cols="12" md="6">
                        Pomodoros: {{pomodoros}} <br>
                        Pausas: {{pauses}} <br>
                        Proxima Pausa: {{nextPause}} <br>
                </v-col>
            </v-row>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: "formm",
        data() {
            return {
                newMinutePomodoro: Object,
                newSecondPomodoro: Object
            }
        },
        methods: {
            saveNewTimePomodoro() {
                this.$store.commit('setMinutePomodoro', this.newMinutePomodoro);
                this.$store.commit('setSecondPomodoro', this.newSecondPomodoro);
                this.newMinutePomodoro = Object;
                this.newSecondPomodoro = Object;
            }
        },
        computed: {
            pauses() {
                return this.$store.getters.getQtdePauses;
            },
            pomodoros() {
                return this.$store.getters.getQtdePomodoros;
            },
            nextPause() {
                return this.$store.getters.getNextPause;
            }
        }
    }
</script>

<style scoped>
    .container {
        margin: 0px;
    }
</style>