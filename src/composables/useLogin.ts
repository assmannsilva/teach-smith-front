import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth.store';
import { storeToRefs } from 'pinia';
import router from '@/router';

export function useLogin() {
  const auth = useAuthStore();
   const { isLoading, error } = storeToRefs(auth);

  const email = ref('');
  const password = ref('');

  async function submitLogin() {
    await auth.login({ email: email.value, password: password.value });
    if (!auth.error) router.push({name: 'home'});
  }

  return {
    email,
    password,
    submitLogin,
    isLoading,
    errorMessage: error
  };
}