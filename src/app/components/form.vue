<template>
    <v-card elevation="10" max-width="800" color="#FFFFFF" class="pa-2">
        <v-row dense class="pa-md-5 mx-lg-auto">
            <v-col cols="12" md="12">
                <v-form ref="form">
                    <v-text-field type="time" v-model="newTimePomodoro"
                                  label="Minutos do Pomodoro"></v-text-field>
                    <v-btn rounded color="green" dark class="float-right" :disabled="show"
                           @click="saveNewTimePomodoro">
                        Salvar
                    </v-btn>
                </v-form>
            </v-col>
            <v-col cols="12" md="12" class="display-1">
                Pomodoros hoje: {{qtdePomodoros}} <br>
                Pausas hoje: {{qtdePauses}} <br>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        name: "formm",
        data() {
            return {
                newTimePomodoro: Object
            }
        },
        methods: {
            saveNewTimePomodoro() {
                this.$store.commit('setTimePomodoro', this.newTimePomodoro);
                this.newTimePomodoro = Object;
                this.$emit('chargeNewTimePomodoro');
            }
        },
        computed: {
            qtdePauses() {
                return this.$store.getters.getQtdePauses;
            },
            qtdePomodoros() {
                return this.$store.getters.getQtdePomodoros;
            },
            show() {
                return this.$store.getters.getIsRunning;
            }
        }
    }
</script>

<style scoped>

</style>