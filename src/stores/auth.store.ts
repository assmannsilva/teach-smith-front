import { defineStore } from 'pinia';
import type { User } from '@/types/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
      isLoading: false,
      error: '' as string | null,
      user: null as User | null
  }),

  actions: {

    setLoading(value: boolean) {
      this.isLoading = value;
    },
    setError(message: string | null) {
      this.error = message;
    },
  }
});
