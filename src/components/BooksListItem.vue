<template>
    <v-card color="info" class="white--text">
        <v-container fluid>
            <v-layout row class="hidden-sm-and-down">
                <v-flex xs4 md3>
                    <v-img height="100" src="book.imageUrl"></v-img>
                    <div class="text-center">
                        <v-btn class="my-2" color="white">
                            <v-icon left>visibility</v-icon>
                            YOUTUBE
                        </v-btn>
                    </div>
                </v-flex>
                <v-flex xs8 md9>
                    <v-card-title>
                        <div>
                            <div class="headline">{{book.title}}</div>
                            <div>{{book.description}}</div>
                            <v-divider class="white"></v-divider>
                            <div>Уровень: {{getBookLevel(book.level)}}</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-rating v-model="book.rating" color="yellow" readonly dense half-increments></v-rating>
<!--                        <div class="ml-1">
                            <span>{{book.rating}}</span>
                            <span>({{book.ratingsCount}})</span>
                        </div>-->
                        <v-spacer></v-spacer>
                        <v-btn class="primary" :to="{name:'book',params:{id:book.id}}">Открыть</v-btn>
                    </v-card-actions>
                </v-flex>
            </v-layout>
            <div class="hidden-md-and-up">
                <v-layout row >
                    <v-flex xs4 md3>
                        <v-img height="100" src="book.imageUrl"></v-img>
                    </v-flex>
                    <v-flex xs8 md9>
                        <v-card-title>
                            <div>
                                <div class="headline">{{book.title}}</div>
                                <div class="text-center">
                                    <v-btn class="my-2" color="white">
                                        <v-icon left>visibility</v-icon>
                                        YOUTUBE
                                    </v-btn>
                                </div>
                            </div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-layout row >
                    <v-flex xs12>
                        <div>{{book.description}}</div>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <div>Уровень: {{getBookLevel(book.level)}}</div>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-actions>
<!--                            <v-rating v-model="book.rating" color="yellow" readonly dense half-increments></v-rating>
                            <div class="ml-1">
                                <span>{{book.rating}}</span>
                                <span>({{book.ratingsCount}})</span>
                            </div>-->
                            <v-spacer></v-spacer>
                            <v-btn class="primary" :to="{name:'book',params:{id:book.id}}">Открыть</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </div>
        </v-container>
    </v-card>
</template>

<script>
    import * as BookHelper from "../helpers/book"
    export default {
        props: {
            "book": {
                type: Object,
                required: true
            }
        },
        methods: {
            getBookLevel: BookHelper.getBookLevel
        }
    }
</script>

<style scoped>

</style>
