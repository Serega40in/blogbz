<template>
    <div>
        <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
            <v-list>
                <v-list-item v-for="(item, i) in menuItems" v-bind:key="i" :to="item.route">
                    <v-list-item-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
<!--                <v-list-item>
                    <v-list-item-action>
                        <v-icon v-html="exit_to_app" @click.prevent="signout" v-if="isUserAuthenticated"></v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="Выйти" @click.prevent="signout" v-if="isUserAuthenticated"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>-->
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app dark class="primary">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
            <router-link v-bind:to="'/'" tag="span" style="cursor:pointer">
                <v-toolbar-title v-text="'Блог-БЗ'"></v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="(item, i) in menuItems" v-bind:key="i" :to="item.route" depressed class="primary"  >
                    <v-icon left v-html="item.icon"></v-icon>
                    {{item.title}}
                </v-btn>
                <v-btn depressed class="primary" @click.prevent="signout" v-if="isUserAuthenticated">
                    <v-icon left v-html="'mdi-exit-to-app'"></v-icon>
                    Выйти
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        data(){
            return  {
                drawer: false,
            }
        },
        computed: {
            isUserAuthenticated() {
                return this.$store.getters.isUserAuthenticated
            },
            menuItems() {
                return this.isUserAuthenticated
                       ? [
                    {
                        icon: 'mdi-brightness-4',
                        title: 'Читать',
                        route: '/books',
                    },
                    {
                        icon: 'visibility',
                        title: 'База знаний',
                        route: '/words',
                    },
                    {
                        icon: 'account_circle',
                        title: 'Мой кабинет',
                        route: '/profile',
                    }
                        ] :
                        [
                            {
                                icon: 'mdi-brightness-4',
                                title: 'Читать',
                                route: '/books',
                            },
                            {
                                icon: 'visibility',
                                title: 'База знаний',
                                route: '/words',
                            },
                            {
                                icon: 'input',
                                title: 'Войти',
                                route: '/signin',
                            },
                            {
                                icon: 'lock_open',
                                title: 'Зарегистрироваться',
                                route: '/signup',
                            }
                        ]
            }
        },
        methods: {
            signout() {
                this.$store.dispatch('SIGNOUT')
            }
        }
    }
</script>

<style scoped>

</style>
