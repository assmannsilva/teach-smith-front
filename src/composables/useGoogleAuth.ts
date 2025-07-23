import authService from '@/services/auth.service';
import { useAuthStore } from '@/stores/auth.store';
import { storeToRefs } from 'pinia';

export function useGoogleAuth() {
  const auth = useAuthStore();

  async function submitGoogleRegistration() {
    const organizationRaw = localStorage.getItem("organization")
    if(!organizationRaw) {
      auth.setError('Organização não encontrada')
      return ;
    }
    const organization = JSON.parse(organizationRaw)
    
    auth.setLoading(true)
    auth.setError(null)

  	const result = await authService.registerWithGoogle(organization.id)
  	if (!result.success) auth.setError(result.message)
  }
  

  async function submitGoogleLogin() {
    auth.setLoading(true)
    auth.setError(null)
    const result = await authService.loginWithGoogle()
    if (!result.success) auth.setError(result.message)
  }

  return {
    submitGoogleRegistration,
    submitGoogleLogin,
    isLoading: auth.isLoading,
  };
}