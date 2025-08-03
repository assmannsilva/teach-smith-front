import api from '@/api/http';
import type { ListResponse } from '@/types';
import type { Classroom, CreateClassroomPayload, CreateClassroomResponse } from '@/types/classroom';
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

  public async list(page: number): Promise<ListResponse<Classroom>>  {
    try {
      const response = await this.api.get('api/classrooms/?page=' + page);
      return { 
        data: response.data.data, 
        success: true,
        current_page: response.data.current_page,
        from: response.data.from,
        last_page: response.data.last_page,
        per_page: response.data.per_page,
        to: response.data.to,
        total: response.data.total,
      };
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        return { 
          success: false, 
          data: []
        };
      }
      return { success: false, data: [] };
    }
  }
}

export default new ClassroomService();
