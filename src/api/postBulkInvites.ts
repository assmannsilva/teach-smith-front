import type { BulkInviteResponse } from '@/types/invites';
import axios from 'axios';
import api from '@/api/http';

export async function postBulkInvites(endpoint: string, file: File): Promise<BulkInviteResponse> {
  const formData = new FormData();
  formData.append('import_file', file);

  try {
    const { data, status } = await api.post(endpoint, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    const statusMessage = status === 200 ? "success" : (status === 207 ? "partial" : "failed");

    return {
      status: statusMessage,
      dispatched: data.dispatched > 0 ? data.dispatched : null,
      errors: data.errors,
    };
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        status: "failed",
        dispatched: null,
        errors: error.response.data.errors || ['An unexpected error occurred'],
      };
    }

    return {
      status: "failed",
      dispatched: null,
      errors: ['An unexpected error occurred'],
    };
  }
}
