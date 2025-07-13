import { ref } from 'vue';
import router from '@/router';
import type { CreateOrganizationPayload } from '@/types/organization';
import organizationService from '@/services/organization.service';

export function useCreateOrganization() {
  const organizationName = ref('');
  const organizationFile = ref<File | null>(null);
  const isLoading = ref(false);
  const errorMessage = ref<string | null>(null);

  async function createOrganization() {
    isLoading.value = true;
    errorMessage.value = null;
    const payload : CreateOrganizationPayload = {
      name: organizationName.value.trim(),
      file: organizationFile.value,
    }
    try {
      const response = await organizationService.createOrganization(payload);
      if (response.success) {
        localStorage.setItem('organization', JSON.stringify(response.organization));
        router.push({ name: 'register' });
      } else {
        errorMessage.value = response.message || 'Failed to create organization';
      }
    } catch (error: any) {
      errorMessage.value = error.message || 'Failed to create organization';
    } finally {
      isLoading.value = false;
    }
  }

  return {
    organizationName,
    organizationFile,
    isLoading,
    errorMessage,
    createOrganization,
  };
}