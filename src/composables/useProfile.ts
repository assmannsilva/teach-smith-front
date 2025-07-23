import { useAuthStore } from '@/stores/auth.store';
import authService from '@/services/auth.service';

export function useProfile() {
  const auth = useAuthStore();

  async function getProfileData() : Promise<boolean> {
    
    if(auth.logged) return true

    const response = await authService.getProfile()
    if (!response.user || !response.organization) return false;

    auth.login(response.user,response.organization)

    return true
  }

  return {
    getProfileData
  };
}