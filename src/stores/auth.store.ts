import { defineStore } from 'pinia';
import type { Credentials, LoginResult, RegisterPayload, RegisterResponse } from '@/types/auth';
import authService from '@/services/auth.service';

export const useAuthStore = defineStore('auth', {
  state: () => ({
      isLoading: false,
      error: '' as string | null,
  }),

  actions: {
    async _handle<T>(fn: () => Promise<T>): Promise<T> {
      this.isLoading = true;
      this.error = null;

      const result = await fn();
      this.error = (result as any).success ? null : (result as any).message;
      this.isLoading = false;

      return result;
    },

    login(credentials: Credentials) {
      return this._handle(() => authService.login(credentials));
    },

    loginWithGoogle() {
      return this._handle(() => authService.loginWithGoogle());
    },

    register(payload: RegisterPayload) {
      return this._handle(() => authService.register(payload));
    },

    registerWithGoogle(organization_id: string) {
      return this._handle(() => authService.registerWithGoogle(organization_id));
    },
  }
});
