import api from '@/api/http';
import type { CreateClassroomPayload, CreateClassroomResponse } from '@/types/classroom';
import type { AxiosInstance } from 'axios';
import axios from 'axios';

class ClassroomService {
  private api: AxiosInstance;

  constructor() {
    this.api = api;
  }

  public async create(payload: CreateClassroomPayload): Promise<CreateClassroomResponse> {
      try {
        const response = await this.api.post('api/classrooms/',payload)
        return { 
            success: true,
            classroom: response.data.classroom,
            message: 'Classroom created successfully',
        };
    } catch (error: any) {
        if (axios.isAxiosError(error) && error.response) {
          return { 
            success: false, 
            errors: error.response.data.errors,
            message: error.response.data.message || 'An error occurred while creating the classroom.'
          };
        }
        return { success: false, message: 'An unexpected error occurred' };
    }

  }
}

export default new ClassroomService();
