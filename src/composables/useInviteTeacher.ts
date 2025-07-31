import { useInviteForm } from '@/composables/useInviteForm';
import teacherService from '@/services/teacher.service';

export function useInviteTeacher() {
  const {
    firstName,
    surname,
    email,
    cpf,
    degree,
    hireDate,
    errors,
    isLoading,
    handleSubmit,
    resetForm,
    statusMessage
  } = useInviteForm({
    firstName: '',
    surname: '',
    email: '',
    cpf: '',
    degree: '',
    hireDate: '',
  });

  async function inviteTeacher() {
    return await handleSubmit(async () => {
      const result = await teacherService.invite({
        first_name: firstName.value.trim(),
        surname: surname.value.trim(),
        email: email.value.trim(),
        cpf: cpf.value,
        degree: degree.value,
        hire_date: hireDate.value,
      });

      return result;
    });
  }

  return {
    firstName,
    surname,
    email,
    cpf,
    degree,
    hireDate,
    errors,
    isLoading,
    statusMessage,
    inviteTeacher,
    resetForm,
  };
}
