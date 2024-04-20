import { useUserStore } from "~/stores/userStore"
import { getJWT } from '~/lib/localStorageUtil'

export default defineNuxtRouteMiddleware(async (to, from) => {
    console.log('authMiddleware')
    const nuxtApp = useNuxtApp()
    const userStore = useUserStore()
    // if the user is trying to acceess a login/signup page and is already logged in, redirect to home
    if ((to.path === '/login' || to.path === '/signup') && getJWT()) {
        if (!userStore.user) {
            await userStore.init()
        }
        if (userStore.user) {
            return nuxtApp.runWithContext(() => navigateTo('/'))
        }
    }
    // if the user is not logged in, and is trying to access a page other than login/signup, redirect to login
    else if (to.path !== '/login' && to.path !== '/signup') {
        if (!userStore.user) {
            await userStore.init()
        }
        if (!userStore.user) {
            if (!getJWT()) {
                console.log('no jwt')
                return nuxtApp.runWithContext(() => navigateTo('/login'))
            }
        }
    }
})