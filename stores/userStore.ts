import { defineStore } from 'pinia'
import { getUser, logIn, signUp } from '~/requests/userRequests'
import { setJWT, removeJWT } from '~/lib/localStorageUtil'
import type { User } from '~/models/User'

export const useUserStore = defineStore({
    id: 'userStore',
    state: () => ({
        user: null as User | null,
        errorMessage: null as string | null
    }),
    actions: {
        async init() {
            console.log('Initializing user store')
            await this.setUser()
        },
        async setUser() {
            try {
                this.user = await getUser()
                console.log(this.user)
                this.errorMessage = null
            }
            catch (error: any) {
                console.error(error)
                this.errorMessage = error.message
            }
        },
        async logIn(username: string, password: string) {
            try {
                const { user, jwt } = await logIn(username, password)
                this.user = user
                setJWT(jwt)
                this.errorMessage = null
            } catch (error: any) {
                if (error.status === 401) {
                    this.errorMessage = 'Invalid username or password'
                }
                console.error(error)
                this.errorMessage = error.message
            }
        },
        async logOut() {
            this.user = null
            removeJWT()
        },
        async signUp(username: string, email: string, password: string) {
            try {
                const res = await signUp(username, email, password)
                console.log(res)
                this.user = res.user
                setJWT(res.jwt)
                this.errorMessage = null
            }
            catch (error: any) {
                console.error(error)
                this.errorMessage = error.message
            }
        }    
    }
});

export default useUserStore