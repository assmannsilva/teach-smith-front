import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth.store';
import router from '@/router';
import authService from '@/services/auth.service';
import { storeToRefs } from 'pinia';

export function useRegister() {
  const auth = useAuthStore();

  const email = ref('');
  const password = ref('');
  const firstName = ref('');
  const surname = ref('');
  const passwordConfirmation = ref('');

  const errorsObject = ref({
    firstName: "",
    surname: "",
    password: "",
    email: "",
    passwordConfirmation: ""
  } );

  const { error, isLoading } = storeToRefs(auth);

  async function submitRegister() {
    const organizationRaw = localStorage.getItem("organization")
    if(!organizationRaw) {
      auth.setError("Invalid Organization")
      return;
    }
    const organization = JSON.parse(organizationRaw)
    
    auth.setLoading(true)
    auth.setError(null)

    const result = await authService.register({
       email: email.value, 
       password: password.value,
       password_confirmation: passwordConfirmation.value,
       first_name: firstName.value,
       surname: surname.value,
       organization_id: organization.id
    });

    const errorMessage = result.success ? null : result.message
    auth.setError(errorMessage)
    auth.setLoading(false)
    
    if (result.success) router.push({name: 'home'});
    

    if(result.errors) {
      errorsObject.value = {
        email: result.errors.email?.[0] ?? "",
        password: result.errors.password?.[0] ?? "",
        firstName: result.errors.first_name?.[0] ?? "",
        surname: result.errors.surname?.[0] ?? "",
        passwordConfirmation: result.errors.password_confirmation?.[0] ?? "",
      }
    }
  }

  return {
    firstName,
    surname,
    email,
    password,
    passwordConfirmation,
    submitRegister,
    isLoading,
    errorMessage: error,
    errorsObject
  };
}