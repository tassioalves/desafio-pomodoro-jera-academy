<template>
    <div>
        <v-app-bar app clipped-left color="#20B2AA" height="100" absolute>
            <v-row align-content="center">
                <v-col cols="12" md="6">
                    <h3 class="title text--secondary">Jera Academy</h3>
                   <h1 class="display-2 text--secondary">DESAFIO POMODORO</h1>
                </v-col>
            </v-row>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "app-menu",
        components: {},
        data() {
            return {
                drawer: true
            }
        }
    }
</script>
<style scoped>

</style>