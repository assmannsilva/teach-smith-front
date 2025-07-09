import api from '@/api/http';
import axios from 'axios';
import type { AxiosInstance } from 'axios';
import authService from './auth.service';
import type { CreateOrganizationPayload, CreateOrganizationResponse } from '@/types/organization';

class AuthService {
  private api: AxiosInstance;

  constructor() {
    this.api = api;
  }

  public async createOrganization(payload: CreateOrganizationPayload): Promise<CreateOrganizationResponse> {
    await authService.getCsrfCookie();
    const formData = new FormData();
    formData.append('name', payload.name);
    if(payload.file) formData.append('logo', payload.file);

    try {
      const { data } = await this.api.post('api/create-organization', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return { success: true, organization:  data.organization};
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        return {
          success: false,
          message: error.response.data.message || 'Error on Organization Creation',
        };
      }
      return { success: false, message: 'An unexpected error occurred' };
    }
  }
}

export default new AuthService();
