<template>
    <v-container fluid>
        <v-data-iterator
                :items="words"
                :items-per-page.sync="itemsPerPage"
                :footer-props="{ itemsPerPageOptions }"
        >
            <template v-slot:default="props">
                <v-row>
                    <v-col
                            v-for="item in props.items"
                            :key="item.name"
                            cols="12"
                            sm="6"
                            md="4"
                            lg="3"
                    >
                        <v-card>
                            <v-card-title><h4>{{ item.origWord }}</h4></v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>{{item.transWord}}</v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                    <v-btn class="mx-2" fab dark color="indigo">
                                        <v-icon dark>mdi-plus</v-icon>
                                    </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </template>
        </v-data-iterator>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            itemsPerPageOptions: [4, 8, 12],
            itemsPerPage: 4,
        }),
        props: {
            "words" :{
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
