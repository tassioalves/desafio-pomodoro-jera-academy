<template>
    <v-container>
        <v-row justify="space-between">
            <v-col cols="12" md="6">
                <v-form ref="form">
                    <v-text-field v-model="newTimePomodoro" label="Definir Tempo do Pomodoro"
                    ></v-text-field>
                    Pausas: {{pausas}} <br>
                    Pomodoros: {{pomodoros}} <br>
                    Proxima Pausa: {{proximaPausas}} <br>
                    Tempo pomodoro: {{tempoPomodoro}}<br>
                    tempo pausa: {{tempoPausa}}
                </v-form>
            </v-col>

            <v-col cols="12" md="6">
                <v-btn rounded color="green" dark class="ma-2" @click="saveNewTimePomodoro">
                    Salvar
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "formm",
        data() {
            return {
                newTimePomodoro: null
            }
        },
        methods: {
            saveNewTimePomodoro() {
                this.$store.commit('setTimePomodoro', this.newTimePomodoro);
                this.newTimePomodoro = null;
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
            tempoPomodoro(){
                return this.$store.getters.getTimePomodoro;
            },
            tempoPausa(){
                return this.$store.getters.getTimePausa;
            }
        }
    }
</script>

<style scoped>

</style>