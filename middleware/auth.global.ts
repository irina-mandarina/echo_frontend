import { useUserStore } from "~/stores/userStore"
import { getJWT } from '~/lib/localStorageUtil'

export default defineNuxtRouteMiddleware((to, from) => {
    // if (to.params.id === '1') {
    //   return abortNavigation()
    // }
    console.log('authMiddleware')
    const userStore = useUserStore()

    if (from.path !== '/login' && (to.path === '/login' || to.path === '/signup') && getJWT()) {
        if (!userStore.user) {
            userStore.init()
        }
        if (userStore.user) {
            return navigateTo('/')
        }
        return navigateTo(to.path)
    }
})