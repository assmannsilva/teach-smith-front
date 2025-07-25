export interface BulkInviteResponse {
	dispatched : number|null;
	errors: string[] |null;
	status: BulkInviteStatus
}

export type BulkInviteStatus = 'failed' | 'success' | 'partial';

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