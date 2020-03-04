import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers.map'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    scrollBehavior: function (to, from, savedPosition) {
        if (to.hash) {
            return {selector: to.hash}
        } else {
            return {x: 0, y: 0}
        }
    },
    routes,
})

export default router