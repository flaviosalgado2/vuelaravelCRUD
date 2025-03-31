// stores/authStore.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
    }),
    persist: true,
    actions: {
        login() {
            console.log('rodou login')
            this.authenticated = true
            localStorage.setItem('autenticado', 'true')
        },
        logout() {
            this.authenticated = false
            localStorage.removeItem('autenticado')
        },
        checkAuthentication() {
            this.authenticated = localStorage.getItem('autenticado') === 'true'

            return this.authenticated
        },
    },
});
