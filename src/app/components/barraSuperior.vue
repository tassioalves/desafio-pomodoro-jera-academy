<template>
    <div>
        <v-app-bar app clipped-left color="#20B2AA" height="100" absolute>
            <v-row align-content="center">
                <v-col cols="12" md="6">
                    <v-toolbar-title>Jera Academy</v-toolbar-title>
                    <v-toolbar-title>DESAFIO POMODORO</v-toolbar-title>
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