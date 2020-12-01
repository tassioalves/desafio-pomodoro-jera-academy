<template>
    <div id="app">
        <v-app>
            <v-content>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {}
        }
    }
</script>

<style>
#app{
    background-color: #F4F4F4;
}
</style>
