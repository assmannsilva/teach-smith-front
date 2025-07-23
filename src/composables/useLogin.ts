import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth.store';
import router from '@/router';
import authService from '@/services/auth.service';
import { storeToRefs } from 'pinia';

export function useLogin() {
  const auth = useAuthStore();

  const email = ref('');
  const password = ref('');
   const { error, isLoading } = storeToRefs(auth);

  async function submitLogin() {
    auth.setLoading(true)
    auth.setError(null)
    const result = await authService.login({ email: email.value, password: password.value })
    const errorMessage = result.success ? null : result.message
    
    auth.setError(errorMessage)
    auth.setLoading(false)

    if(result.success) {
      const redirect = router.currentRoute.value.query.redirect as string || 'home';
      router.push(redirect);
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