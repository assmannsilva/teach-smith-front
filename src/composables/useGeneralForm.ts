import { reactive, toRefs, ref } from 'vue';
import camelCase from 'lodash.camelcase';
import type { ErrorsObject, GeneralErrorValidation, GeneralResponse, StatusMessage } from '@/types';

type SubmitCallback = () => Promise<GeneralResponse>;

export function useGeneralForm<T extends Record<string, any>>(initialData: T) {
  
  const formData = toRefs(reactive({ ...initialData }));
  const errors = reactive<ErrorsObject>({});
  const isLoading = ref(false);
  const statusMessage = ref<StatusMessage | null>(null);

  function resetErrors() {
    for (const key in errors) delete errors[key];
  }

  function mapApiErrors(apiErrors: GeneralErrorValidation) {
    const mapApiKeys = apiErrors as any;
    for (const key in mapApiKeys) {
      const camelKey = camelCase(key);
      errors[camelKey] = mapApiKeys[key][0] ?? '';
    }
  }

  async function handleSubmit(submitCallback: SubmitCallback) {
    isLoading.value = true;
    resetErrors();
    statusMessage.value = null

    const result = await submitCallback();
    if (result?.errors) {
      mapApiErrors(result.errors);
    }
    statusMessage.value = {
      text: result.message,
      type: result.success ? "success" : "error" 
    }
    
    isLoading.value = false;
    return result.success;
  }

  function resetForm() {
    for (const key in initialData) formData[key].value = initialData[key];
    resetErrors();
  }

  return {
    ...formData,
    errors,
    isLoading,
    statusMessage,
    handleSubmit,
    resetForm,
  };
}
