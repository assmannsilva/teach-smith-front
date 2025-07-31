export interface BulkInviteResponse {
	dispatched : number|null;
	errors: string[] |null;
	status: BulkInviteStatus
}

export type BulkInviteStatus = 'error' | 'success' | 'partial';

export interface InviteStudentPayload {
	email: string;
	registration_code: string;
	first_name: string;
	surname: string;
	grade: string;
	section: string;
	admission_date: string
}
export interface InviteStudentResponse {
	message: string;
	success: boolean;
	errors?: InviteStudentValidationErrors | undefined;
}

export interface InviteStudentValidationErrors {
	email?: string[] | undefined,
	first_name?: string[] | undefined,
	surname?: string[] | undefined,
	grade?: string[] | undefined,
	section?: string[] | undefined,
	admission_date?: string[] | undefined,
	registration_code?: string[] | undefined,
}

export interface InviteTeacherPayload {
	email: string;
	first_name: string;
	surname: string;
	cpf: string;
	degree: string;
	hire_date: string
}

export interface InviteTeacherResponse {
	message: string;
	success: boolean;
	errors?: InviteTeacherValidationErrors | undefined;
}

export interface InviteTeacherValidationErrors {
	email?: string[] | undefined,
	first_name?: string[] | undefined,
	surname?: string[] | undefined,
	cpf?: string[] | undefined,
	degree?: string[] | undefined,
	hire_date?: string[] | undefined,
}