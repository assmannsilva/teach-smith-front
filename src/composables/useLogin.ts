import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth.store';
import router from '@/router';
import authService from '@/services/auth.service';

export function useLogin() {
  const auth = useAuthStore();

  const email = ref('');
  const password = ref('');

  async function submitLogin() {
    auth.setLoading(true)
    auth.setError(null)

    const result = await authService.login({ email: email.value, password: password.value })
    const errorMessage = result.success ? null : result.message
    
    auth.setError(errorMessage)
    auth.setLoading(false)

    if(result.success) router.push({name: 'home'})
  }

  return {
    email,
    password,
    submitLogin,
    isLoading : auth.isLoading,
    errorMessage: auth.error
  };
}