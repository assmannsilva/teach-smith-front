import api from '@/api/http';
import { postBulkInvites } from '@/api/postBulkInvites';
import type { BulkInviteResponse, InviteStudentPayload, InviteStudentResponse, InviteTeacherPayload, InviteTeacherResponse } from '@/types/invites';
import type { AxiosInstance } from 'axios';
import axios from 'axios';

class TeacherService {
  private api: AxiosInstance;

  constructor() {
    this.api = api;
  }

  public async bulkInvite(file: File): Promise<BulkInviteResponse> {
    return await postBulkInvites('api/teachers/bulk-invite',file)
  }

  public async invite(payload: InviteTeacherPayload): Promise<InviteTeacherResponse> {
      try {
        await this.api.post('api/teachers/invite',payload)
        return { success: true, message: 'Teacher invite dispatched!' };
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

export default new TeacherService();
