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

  async function submitGoogleLogin() {
    await auth.loginWithGoogle();
  }

  return {
    email,
    password,
    submitLogin,
    submitGoogleLogin,
    isLoading,
    errorMessage: error
  };
}