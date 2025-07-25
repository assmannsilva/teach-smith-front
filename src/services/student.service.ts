import api from '@/api/http';
import { postBulkInvites } from '@/api/postBulkInvites';
import type { BulkInviteResponse, InviteStudentPayload, InviteStudentResponse } from '@/types/invites';
import type { AxiosInstance } from 'axios';
import axios from 'axios';

class StudentService {
  private api: AxiosInstance;

  constructor() {
    this.api = api;
  }

  public async bulkInvite(file: File): Promise<BulkInviteResponse> {
    return await postBulkInvites('api/students/bulk-invite',file)
  }

  public async invite(payload: InviteStudentPayload): Promise<InviteStudentResponse> {
      try {
        await this.api.post('api/students/invite',payload)
        return { success: true, message: 'Student invite dispatched!' };
    } catch (error: any) {
        if (axios.isAxiosError(error) && error.response) {
          return { 
            success: false, 
            message: error.response.data.message || 'Error on sending invite',
            errors: error.response.data.errors || undefined
          };
        }
        return { success: false, message: 'An unexpected error occurred' };
    }

  }
}

export default new StudentService();
