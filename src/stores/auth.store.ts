import { defineStore } from 'pinia';
import type { Credentials, LoginResult, RegisterPayload, RegisterResponse } from '@/types/auth';
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
        },

        async register(payload: RegisterPayload): Promise<RegisterResponse> {
            this.isLoading = true;
            this.error = null;
            const result = await authService.register(payload);
            this.error = result.success ? null : result.message;
            this.isLoading = false;
            return result;
        },

        async registerWithGoogle(organization_id : string): Promise<RegisterResponse> {
            this.isLoading = true;
            this.error = null;
            const result = await authService.registerWithGoogle(organization_id);
            this.error = result.success ? null : result.message;
            this.isLoading = false;
            return result;
        }

    },
});
