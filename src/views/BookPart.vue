<template>
    <v-container grid-list-md v-if="part">
        <v-layout row wrap>
            <v-flex xs12 sm10 offset-sm1>
                <book-part-content :part="part"></book-part-content>
            </v-flex>
            <v-flex xs12 sm10 offset-sm1>
                <book-part-words :words="part.words"></book-part-words>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import BookPartContent from '../components/BookPartContent'
    import BookPartWords from '../components/BookPartWords'
    import Vue from 'vue'
    export default {
        props: {
            "bookId": {
                type: String,
                required: true
            },
            "partId": {
                type: String,
                required: true
            }
        },
        data(){
            return {
                part: null
            }
        },
        computed: {
/*            part() {
                let val = this.$store.getters.getParts.find(b => b.bookId == this.bookId && b.bookPartId == this.partId)
                return val
            }*/
        },
        created() {
            Vue.$db.collection('BookParts')
                .where('bookId','==',this.bookId)
                .where('bookPartId','==',this.partId)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(s => {
                    this.part = s.data()
                })
            })
            .catch()
        },
        components: {
            BookPartContent,
            BookPartWords
        }
    }
</script>

<style scoped>

</style>
