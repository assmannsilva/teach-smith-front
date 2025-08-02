
export interface Classroom {
    id: string;
    grade: string;
    education_stage: string;
    section: string;
    year: string;
    created_at: string;
}

export interface CreateClassroomPayload {
    grade: string;
    education_stage: string;
    section: string;
    year: string;
}

export interface CreateClassroomValidationErrors {
    grade?: string[] | undefined;
    education_stage?: string[] | undefined;
    section?: string[] | undefined;
    year?: string[] | undefined;
}

export interface CreateClassroomResponse {
    message: string;
    success: boolean;
    classroom?: Classroom | undefined;
    errors?: CreateClassroomValidationErrors | undefined;
}