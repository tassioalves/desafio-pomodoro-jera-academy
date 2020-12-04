<template>
    <div id="app">
        <v-app>
          <barra-superior></barra-superior>
            <v-main>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-main>
            <v-main>
                <app-footer></app-footer>
            </v-main>
        </v-app>
    </div>
</template>

<script>
    import BarraSuperior from "./components/barraSuperior";
    import AppFooter from "./components/Footer";
    export default {
        name: 'App',
        data() {
            return {}
        },
        components:{
            BarraSuperior,
            AppFooter,
        }
    }
</script>

<style>
#app{
    background-color: #F4F4F4;
}
</style>
