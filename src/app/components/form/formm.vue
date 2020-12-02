<template>
    <v-container fluid class="container">
        <v-row justify="space-between">
            <v-col cols="12" md="6">
                <v-form ref="form">
                    <v-text-field type="time" v-model="newMinutePomodoro" label="Minutos do Pomodoro"></v-text-field>
<!--                    <v-text-field type="time" v-model="newSecondPomodoro" label="Segundos do Pomodoro"></v-text-field>-->
                    <v-btn rounded small color="green" dark class="float-right" @click="saveNewTimePomodoro">
                        Salvar
                    </v-btn>
                </v-form>
            </v-col>

            <v-col cols="12" md="6">
                <p class="text--secondary">
                Pausas: {{pausas}} <br>
                Meus Pomodoros: {{pomodoros}} <br>
                Proxima Pausa: {{proximaPausas}} <br>
                Minutos Pomodoro: {{minutePomodoro}}<br>
<!--                Segundos Pomodoro: {{secondPomodoro}}<br>-->
                Tempo pausa: {{tempoPausa}}
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "formm",
        data() {
            return {
                newMinutePomodoro:Object,
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
            pausas() {
                return this.$store.getters.getQtdePausas;
            },
            pomodoros() {
                return this.$store.getters.getQtdePomodoros;
            },
            proximaPausas() {
                return this.$store.getters.getProximaPausa;
            },
            minutePomodoro() {
                return this.$store.getters.getMinutePomodoro;
            },
            tempoPausa() {
                return this.$store.getters.getTimePausa;
            },
            secondPomodoro() {
                return this.$store.getters.getSecondPomodoro;
            }
        }
    }
</script>

<style scoped>
.container{
    margin: 0px;
}
</style>