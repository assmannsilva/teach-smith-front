import { defineStore } from 'pinia';
import type { User } from '@/types/auth';
import type { Organization } from '@/types/organization';

export const useAuthStore = defineStore('auth', {
  state: () => ({
      isLoading: false,
      error: '' as string | null,
      loggedUser: null as User | null,
      loggedOrganization: null as Organization | null,
      logged: false as boolean
  }),

  actions: {
    setLoading(value: boolean) {
      this.isLoading = value;
    },
    setError(message: string | null) {
      this.error = message;
    },

    login(user: User, organization : Organization) {
      this.loggedUser = user
      this.loggedOrganization = organization
      this.logged = true
    },
    
    logout() {
      this.loggedUser = null
      this.logged = false
    }
  }
});
