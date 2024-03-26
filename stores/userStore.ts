import { getUser } from '~/requests/userRequests'

export const useUserStore = defineStore('userStore', () => {
    const user = ref(null)

    function init() {
        console.log('Initializing user store')
        setUser()
    }

    function setUser() {
        user.value = getUser()
        console.log(user.value)
    }
} 