export interface CreateOrganizationPayload {
  name: string;
  file: File | null;
}

export interface CreateOrganizationResponse {
  success: boolean;
  message?: string;
  organization?: Organization;
}


export interface Organization {
  id: number;
  name: string;
  file_url: string | null;
  created_at: string;
  updated_at: string;
}   