<template>
    <div id="app">
        <v-app>
            <!-- Barra superior e menu lateral (Menu) -->
          <barra-superior></barra-superior>
            <v-content>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
    import BarraSuperior from "./components/barraSuperior";

    export default {
        name: 'App',
        data() {
            return {}
        },
        components:{
            BarraSuperior
        }
    }
</script>

<style>
#app{
    background-color: #F4F4F4;
}
</style>
