export interface Credentials {
  email: string;
  password: string;
}

export interface LoginResult {
  success: boolean;
  message: string;
}

export interface RegisterPayload {
  email: string,
  password: string,
  password_confirmation: string,
  first_name: string,
  surname: string,
  organization_id: string
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  errors?: RegisterValidationErrors | undefined;
}

export interface RegisterValidationErrors {
  email?: string[] | undefined,
  password?: string[] | undefined,
  first_name?: string[] | undefined,
  surname?: string[] | undefined,
  password_confirmation?: string[] | undefined,
}
