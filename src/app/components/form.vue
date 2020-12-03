<template>
    <v-card elevation="10" max-width="500" height="240" color="#FFFFFF">
        <div class="container">
            <v-row>
                <v-col cols="6" lg="6">
                    <v-form ref="form">
                        <v-text-field type="time" v-model="newTimePomodoro"
                                      label="Minutos do Pomodoro"></v-text-field>
                        <v-btn rounded small color="green" dark class="float-right" @click="saveNewTimePomodoro">
                            Salvar
                        </v-btn>
                    </v-form>
                </v-col>
                <v-col cols="6" lg="6" class="display-1">
                    Pomodoros: {{pomodoros}} <br>
                    Pausas: {{pauses}} <br>
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
                newTimePomodoro: Object
            }
        },
        methods: {
            saveNewTimePomodoro() {
                this.$store.commit('setTimePomodoro', this.newTimePomodoro);
                this.newTimePomodoro = Object;
            }
        },
        computed: {
            pauses() {
                return this.$store.getters.getQtdePauses;
            },
            pomodoros() {
                return this.$store.getters.getQtdePomodoros;
            }
        }
    }
</script>

<style scoped>

</style>