export type StatusMessage = {
  text:  string,
  type: "error" | "success" | "partial"
}

export type ErrorsObject = Record<string, string>;

export interface GeneralErrorValidation {
  [key: string]: string[] | undefined;
}

export interface GeneralResponse {
  message: string;
  success: boolean;
  errors?: GeneralErrorValidation | undefined;
}

export interface ListResponse<T> {
  data: T[];
  success: boolean;
  current_page?: number;
  first_page_url?: string;
  from?: number;
  last_page?: number;
  last_page_url?: string;
  links?: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
  next_page_url?: string | null;
  path?: string;
  per_page?: number;
  prev_page_url?: string | null;
  to?: number;
  total?: number;
}