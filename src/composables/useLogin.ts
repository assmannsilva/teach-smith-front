import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth.store';
import { storeToRefs } from 'pinia';

export function useLogin() {
  const auth = useAuthStore();
   const { isLoading, error } = storeToRefs(auth);

  const email = ref('');
  const password = ref('');

  async function submitLogin() {
    await auth.login({ email: email.value, password: password.value });
    if (!auth.error) {
      console.log('Login efetuado!');
    }
  }

  return {
    email,
    password,
    submitLogin,
    isLoading,
    errorMessage: error
  };
}