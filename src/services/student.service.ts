import api from '@/api/http';
import { postBulkInvites } from '@/api/postBulkInvites';
import type { BulkInviteResponse } from '@/types/invites';
import axios from 'axios';
import type { AxiosInstance } from 'axios';

class StudentService {
  private api: AxiosInstance;

  constructor() {
    this.api = api;
  }

  public async bulkInvite(file: File): Promise<BulkInviteResponse> {
    return await postBulkInvites('api/students/bulk-invite',file)
  }
}

export default new StudentService();
