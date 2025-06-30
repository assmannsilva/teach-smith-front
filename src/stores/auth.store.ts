import { defineStore } from 'pinia';
import type { Credentials, LoginResult } from '@/types/auth';
import authService from '@/services/auth.service';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoading: false,
        error: '' as string | null,
    }),

    actions: {
        async login(credentials: Credentials): Promise<LoginResult> {
            this.isLoading = true;
            this.error = null;
            const result: LoginResult = await authService.login(credentials);
            this.error = result.success ? null : result.message;
            this.isLoading = false;
            return result;
        },

        async loginWithGoogle(): Promise<LoginResult> {
            this.isLoading = true;
            this.error = null;
            const result = await authService.loginWithGoogle();
            this.error = result.success ? null : result.message;
            this.isLoading = false;
            return result;
        }

    },
});
