import studentService from "@/services/student.service";
import teacherService from "@/services/teacher.service";
import type { BulkInviteResponse, BulkInviteStatus } from "@/types/invites";
import { ref } from "vue";

export function useUploadInvitesFile() {
  const importFile = ref<File | null>(null);

  const status = ref<BulkInviteStatus | null>(null);
  const dispatchedCount = ref< number| null >(0);
  const errors = ref<string[] | null>(null);

  async function setResponseToProperties(response: BulkInviteResponse) {
    status.value = response.status;
    dispatchedCount.value = response.dispatched
    errors.value = response.errors
  }

  async function inviteMultipleStudents() {
    if(!importFile.value) return;
    const response = await studentService.bulkInvite(importFile.value)
    setResponseToProperties(response)
  }

  async function inviteMultipleTeachers() {
    if(!importFile.value) return;
    const response = await teacherService.bulkInvite(importFile.value)
    setResponseToProperties(response)
  }

  return {
    importFile,
    status,
    dispatchedCount,
    errors,
    inviteMultipleStudents,
    inviteMultipleTeachers
  };
}