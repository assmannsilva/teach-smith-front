import { useGeneralForm } from '@/composables/useGeneralForm';
import studentService from '@/services/student.service';
import type { GeneralResponse } from '@/types';

export function useInviteStudent() {
  const {
    firstName,
    surname,
    email,
    registrationCode,
    grade,
    section,
    admissionDate,
    errors,
    isLoading,
    handleSubmit,
    resetForm,
    statusMessage
  } = useGeneralForm({
    firstName: '',
    surname: '',
    email: '',
    registrationCode: '',
    grade: '',
    section: '',
    admissionDate: '',
  });

  async function inviteStudent() {
    return await handleSubmit(async () => {
      const result = await studentService.invite({
        first_name: firstName.value.trim(),
        surname: surname.value.trim(),
        email: email.value.trim(),
        registration_code: registrationCode.value,
        grade: grade.value,
        section: section.value,
        admission_date: admissionDate.value,
      });

      return result as GeneralResponse;
    });
  }

  return {
    firstName,
    surname,
    email,
    registrationCode,
    grade,
    section,
    admissionDate,
    errors,
    isLoading,
    statusMessage,
    inviteStudent,
    resetForm,
  };
}
