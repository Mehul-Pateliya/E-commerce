import { defineStore } from 'pinia'

export const useAuthentication = defineStore({
  id: 'Authentication',
  state: () => ({
    isAuthenticated: false
  }),
})
