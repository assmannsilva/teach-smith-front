import studentService from "@/services/student.service";
import teacherService from "@/services/teacher.service";
import type { StatusMessage } from "@/types";
import type { BulkInviteResponse } from "@/types/invites";
import { ref } from "vue";

export function useUploadInvitesFile() {
  const importFile = ref<File | null>(null);
  const statusMessage = ref<StatusMessage | null>(null);
  const errors = ref<string[] | null>(null);

  async function setResponseToProperties(response: BulkInviteResponse) {

    statusMessage.value = {
      type: response.status,
      text: response.dispatched == 0 || response.dispatched == null ? "None invites dispatched" : response.dispatched + " invites dispatched"
    }
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
    statusMessage,
    errors,
    inviteMultipleStudents,
    inviteMultipleTeachers
  };
}