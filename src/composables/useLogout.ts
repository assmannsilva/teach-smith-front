import { useAuthStore } from '@/stores/auth.store';
import authService from '@/services/auth.service';
import router from '@/router';

export function useLogout() {
  const auth = useAuthStore();

  async function logout() : Promise<void> {
    await authService.logout()
    auth.logout()
    router.push({name: "login"})
  }

  return {
    logout
  };
}