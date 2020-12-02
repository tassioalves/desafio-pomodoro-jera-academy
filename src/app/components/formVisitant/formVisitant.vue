<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="12" md="8">

                <h1>Digite seu nome para começar!</h1>
                <v-form
                        ref="form"
                        lazy-validation
                >
                    <v-text-field
                            v-model="name"
                            label="Name"
                            required
                    ></v-text-field>

                    <v-btn

                            color="warning"
                    >
                        Reset Validation
                    </v-btn>


                </v-form>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
    export default {
        name: "formVisitant"
    }
</script>

<style scoped>

</style>