import { useUserStore } from "~/stores/userStore"
import { getJWT } from '~/lib/localStorageUtil'

export default defineNuxtRouteMiddleware(async (to, from) => {
    console.log('authMiddleware')
    const userStore = useUserStore()
    // if the user is trying to acceess a login/signup page and is already logged in, redirect to home
    console.log((to.path === '/login' || to.path === '/signup'))
    if (/*from.path !== '/login' && from.path !== '/signup' && */ (to.path === '/login' || to.path === '/signup') && getJWT()) {
        if (!userStore.user) {
            await userStore.init()
        }
        if (userStore.user) {
            return navigateTo('/')
        }
        return
    }
    // if the user is not logged in, and is trying to access a page other than login/signup, redirect to login
    if (to.path !== '/login' && to.path !== '/signup') {
        if (!userStore.user) {
            await userStore.init()
        }
        if (!userStore.user) {
            if (!getJWT()) {
                console.log('no jwt')
                return navigateTo('/login')
            }
        }
        // return navigateTo(to.path)
    }
})