<template>
    <div>
        <v-app-bar app clipped-left color="#20B2AA" height="100" absolute>
            <v-img src="../assets/logo-simples.png"
                   max-height="350"
                   max-width="350"
                   contain>
            </v-img>
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