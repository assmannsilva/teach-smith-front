import api from '@/api/http';
import type { Credentials, LoginResult } from '@/types/auth';
import axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';

class AuthService {
  private api: AxiosInstance;

  constructor() {
    this.api = api;
  }

  public getCsrfCookie(): Promise<AxiosResponse<void>> {
    return this.api.get('sanctum/csrf-cookie');
  }

  public async login(credentials: Credentials): Promise<LoginResult> {
    await this.getCsrfCookie();
    try {
        await this.api.post('standard-auth/login', credentials);
        return { success: true, message: 'Login successful' };
    } catch (error: any) {
        if (axios.isAxiosError(error) && error.response) {
          return { success: false, message: error.response.data.message || 'Error on Login' };
        }
        return { success: false, message: 'An unexpected error occurred' };
    }
  }

  public async loginWithGoogle(): Promise<LoginResult> {
    try {
      const { data } = await this.api.get('google-auth/generate-login-url');
      window.location.href = data.url;
      return { success: true, message: 'Redirecting to Google...' };
    } catch (error: any) {
      return { success: false, message: 'Failed to initiate Google login' };
    }
  }

}

export default new AuthService();
