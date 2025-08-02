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