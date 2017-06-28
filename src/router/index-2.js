import Vue from 'vue'
import Router from 'vue-router'
import About from '@/view/About'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '个人简介',
            component: About
        }
    ]
})
