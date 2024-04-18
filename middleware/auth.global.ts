import { useUserStore } from "~/stores/userStore"
import { getJWT } from '~/lib/localStorageUtil'

export default defineNuxtRouteMiddleware((to, from) => {
    console.log('authMiddleware')
    const userStore = useUserStore()
    // if the user is trying to acceess a login/signup page and is already logged in, redirect to home
    if (!['/login', '/signup'].includes(from.path) && (to.path === '/login' || to.path === '/signup') && getJWT()) {
        if (!userStore.user) {
            userStore.init()
        }
        if (userStore.user) {
            return navigateTo('/')
        }
        return navigateTo(to.path)
    }
    // if the user is not logged in, and is trying to access a page other than login/signup, redirect to login
    if (to.path !== '/login' && to.path !== '/signup') {
        if (!userStore.user) {
            if (!getJWT()) {
                console.log('no jwt')
                return navigateTo('/login')
            }
        }
        console.log(to.path)
        // return navigateTo(to.path)
    }
})