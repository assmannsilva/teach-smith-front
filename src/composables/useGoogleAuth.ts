import { useAuthStore } from '@/stores/auth.store';
import { storeToRefs } from 'pinia';

export function useGoogleAuth() {
  const auth = useAuthStore();
  let { isLoading } = storeToRefs(auth);

  async function submitGoogleRegistration() {
    const organizationRaw = localStorage.getItem("organization")
    if(!organizationRaw) {
      isLoading.value = false
      return ;
    }
    const organization = JSON.parse(organizationRaw)
    await auth.registerWithGoogle(organization.id)
  }

  async function submitGoogleLogin() {
    await auth.loginWithGoogle();
  }

  return {
    submitGoogleRegistration,
    submitGoogleLogin,
    isLoading,
  };
}