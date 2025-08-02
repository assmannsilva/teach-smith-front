import { useGeneralForm } from '@/composables/useGeneralForm';
import classroomService from '@/services/classroom.service';
import type { GeneralResponse } from '@/types';

export function useCreateClassroom() {
  const {
    grade,
    educationStage,
    section,
    year,
    errors,
    isLoading,
    handleSubmit,
    resetForm,
    statusMessage
  } = useGeneralForm({
    grade: '',
    educationStage: '',
    section: '',
    year: '',
  });

  async function createClassroom() {
    return await handleSubmit(async () => {
      const result = await classroomService.create({
        grade: grade.value,
        education_stage: educationStage.value,
        section: section.value,
        year: year.value
      });

      return result as GeneralResponse;
    });
  }

  return {
    grade,
    educationStage,
    section,
    year,
    errors,
    isLoading,
    statusMessage,
    createClassroom,
    resetForm,
  };
}
