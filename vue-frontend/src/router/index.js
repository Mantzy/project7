import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Comment from '../views/Comment.vue'
import Modify from '../views/Modify.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    /* {
             path: '/about',
             name: 'About',
             // route level code-splitting
             // this generates a separate chunk (about.[hash].js) for this route
             // which is lazy-loaded when the route is visited.
             component: () =>
                 import ( /* webpackChunkName: "about" 
        '../views/About.vue')
    },*/
    {
        path: '/post',
        name: 'Post',
        component: Post
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/comment/:id',
        name: 'Comment',
        component: Comment
    }, {
        path: '/modify/:id',
        name: 'Modify',
        component: Modify
    },
    {
        path: '/userupdate/:id',
        name: 'Userupdate',
        component: Modify
    }
]

const router = new VueRouter({
    routes
})

const userId = localStorage.getItem("userId")
let isAuthenticated = false;
if (userId != null && userId != undefined) {
    isAuthenticated = true;
}
router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !isAuthenticated && to.name !== "Register") next({ name: 'Login' })
    else next()
})
export default router