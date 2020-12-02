<template>
    <v-card-text  align="center" >
        <v-col class="display-4" cols="12">
            {{ time | prettify }}
        </v-col>

    </v-card-text>
</template>

<script>
    export default {
        name: "timer",
        props: ['time'],
        filters: {
            prettify: function (value) {
                let data = value.split(':');
                let minutes = data[0];
                let secondes = data[1];
                if (minutes < 10) {
                    minutes = "0" + minutes
                }
                if (secondes < 10) {
                    secondes = "0" + secondes
                }
                return minutes + ":" + secondes
            }
        }
    }
</script>

<style scoped>
    .timer {
        margin-top: 20px;
    }
</style>