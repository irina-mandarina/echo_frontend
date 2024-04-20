import { useUserStore } from "~/stores/userStore"
import { getJWT } from '~/lib/localStorageUtil'
import { useRouter } from "vue-router"

export default defineNuxtRouteMiddleware(async (to, from) => {
    console.log('authMiddleware')
    const nuxtApp = useNuxtApp()
    const router = useRouter()
    const userStore = useUserStore()
    // if the user is trying to acceess a login/signup page and is already logged in, redirect to home
    /*from.path !== '/login' && from.path !== '/signup' && */ 
    if ((to.path === '/login' || to.path === '/signup') && getJWT()) {
        if (!userStore.user) {
            await userStore.init()
        }
        if (userStore.user) {
            return nuxtApp.runWithContext(() => navigateTo('/'))
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
                return nuxtApp.runWithContext(() => navigateTo('/login'))
            }
        }
        // return navigateTo(to.path)
    }
})