import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Books from '../views/Books'
import Book from '../views/Book'
import BookPart from '../views/BookPart'
import Words from '../views/Words'
import Signin from "../views/Signin";
import Signup from "../views/Signup";
import Profile from "../views/Profile";
import Store from "../store"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/books',
    name: 'books',
    component: Books
  },
  {
    path: '/book/:id',
    name: 'book',
    props: true,
    component: Book
  },
  {
    path: '/book/:bookId/part/:partId',
    name: 'bookPart',
    props: true,
    component: BookPart
  },
  {
    path: '/words',
    name: 'words',
    component: Words
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: AuthGuard
  }
]

function AuthGuard(from, to, next) {
  if(Store.getters.isUserAuthenticated)
    next()
  else
    next('/signin')
}


const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
